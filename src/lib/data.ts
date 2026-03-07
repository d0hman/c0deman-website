export interface App {
  name: string;
  slug: string;
  description: string;
  features: string[];
  status: "live" | "coming-soon";
}

export const apps: App[] = [
  {
    name: "PO Pro",
    slug: "po-pro",
    description:
      "Streamlined purchase order management for Shopify merchants. Create, track, and receive purchase orders directly in your admin.",
    features: [
      "Create & manage purchase orders",
      "Track order status & receiving",
      "Supplier management",
      "Inventory sync on receive",
    ],
    status: "live",
  },
  {
    name: "Product Assembly",
    slug: "product-assembly",
    description:
      "Manage composite products with parent-component relationships. Automate inventory for building and disassembling kitted products.",
    features: [
      "Build & disassemble assemblies",
      "Nested assembly support",
      "Multi-location inventory ops",
      "Barcode label printing",
    ],
    status: "live",
  },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Custom Shopify App Development",
    description:
      "Bespoke apps tailored to your workflow. From inventory management to custom storefronts, we build what Shopify doesn't.",
    icon: "code",
  },
  {
    title: "Shopify Store Setup & Configuration",
    description:
      "Theme customization, third-party integrations, and store optimization to get your shop running at peak performance.",
    icon: "store",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Technical guidance for Shopify merchants looking to scale. Architecture reviews, performance audits, and growth planning.",
    icon: "strategy",
  },
];
