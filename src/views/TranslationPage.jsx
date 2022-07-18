import Form from "../components/Form";
import NavBar from "../components/reused/NavBar";
import signs from "../signs/signs";
import { useState } from "react";

const TranslationPage = ({ user }) => {
  user = user[0];

  const [translation, setTranslation] = useState(null);

  const onTranslation = (event) => {
    const word = event.text;

    let signArr = [];

    const wordArr = word.split("");

    for (let index = 0; index < wordArr.length; index++) {
      const char = wordArr[index];

      let currentSignObject = signs.filter((img) => img.sign === char);
      signArr.push(...currentSignObject);
    }

    setTranslation([...signArr]);
  };

  return (
    <>
      <NavBar nav={"profile page"} />
      <Form
        onSubmit={onTranslation}
        header={"text"}
        placeholder={"word to translate"}
      />
      {translation
        ? translation.map(({ src }, index) => (
            <img key={index} src={src} alt="" />
          ))
        : ""}
    </>
  );
};

export default TranslationPage;
