import { useState, useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaBars } from "react-icons/fa";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  const [show, setShow] = useState(false);

  return (
    <header>
      <div className={classes.logo}>
        React <span>Meet</span> Ups
      </div>
      <button className={classes.icon} onClick={() => setShow(!show)}>
        <FaBars />
      </button>
      <div className={show ? `${classes.show}` : `${classes.navLinks}`}>
        <button
          className={classes.iconInContainer}
          onClick={() => setShow(!show)}
        >
          <FaBars />
        </button>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/"
          >
            All Meetups
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/new-meetups"
          >
            Add New Meetups
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/favorites"
          >
            Favorite Meetups
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </NavLink>
        </li>
      </div>
    </header>
  );
};

export default MainNavigation;
