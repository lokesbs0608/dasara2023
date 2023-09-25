import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import Images from "../../../public/mysuru_palace_ (1) 3.png";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../languageContext";
import GetApi from "../../utils/network";

const PressNote = () => {
  const [data, setData] = useState([{ images: { images: [] } }]);
  const { language } = useLanguage();
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        const resp = await GetApi("gallery"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);
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
        {data[0]?.images?.images?.map((item: any, index: number) => {
          const marginTopStyle =
            index >= 3 ? { marginTop: "120px" } : { marginTop: "40px" }; // Conditional style
          return (
            <div
              key={index}
              style={{ ...marginTopStyle }}
              className={`${styles.container}`}
            >
              <Image
                width={100}
                height={100}
                src={item}
                alt="yes"
                className={styles.sub_image}
              />
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
