import SlideItem from "./SlideItem";

type ProjectItem = {
  name: string;
  description: string;
  year: string;
  role: string;
  img: string;
  alt: string;
  projectLink?: string;
  codepenLink?: string;
  githubLink?: string;
  slides: SlideItem[];
};

export default ProjectItem;
