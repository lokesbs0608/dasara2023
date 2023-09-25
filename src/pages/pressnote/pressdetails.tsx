import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import BlueFrmae from "../../../public/images/BlueFrame.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { useRouter } from "next/router";

const PressDetails = () => {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const queryId = router.query.id?.toString();
    setId(queryId);
    async function fetchData() {
      try {
        const resp = await GetApi(
          `pressnote/${queryId}`
        );
        setNews(resp);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [router.query.id]);

  const { language } = useLanguage();
  const [news, setNews] = useState({
    Id: 0,
    CreatedAt: "",
    UpdatedAt: "",
    news_title_en: null,
    news_title_kn: "",
    news_content_short_en: null,
    news_content_short_kn: "",
    news_images: { images: [] },
    news_content_long_kn: "",
    news_content_long_en: null,
    news_date: "",
  });

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
          {news?.UpdatedAt}
        </p>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          {language === "kn"
            ? news?.news_content_long_kn
            : news?.news_content_short_en
            ? news?.news_content_short_en
            : news?.news_content_long_kn}
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
          {news?.news_images?.images?.map((image: string, index: number) => {
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
                  src={image}
                  alt="yes"
                  className={styles.sub_image}
                />
                <Image src={Videfrmaw} alt="yes" className={styles.image} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ width: "100%", marginTop: "120px" }}>
        <Image width={2000} src={BlueFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default PressDetails;
