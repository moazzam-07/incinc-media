export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We take the time to understand your requirements, goals, and vision.",
    image: "/assets/images/discover.jpg",
  },
  {
    number: "02",
    title: "Define",
    description: "Based on the discovery, we define the project's scope and objectives.",
    image: "/assets/images/define.jpg",
  },
  {
    number: "03",
    title: "Design",
    description: "We create detailed designs taking into account the latest technologies and trends.",
    image: "/assets/images/design.jpg",
  },
  {
    number: "04",
    title: "Develop",
    description: "Our team of experts works to turn the designs into a functional product.",
    image: "/assets/images/develop.jpeg",
  },
  {
    number: "05",
    title: "Deploy",
    description: "We deploy the product, ensuring it is configured correctly and ready for use.",
    image: "/assets/images/deploy.jpeg",
  },
  {
    number: "06",
    title: "Deliver",
    description: "A top-quality product that meets your needs and exceeds expectations.",
    image: "/assets/images/deliver.jpeg",
  },
];
