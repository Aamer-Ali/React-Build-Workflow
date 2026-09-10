import { NavLink, Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
