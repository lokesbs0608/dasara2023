import React from "react";
import styles from "./styles.module.scss";

const LiveStrem = () => {
  return (
    <div className={styles.bg}>
      <div className="flex items-center justify-center gap-12 py-24">
        <div>
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/jGRIl6pcXoM?si=FRubKsxv5jIidiJA&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveStrem;
