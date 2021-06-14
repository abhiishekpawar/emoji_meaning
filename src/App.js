import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😁": "Beaming Face with Smiling Eyes",
  "😉": "Winky Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😎": "Smiling Face with Sunglasses",
  "😞": "Disappointed Face"
};
var myemoji = Object.keys(emojiDict);

export default function App() {
  const [emojimeaning, setemojimeaning] = useState("");
  function emoji(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var emojimeaning = emojiDict[userInput];
    // console.log(emojimeaning);
    if (emojimeaning === undefined) {
      emojimeaning = "'we don't have this emoji meaning in our databacse'";
    }
    setemojimeaning(emojimeaning);
  }
  function emojiclickmening(emoji) {
    var emojimeaning = emojiDict[emoji];
    setemojimeaning(emojimeaning);
  }
  return (
    <div className="App">
      <h1>Guess my Emoji</h1>
      <input onChange={emoji}></input>
      <div>
        <h3>{emojimeaning}</h3>
      </div>
      <h3>emojis we know </h3>
      {myemoji.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickmening(emoji)}
            style={{ fontSize: "1.3rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
