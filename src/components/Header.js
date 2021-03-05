import React from "react";
import "./Header.css";
import { IconButton, Input } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import HouseIcon from "@material-ui/icons/House";
import PeopleIcon from "@material-ui/icons/People";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://www.searchpng.com/wp-content/uploads/2018/12/Splash-Facebook-Icon-Png.png"
        ></img>
        <Input placeholder="Search Facebook" />
      </div>
      <div className="header__middle">
        <IconButton>
          {" "}
          <HomeIcon />
        </IconButton>{" "}
        <IconButton>
          {" "}
          <MovieIcon />
        </IconButton>{" "}
        <IconButton>
          {" "}
          <HouseIcon />
        </IconButton>{" "}
        <IconButton>
          {" "}
          <PeopleIcon />
        </IconButton>
        <IconButton>
          <SportsEsportsIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <AccountCircleIcon></AccountCircleIcon>
        </IconButton>
        <IconButton>
          {" "}
          <AddIcon />
        </IconButton>{" "}
        <IconButton>
          {" "}
          <MessageIcon />
        </IconButton>{" "}
        <IconButton>
          {" "}
          <NotificationsIcon></NotificationsIcon>
        </IconButton>{" "}
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
