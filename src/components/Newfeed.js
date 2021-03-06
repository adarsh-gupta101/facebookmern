import React, { useEffect, useState } from "react";
import axios from "./axios";

function Newfeed() {
  const [body, setbody] = useState([]);
  useEffect(() => {
    async function fetchs() {
      const body = await axios.get("/api/posts");
      setbody(body.data);
    }
    fetchs();
  }, []);
  useEffect(() => {
    async function uvv() {
      const body = await axios.get("/api/posts");
    }
    uvv();
  }, []);
  return (
    <div className="newfeed">
      {body.map((mes) => {
        return <p>{mes.postpost}</p>;
      })}
    </div>
  );
}

export default Newfeed;
