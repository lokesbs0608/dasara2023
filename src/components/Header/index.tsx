import React from "react";
import { useLanguage } from "../languageContext";

function Header() {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (event: { target: { value: any } }) => {
    const newLanguage = event.target.value;
  
    changeLanguage(newLanguage);
  };
  console.log(language)
  return (
    <div
      className="px-24 py-4"
      style={{ margin: "0 auto", background: "#fff" }}
    >
      <div className="flex justify-between">
        <div>
          <a href="#"> {language === 'kn'? 'ಮುಖಪುಟ':'Home'}</a>
        </div>
        <div>
          <a>{language === 'kn'? 'ನಮ್ಮ ಬಗ್ಗೆ​ ': 'About'}</a>
        </div>
        <div>
          <a href="#liveStream">{language == 'kn'? 'ಕಾರ್ಯಕ್ರಮ​':  'Event'}</a>
        </div>
        <div>
          <a>{language === 'kn'? ' ಟಿಕೆಟ್‌ಗಳು ಮತ್ತು ಲೈವ್':  'Tickets & Live '} </a>
        </div>
        <div>
          <a> {language === 'kn'? ' ಗ್ಯಾಲರಿ':  'Gallery'}</a>
        </div>
        <div>
          <a> {language === 'kn'? ' ಹತ್ತಿರದ ಸ್ಥಳಗಳು':  'Nearby Places'}</a>
        </div>
        <div>
          <select onChange={handleLanguageChange}>
            <option value={"kn"}>ಕನ್ನಡ</option>
            <option value={"en"}>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
