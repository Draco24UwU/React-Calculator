export interface routes {
  [key: string]: string;
}

const RoutesConstants: routes = {
  home: "/",
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  contact: "/contact",
};

export default RoutesConstants;
