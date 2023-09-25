import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Chamundi from "../../../public/images/Chamundi.svg";
import frmae1 from "../../../public/images/AboutusFrame1.svg";
import frmae2 from "../../../public/images/AboutusFrame2.svg";
import { useLanguage } from "../../components/languageContext";
import GlodFrmae from "../../../public/images/glodframe.svg";

const AboutUs = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.bg}>
     <div style={{ width: "100%",}}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
      <h1
        style={{ color: "#FFF504", fontSize: "3.5rem" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ನಮ್ಮ ಬಗ್ಗೆ" : " ABOUT"}{" "}
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
          <div>
            <Image src={Chamundi} alt="chanmundi" />
          </div>
        </div>
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
          <Image src={frmae1} alt="frame" />
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "2.5rem", fontWeight: "600", color: "#fff" }}
            >
              Naada Habba Mysore Dasara
            </h1>
            <p style={{ textAlign: "center", color: "#fff" }}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LoremIpsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Read More
            </p>
          </div>
          <Image src={frmae2} alt="frame" />
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "50px" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default AboutUs;
