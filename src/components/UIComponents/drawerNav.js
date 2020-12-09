import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: 2000,
    background: '#343a40'
  },
  fullList: {
    width: "auto",
    
  },
  divider: {
    background: "#ffffff",
  },
  drawer: {
    color: "#ffffff",
    top: 3.5,
    outline: null
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <li className="nav-item">
        <Link className="nav-link text-white" to="/movies/nowPlaying">
          Now Playing
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/movies/latest">
          Latest
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/movies/topRated">
          Top Retad
        </Link>
      </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/movies/upcoming">
          Upcoming
        </Link>
      </li>
      <Divider className={classes.divider}/>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/movies/favorites">
            Favorites
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-white" to="/movies/watchlist">
            Watch List
          </Link>
        </li>
    </div>
  );

  return (
    <div>
        <React.Fragment key="right">
          <Button onClick={toggleDrawer("right", true)} className={classes.drawer}>More</Button>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}