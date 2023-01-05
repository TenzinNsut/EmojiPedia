import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";

function emojidata(obj) {
  return (
    <Entry
      key={obj.id}
      emoji={obj.emoji}
      name={obj.name}
      meaning={obj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(emojidata)}</dl>
    </div>
  );
}

export default App;
