import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Chamundi from "../../../public/images/Chamundi.svg";
import frmae1 from "../../../public/images/AboutusFrame1.svg";
import frmae2 from "../../../public/images/AboutusFrame2.svg";
import { useLanguage } from "../../components/languageContext";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GetApi from "../../utils/network";

const AboutUs = () => {
  const [data, setData] = useState([{ content_kn: "", content_en: "" }]);
  const { language } = useLanguage();
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        const resp = await GetApi("about_mysuru_dasara"); // Replace with the desired API endpoint
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
        {language === "kn" ? "ನಮ್ಮ ಬಗ್ಗೆ" : " ABOUT"}{" "}
      </h1>
      <div className="flex  items-start justify-center gap-1 py-12">
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

          }}
        >
          <Image src={frmae1} alt="frame" />
          <div style={{ padding: "50px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "2.5rem", fontWeight: "600", color: "#fff" ,marginBottom:'30px' }}
            >
         
            {language === "kn"
              ? "ನಾಡ ಹಬ್ಬ ಮೈಸೂರು  ದಸರಾ"
              : " Naada Habba Mysore Dasara "}
            </h1>
            <p style={{ textAlign: "justify", color: "#fff" }}>
              {language == "kn"
                ? data[0]?.content_kn
                : data[0]?.content_en
                ? data[0]?.content_en
                : data[0]?.content_kn}
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
