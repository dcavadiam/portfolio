import type { Project } from "@custom-types/project";

export const projects: Project[] = [
  {
    title: "User Product Manager",
    description:
      "The application provides a dashboard with two main sections: User Management, which allows for viewing and basic management of a list of users, and Product Management, which enables the viewing and basic management of a list of products. Both sections offer simple tools for efficient administration of users and products.",
    image: "/user-product-manager.webp",
    technologies: ["Next", "Tailwind", "Typescript", "ShadCN"],
    links: [
      {
        name: "Code",
        url: "https://github.com/dcavadiam/users-products-manager",
      },
      {
        name: "Deploy",
        url: "https://users-products-manager.vercel.app/",
      },
    ],
  },
  {
    title: "Rick and Morty Characters",
    description:
      "Website in which you can see all the Rick and Morty characters, search by name, sort the list, mark as favorite, see the character and leave comments.",
    image: "/rick-and-morty.webp",
    technologies: ["Next", "Tailwind", "Typescript"],
    links: [
      {
        name: "Code",
        url: "https://github.com/dcavadiam/blossom-test",
      },
      {
        name: "Deploy",
        url: "https://blossom-test-dcavadia.vercel.app/",
      },
    ],
  },
  {
    title: "4 in line",
    description:
      "This is a simple game where you have to make a line of 4 matching colors without your opponent being able to do so.",
    image: "/cuatro-en-linea.webp",
    technologies: ["Vite", "Javascript"],
    links: [
      {
        name: "Code",
        url: "https://github.com/dcavadiam/react/tree/main/self-learning/cuatro-en-linea",
      },
      {
        name: "Deploy",
        url: "https://cm-fourinline.netlify.app",
      },
    ],
  },
];
