
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EmployeeHub</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/employee-form">Employee Form</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
