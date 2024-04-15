import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type NavItemProps = {
  label: string;
  href: string;
  target?: string;
  icon?: IconDefinition | null;
};

export default NavItemProps;
