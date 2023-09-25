import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import Images from "../../../public/mysuru_palace_ (1) 3.png";
import BlueFrmae from "../../../public/images/BlueFrame.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";

const PressDetails = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.bg2}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={BlueFrmae} alt="frame" />
      </div>
      <div style={{ padding: "40px" }}>
        <h1
          style={{ color: "#000", fontSize: "3.5rem" }}
          className="text-center"
        >
          {" "}
          {language === "kn" ? "ಪತ್ರಿಕಾ ಟಿಪ್ಪಣಿ" : "PRESS NOTE"}{" "}
        </h1>
        <p style={{ color: "#15929C", fontSize: "1.5rem" }}>
          Date: 18 October 2023, 12:00 A.M
        </p>
        <p style={{marginTop:'20px',fontSize:'18px'}}>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum
          Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem
          Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum
          Lorem Ipsum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum
          Ipsum Lorem Ipsum Ipsum Lorem IpsumIpsum Lorem Ipsum Ipsum Lorem Ipsum
          Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem
          Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum
          Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum
          Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem
          Ipsum Ipsum Lorem Ipsum Lorem Ipsum LoremIpsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Ipsum Lorem IpsumIpsum Lorem Ipsum Ipsum Lorem
          Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum
          Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem IpsumIpsum
          Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum Ipsum Lorem Ipsum .{" "}
        </p>
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
      </div>

      <div style={{ width: "100%" ,marginTop:'120px'}}>
        <Image width={2000} src={BlueFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default PressDetails;
