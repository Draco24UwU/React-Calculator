import { Link } from "react-router-dom";

// Define la interfaz para cada elemento del dropdown
interface DropDownItem {
  title: string;
  route?: string;
  component?: React.ElementType;
}

// Define la interfaz para la lista de dropdowns
interface DropDownListProps {
  title: string;
  dropdowns: DropDownItem[];
}

function DropDown({ dropdowns, title }: DropDownListProps) {
  return (
    <div className="dropdown dropdown-hover max-lg:dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {title}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {dropdowns.map((item, index) => (
          <li className="flex" key={index}>
            {item.route ? (
              <Link to={"/"}>
                <span className="label-text">{item.title}</span>
                {item.component ? <item.component /> : null}
              </Link>
            ) : item.component ? (
              <div className="form-control">
                <label className="flexBetween gap-6 cursor-pointer">
                  <span className="label-text">{item.title}</span>
                  <item.component className="toggle-success" />
                </label>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
