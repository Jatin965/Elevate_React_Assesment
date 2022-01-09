import React, {useState} from "react";

const Header = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="header">
      <div className="logo">
        <img src="" alt="Voolopay Logo" />
      </div>
      <div className="menu">
        <ul>
          <li onClick={() => setActive(1)} className={active == 1 ? 'active' : ''}>
            <a>Home</a>
            <span></span>
          </li>
          <li onClick={() => setActive(2)} className={active == 2 ? 'active' : ''}>
            <a>Product</a>
            <span></span>
          </li>
          <li onClick={() => setActive(3)} className={active == 3 ? 'active' : ''}>
            <a>Features</a>
            <span></span>
          </li>
          <li onClick={() => setActive(4)} className={active == 4 ? 'active' : ''}>
            <a>Customers</a>
            <span></span>
          </li>
          <li onClick={() => setActive(5)} className={active == 5 ? 'active' : ''}>
            <a>Pricing</a>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="btns">
        <a>Log In</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
