import type { Project, WebProject } from "@custom-types/project";

export const projects: Project[] = [
  {
    title: "Taski App",
    description:
      "Taski App is a task management application that allows you to create, edit, and delete tasks. It also allows you to mark tasks as completed and delete them.",
    image: "/taskiapp.webp",
    technologies: ["Next", "Tailwind", "Typescript", "ShadCN"],
    links: [
      {
        name: "Code",
        url: "https://github.com/dcavadiam/taski-app",
      },
      {
        name: "Deploy",
        url: "https://taski-app.vercel.app/",
      },
    ],
  },
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
];

export const webProjects: WebProject[] = [  
  {
    title: "Maripocean",
    image: "/maripocean.webp",
    description: "Maripocean is a website for a company that offers water sports services in the department of Atlántico. It is set up and built in WordPress.",
    link: [
      {
        name: "Deploy",
        url: "https://maripocean.com/",
      },
    ],
  },
  {
    title: "Wedding Invitation",
    image: "/wedding-invitation.webp",
    description: "This website was created for a interactive wedding invitation, where the guests can see the wedding details and RSVP. It is set up and built in Next.js.",
    link: [
      {
        name: "Deploy",
        url: "https://rachel-diego.vercel.app/",
      },
    ],
  },
];