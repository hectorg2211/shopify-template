const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}) {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key!,
      },
      body: JSON.stringify({ query, variables }),
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0]?.message ?? "GraphQL error");
    }

    return { status: result.status, body: body as T };
  } catch (error) {
    console.error("Shopify fetch error:", error);
    return { status: 500, error: "Error receiving data" };
  }
}

export const productsQuery = `
  query getProducts($first: Int!) {
    products(first: $first, sortKey: TITLE) {
      edges {
        node {
          id
          title
          description
          handle
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export type Product = {
  id: string;
  title: string;
  description: string;
  handle: string;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  variants?: {
    edges: Array<{ node: { id: string } }>;
  };
};

export type ProductsResponse = {
  data: {
    products: {
      edges: Array<{ node: Product }>;
    };
  };
};

const productByHandleQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

export type ProductByHandleResponse = {
  data: { product: Product | null };
};

export async function getProductByHandle(handle: string) {
  const result = await shopifyFetch<ProductByHandleResponse>({
    query: productByHandleQuery,
    variables: { handle },
  });

  if ("error" in result) {
    return null;
  }

  return result.body.data.product;
}

export async function getAllProducts() {
  const result = await shopifyFetch<ProductsResponse>({
    query: productsQuery,
    variables: { first: 20 },
  });

  if ("error" in result) {
    return [];
  }

  return result.body.data.products.edges.map((edge) => edge.node);
}

const cartFragment = `
  id
  checkoutUrl
  totalQuantity
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              title
              handle
              featuredImage {
                url
                altText
              }
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

const cartCreateMutation = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart { ${cartFragment} }
      userErrors { field message }
    }
  }
`;

const cartLinesAddMutation = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ${cartFragment} }
      userErrors { field message }
    }
  }
`;

const cartLinesUpdateMutation = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ${cartFragment} }
      userErrors { field message }
    }
  }
`;

const cartLinesRemoveMutation = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ${cartFragment} }
      userErrors { field message }
    }
  }
`;

const cartQuery = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ${cartFragment}
    }
  }
`;

export type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
      featuredImage: { url: string; altText: string | null } | null;
    };
    price: { amount: string; currencyCode: string };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: Array<{ node: CartLine }>;
  };
};

export async function createCart(variantId: string, quantity = 1) {
  const result = await shopifyFetch<{
    data: { cartCreate: { cart: Cart | null; userErrors: Array<{ message: string }> } };
  }>({
    query: cartCreateMutation,
    variables: {
      input: {
        lines: [{ merchandiseId: variantId, quantity }],
      },
    },
  });

  if ("error" in result) return null;
  const { cart, userErrors } = result.body.data.cartCreate;
  if (userErrors.length > 0) return null;
  return cart;
}

export async function addToCart(cartId: string, variantId: string, quantity = 1) {
  const result = await shopifyFetch<{
    data: { cartLinesAdd: { cart: Cart | null; userErrors: Array<{ message: string }> } };
  }>({
    query: cartLinesAddMutation,
    variables: {
      cartId: cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
  });

  if ("error" in result) return null;
  const { cart, userErrors } = result.body.data.cartLinesAdd;
  if (userErrors.length > 0) return null;
  return cart;
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  const result = await shopifyFetch<{
    data: { cartLinesUpdate: { cart: Cart | null; userErrors: Array<{ message: string }> } };
  }>({
    query: cartLinesUpdateMutation,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
  });

  if ("error" in result) return null;
  const { cart, userErrors } = result.body.data.cartLinesUpdate;
  if (userErrors.length > 0) return null;
  return cart;
}

export async function removeFromCart(cartId: string, lineId: string) {
  const result = await shopifyFetch<{
    data: { cartLinesRemove: { cart: Cart | null; userErrors: Array<{ message: string }> } };
  }>({
    query: cartLinesRemoveMutation,
    variables: { cartId, lineIds: [lineId] },
  });

  if ("error" in result) return null;
  const { cart, userErrors } = result.body.data.cartLinesRemove;
  if (userErrors.length > 0) return null;
  return cart;
}

export async function getCart(cartId: string) {
  const result = await shopifyFetch<{ data: { cart: Cart | null } }>({
    query: cartQuery,
    variables: { cartId },
  });

  if ("error" in result) return null;
  return result.body.data.cart;
}
