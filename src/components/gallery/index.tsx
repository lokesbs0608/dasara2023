import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import Images from "../../../public/mysuru_palace_ (1) 3.png";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../languageContext";

const PressNote = () => {
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
        {language === "kn" ? "ಗ್ಯಾಲರಿ" : "GALLERY"}{" "}
      </h1>
      <h2 style={{ color: "#fff", fontSize: "2rem" }} className="text-center">
        {language === "kn" ? "ದಸರಾ - 2023" : " Dasara - 2023"}{" "}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          const marginTopStyle = index >= 3 ? { marginTop: "120px" } : {marginTop: "40px"}; // Conditional style

          return (
            <div
              style={{ ...marginTopStyle }}
              className={`${styles.container}`}
            >
              <Image src={Images} alt="yes" className={styles.sub_image} />
              <Image src={Videfrmaw} alt="yes" className={styles.image} />
            </div>
          );
        })}
      </div>

      <div style={{ width: "100%", marginTop: "200px" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default PressNote;
