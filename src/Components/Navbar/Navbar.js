import { Link } from "react-router-dom";
import logo from "../../images/logo 1.png";

const Navbar = ({ data }) => {
  return (
    <div className="flex items-center justify-between bg-[#283046] mx-6 my-5 rounded-md px-5 py-2">
      <div>
        <Link to="/">
          <img className="w-[155px] rounded-md" src={logo} alt="" />
        </Link>
      </div>

      <ul className="flex items-center text-white flex-row gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
