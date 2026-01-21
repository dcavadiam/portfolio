export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: Link[];
}

export interface WebProject {
  title: string;
  image: string;
  description: string;
  link: Link[];
}

export interface Link {
  name: string;
  url: string;
}
