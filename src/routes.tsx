import Resto from "./pages/resto";
import Day from "./pages/day";
import Owner from "./pages/owner";
import Contact from "./pages/contact";

const pages = [
  {
    name: "Resto",
    path: "/",
    element: <Resto />,
  },
  {
    name: "Day",
    path: "/day",
    element: <Day />,
  },
  {
    name: "Owner",
    path: "/owner",
    element: <Owner />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];

export const menus = pages.map((page) => ({name: page.name, path: page.path}));

export const routes = pages.map((page) => ({path: page.path, element: page.element}));
