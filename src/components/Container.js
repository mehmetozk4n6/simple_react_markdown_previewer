import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

function Container() {
  const [text, setText] = useState("");
  const [entireScreen, setEntireScreen] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center container">
      <Editor
        setText={setText}
        entireScreen={entireScreen}
        setEntireScreen={setEntireScreen}
      />
      <Preview text={text} />
    </div>
  );
}

export default Container;
