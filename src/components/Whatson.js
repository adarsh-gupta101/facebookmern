import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import PhotoIcon from "@material-ui/icons/Photo";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import "./Whatson.css";
import axios from "./axios";

function Whatson() {
  const [input, setinput] = useState("Whats On Your Mind");
  function Send() {
    useEffect(() => {
      async function fetchdata() {
        await axios.post("/api/posts", {
          username: "unknown",
          postpost: { input },
        });
      }
      fetchdata();
    }, []);
  }

  return (
    <div className="whatson">
      <div className="whatson_top" style={{ justifyContent: "space-between" }}>
        <AccountCircleIcon />
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        ></input>
        <button onClick={Send}>send</button>
      </div>
      <hr></hr>
      <div className="whatson_bottom">
        <div>
          <LiveTvIcon />
          <h6>Go live</h6>
        </div>
        <div>
          {" "}
          <PhotoIcon />
          <h6>Photos/Videos</h6>
        </div>
        <div>
          {" "}
          <EmojiEmotionsIcon />
          <h6>Feelings</h6>
        </div>
      </div>
    </div>
  );
}

export default Whatson;
