import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="car">🚗</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>

      {/* mobile devices */}
      <div className="mobile-container">
        <ul>
          <li>
            <Link to="/">
              <FaHome fill="white" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <GoCommentDiscussion fill="white" />
            </Link>
          </li>
          <li>
            <Link to="/contactus">
              <IoMdContact fill="white" />
            </Link>
          </li>
          <li>
            <Link to="/product">
              <IoBag  fill="white"/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
