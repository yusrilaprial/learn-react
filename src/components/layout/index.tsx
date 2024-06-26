import "./index.css";
import {Link} from "react-router-dom";
import {menus} from "../../routes";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <header>
        <h1>Restoku</h1>
        <nav>
          {menus.map((menu, index) => (
            <Link key={index} to={menu.path}>
              {menu.name}
            </Link>
          ))}
        </nav>
      </header>
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
