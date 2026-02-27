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
};

export type ProductsResponse = {
  data: {
    products: {
      edges: Array<{ node: Product }>;
    };
  };
};

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
