import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Leftsidebar.css";
function Leftsidebar() {
  return (
    <div className="leftsidebar">
      <IconButton>
        {" "}
        <AccountCircleIcon />
        <h5>Accounts</h5>
      </IconButton>
      <IconButton>
        <ContactSupportIcon />
        <h5>Covid Helpline</h5>
      </IconButton>
      <IconButton>
        {" "}
        <PeopleOutlineIcon />
        <h5>Friends</h5>
      </IconButton>

      <IconButton>
        <HomeWorkIcon />
        <h5>MarketPlace</h5>
      </IconButton>

      <IconButton>
        <MovieCreationIcon />
        <h5>Videos</h5>
      </IconButton>
      <IconButton>
        <BookmarkIcon /> <h5>Saved</h5>
      </IconButton>
      <IconButton>
        {" "}
        <ExpandMoreIcon />
        <h5> More</h5>
      </IconButton>
    </div>
  );
}

export default Leftsidebar;
