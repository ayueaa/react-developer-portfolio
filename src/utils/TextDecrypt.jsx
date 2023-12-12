import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
  chars: [
    "-",
    ".",
    "/",
    "*",
    "!",
    "?",
    "#",
    "%",
    "&",
    "@",
    "$",
    "€",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    "~",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  interval: 50,
};

const TextDecrypt = ({ text }) => {
  const { result, dencrypt } = useDencrypt(decryptOptions);

  useEffect(() => {
    if (text) {
      const action = setTimeout(() => dencrypt(text), 500);

      return () => clearTimeout(action);
    }
  }, [text, dencrypt]);

  return <span>{result}</span>;
};

export default TextDecrypt;
