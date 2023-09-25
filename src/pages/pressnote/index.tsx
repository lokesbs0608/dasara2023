import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";

const PressNote = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        const resp = await GetApi("pressnote"); // Replace with the desired API endpoint
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
            {data &&
              data?.map((item: any, index: number) => {
                console.log(item);
                return (
                  <tr key={index}>
                    <td>{item?.UpdatedAt}</td>
                    <td>
                      {language === "kn"
                        ? item?.news_title_kn
                        : item?.news_title_en
                        ? item?.news_title_en
                        : item?.news_title_kn}
                    </td>
                    <td>
                      {(language === "kn"
                        ? item?.news_content_long_kn
                        : item?.news_content_short_en
                        ? item?.news_content_short_en
                        : item?.news_content_long_kn
                      )?.substring(0, 30)}
                      <Link
                        onClick={() =>
                          localStorage.setItem("pressNoteID", item?.Id)
                        }
                        style={{ color: "#FFF504", fontSize: "14px" }}
                        href="pressnote/pressdetails"
                        as={`pressnote/pressdetails?id=${item?.Id}`}
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
