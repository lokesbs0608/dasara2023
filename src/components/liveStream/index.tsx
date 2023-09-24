import React from "react";
import styles from "./styles.module.scss";
import { useLanguage } from "../languageContext";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import frame from "../../../public/images/Frames.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";

const LiveStrem = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.bg}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
      <h1
        style={{ color: "#FFF504", fontSize: "3.5rem" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ನೇರ ಪ್ರಸಾರ" : " Live Stream"}{" "}
      </h1>
      <div className="flex  items-center justify-center gap-1 py-12">
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={`${styles.container}`}>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/jGRIl6pcXoM?si=FRubKsxv5jIidiJA&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Image src={Videfrmaw} alt="yes" className={styles.image} />
          </div>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Image src={frame} alt="frame" />
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "2.5rem", fontWeight: "600", color: "#fff" }}
            >
              Yuva Dasara - 2023
            </h1>
            <p style={{ textAlign: "center", color: "#fff" }}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LoremIpsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum.{" "}
            </p>
          </div>
          <Image src={frame} alt="frame" />
        </div>
      </div>
      <div className="flex  items-center justify-center gap-1 py-12">
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Image src={frame} alt="frame" />
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "2.5rem", fontWeight: "600", color: "#fff" }}
            >
              Jambu Savari - 2023
            </h1>
            <p style={{ textAlign: "center", color: "#fff" }}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LoremIpsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum.{" "}
            </p>
          </div>
          <Image src={frame} alt="frame" />
        </div>
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={`${styles.container}`}>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/jGRIl6pcXoM?si=FRubKsxv5jIidiJA&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Image src={Videfrmaw} alt="yes" className={styles.image} />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "50px" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default LiveStrem;
