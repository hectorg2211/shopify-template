"use client";

import * as React from "react";
import { Drawer as VaulDrawer } from "vaul";

const Drawer = VaulDrawer.Root;
const DrawerTrigger = VaulDrawer.Trigger;
const DrawerPortal = VaulDrawer.Portal;
const DrawerClose = VaulDrawer.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Overlay>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Overlay>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/80 ${className ?? ""}`}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Content>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <VaulDrawer.Content
      ref={ref}
      className={`fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-zinc-200 bg-white ${className ?? ""}`}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-200" />
      {children}
    </VaulDrawer.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`grid gap-1.5 p-4 text-center sm:text-left ${className ?? ""}`}
    {...props}
  />
);

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`mt-auto flex flex-col gap-2 p-4 ${className ?? ""}`}
    {...props}
  />
);

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Title>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Title>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Title
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className ?? ""}`}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof VaulDrawer.Description>,
  React.ComponentPropsWithoutRef<typeof VaulDrawer.Description>
>(({ className, ...props }, ref) => (
  <VaulDrawer.Description
    ref={ref}
    className={`text-sm text-zinc-500 ${className ?? ""}`}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
