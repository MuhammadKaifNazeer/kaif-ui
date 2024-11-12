interface TemplateFeature {
  title: string;
  description: string;
}

interface Template {
  title: string;
  description: string;
  price: string;
  previewLink: string;
  buyLink: string;
  images: string[];
  techStack: string[];
  features: TemplateFeature[];
}

const TemplatesData: Template[] = [
  {
    title: "Kaif UI Docs",
    description:
      "Kaif UI Docs is a premium, fully customizable template for building beautiful and functional documentation websites. Perfect for products, APIs, or personal projects, it offers a sleek, modern design and user-friendly interface.",
    price: "$49",
    previewLink: "https://kaifuidocs.vercel.app/",
    buyLink: "https://buymeacoffee.com/muhammadkaifnazeer/e/330637",
    images: [
      "/templates/kaif-ui-docs/introduction.png",
      "/templates/kaif-ui-docs/kaif-ui-docs.png",
      "/templates/kaif-ui-docs/search-two.png",
      "/templates/kaif-ui-docs/search.png",
      "/templates/kaif-ui-docs/installation.png",
      "/templates/kaif-ui-docs/library.png",
      "/templates/kaif-ui-docs/library-two.png",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Fuma Docs"],
    features: [
      {
        title: "Lightning-Fast Setup",
        description:
          "Get started in minutes with a streamlined setup process designed to jumpstart your documentation.",
      },
      {
        title: "Fully Customizable Design",
        description:
          "Tailor every detail with ease—Kaif UI Docs adapts to your brand’s unique style and needs.",
      },
      {
        title: "Built with Next.js and TypeScript",
        description:
          "Leverage modern frameworks for a fast, scalable, and reliable documentation experience.",
      },
      {
        title: "Responsive and Mobile-Friendly",
        description:
          "Enjoy seamless usability across all devices, so your docs look great on any screen size.",
      },
      {
        title: "Optimized for SEO",
        description:
          "Boost discoverability with SEO-ready pages to make your documentation easy to find and access.",
      },
      {
        title: "Fuma Docs Integration",
        description:
          "Effortlessly organize and navigate content with Fuma Docs—built to make complex docs simple.",
      },
    ],
  },
  {
    title: "Fluxis Studios",
    description:
      "A premium website UI template designed for creative agencies, featuring a modern and minimalist layout, responsive design, and easy customization options using Next.js and Tailwind CSS.",
    price: "$29",
    previewLink: "https://fluxisstudios.vercel.app/",
    buyLink: "https://buymeacoffee.com/muhammadkaifnazeer/e/319848",
    images: [
      "/templates/fluxis-studios/fluxis-studios.png",
      "/templates/fluxis-studios/pricingPage.png",
      "/templates/fluxis-studios/contactPage.png",
      "/templates/fluxis-studios/workPage.png",
      "/templates/fluxis-studios/services.png",
    ],
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    features: [
      {
        title: "Responsive Design",
        description:
          "The template adapts seamlessly to various screen sizes and devices, ensuring a great user experience on both desktop and mobile.",
      },
      {
        title: "Easy Customization",
        description:
          "Modify colors, fonts, and layout elements effortlessly with Tailwind CSS utility classes to match your brand identity.",
      },
      {
        title: "Pre-built Pages",
        description:
          "Includes multiple pre-designed pages such as Home, Pricing, Work, and Contact, ready for you to customize and launch.",
      },
      {
        title: "Optimized Performance",
        description:
          "Built with Next.js for fast loading times and SEO-friendly structure, ensuring your website performs well in search rankings.",
      },
      {
        title: "Smooth Animations",
        description:
          "Utilizes Framer Motion for smooth and engaging animations that enhance user interactions without sacrificing performance.",
      },
    ],
  },
];

export default TemplatesData;
