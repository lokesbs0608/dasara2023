import React from "react";

function Header() {
  return (
    <div className="px-24 py-4" style={{ margin: "0 auto" ,background:'#fff'}}>
      <div className="flex justify-between">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a>About</a>
        </div>
        <div>
          <a href="#liveStream">Event</a>
        </div>
        <div>
          <a>Tickets & Live</a>
        </div>
        <div>
          <a>Gallery</a>
        </div>
        <div>
          <a>Nearby Places</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
