import DarkToggleButton from "@/components/DarkToggleButton";
import { Link } from "react-router-dom";
import useNavBar from "@/hooks/useNavBar";
import DropDown from "./UI/DropDown";

function Navbar() {
  const { RoutesConstants, currentElement } = useNavBar();

  return (
    <nav className="flexCenter">
      <ul className="flexCenter gap-20 w-full max-md:hidden text-r-sm">
        {Object.entries(RoutesConstants).map(([key, route]) => {
          const routeName = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <li
              key={key}
              className={`${
                currentElement == route
                  ? "border-b dark:border-darkmodetext border-black"
                  : ""
              }`}
            >
              <Link to={route}>{routeName}</Link>
            </li>
          );
        })}
        <li>
          <DropDown
            title="Options"
            dropdowns={[
              { title: "Home", route: "/" },
              { title: "Dark Mode", component: DarkToggleButton },
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
