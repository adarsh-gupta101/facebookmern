import "./App.css";
import Header from "./components/Header";
import Leftsidebar from "./components/Leftsidebar";
import Post from "./components/Post";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Leftsidebar />
        <Post />
        <span>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FfacebookappIndia&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="240"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </span>
      </div>
    </div>
  );
}

export default App;
