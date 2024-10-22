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
        title: "Fluxis Studios",
        description: "A premium website UI template designed for creative agencies, featuring a modern and minimalist layout, responsive design, and easy customization options using Next.js and Tailwind CSS.",
        price: "$49",
        previewLink: "https://fluxisstudios.vercel.app/",
        buyLink: "https://buymeacoffee.com/muhammadkaifnazeer/e/319848",
        images: [
            "/templates/fluxis-studios/fluxis-studios.png",
            "/templates/fluxis-studios/pricingPage.png",
            "/templates/fluxis-studios/contactPage.png",
            "/templates/fluxis-studios/workPage.png",
            "/templates/fluxis-studios/services.png",
        ],
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        features: [
            {
                title: "Responsive Design",
                description: "The template adapts seamlessly to various screen sizes and devices, ensuring a great user experience on both desktop and mobile.",
            },
            {
                title: "Easy Customization",
                description: "Modify colors, fonts, and layout elements effortlessly with Tailwind CSS utility classes to match your brand identity.",
            },
            {
                title: "Pre-built Pages",
                description: "Includes multiple pre-designed pages such as Home, Pricing, Work, and Contact, ready for you to customize and launch.",
            },
            {
                title: "Optimized Performance",
                description: "Built with Next.js for fast loading times and SEO-friendly structure, ensuring your website performs well in search rankings.",
            },
            {
                title: "Smooth Animations",
                description: "Utilizes Framer Motion for smooth and engaging animations that enhance user interactions without sacrificing performance.",
            },
        ],
    },
];
  
export default TemplatesData;
