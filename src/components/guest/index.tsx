import React from "react";
import styles from "./styles.module.scss";
import Icon from "../../../public/images/Mask group.png";
import Hamsa from "../../../public/images/hamsa.png";
import Image from "next/image";
import { useLanguage } from "../languageContext";

const Guest = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.bg}>
      <Image className="mt-2" src={Icon} alt="icon" />
      <div className="flex items-center justify-center gap-12 py-16">
        <Image width={500} src={Hamsa} alt="Hamsa" />
        <div className={styles.content}>
          <h3>
            {" "}
            {language === "kn"
              ? "ಉದ್ಘಾಟನೆಯ ಗೌರವಾನ್ವಿತ ಮುಖ್ಯ ಅತಿಥಿ"
              : "Chief Guest of Honor at the Inauguration"}{" "}
          </h3>
          <h1> {language === "kn" ? "ನಾಧಬ್ರಹ್ಮಶ್ರೀ" : "Nadhabrahamshree"}</h1>
          <h1> {language === "kn" ? "ಶ್ರೀ ಹಂಸಲೇಖ " : "Shri Hamsalekha"} </h1>
          <h4>
            {" "}
            {language === "kn"
              ? "ಖ್ಯಾತ ಸಾಹಿತಿ, ಸಂಗೀತ ನಿರ್ದೇಶಕ  "
              : " Renowned writer, music director"}{" "}
          </h4>
        </div>
      </div>
      <Image src={Icon} alt="icon" />
    </div>
  );
};

export default Guest;
