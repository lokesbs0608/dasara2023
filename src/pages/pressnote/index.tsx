import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import Images from "../../../public/mysuru_palace_ (1) 3.png";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";

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
        {language === "kn" ? "ಪತ್ರಿಕಾ ಟಿಪ್ಪಣಿ" : "PRESS NOTE"}{" "}
      </h1>
      <div
        className="text-center"
        style={{ width: "60%", margin: "0 auto", padding: "30px" }}
      >
        <table className={styles.custom_table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Heading</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 56, 7, 89, 1, 1, 1, 1].map((item, index) => {
              return (
                <tr>
                  <td>yes</td>
                  <td>yes</td>
                  <td>
                    yes{" "}
                    <Link
                      style={{ color: "#FFF504", fontSize: "14px" }}
                      href="pressnote/pressdetails"
                      as={`pressnote/pressdetails?id=${index}`}
                    >
                      Read More..
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default PressNote;
