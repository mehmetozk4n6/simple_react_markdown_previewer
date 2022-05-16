import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsHelpActive, changeText } from "../redux/textSlice";

function HelpButton() {
  const dispatch = useDispatch();
  const isHelpActive = useSelector((state) => state.text.isHelpActive);
  const infoText = `Heading 
======= 

Sub-heading
 ----------- 
### Another deeper heading

Paragraphs are separated by a blank line. 

Leave 2 spaces at the end   of a line to do a line break 

Text attributes *italic*, **bold**,
            ${`monospace`}, ~~strikethrough~~ . 

Shopping list: 
* apples 
* oranges 
* pears 

Numbered list: 
1. apples 
2. oranges 
3. pears 

The rain---not the reign---in Spain. *[Herman  Fassett](https://freecodecamp.com/hermanfassett)* `;

  return (
    <div
      className="float-end bg-warning p-2 m-3 rounded-3 shadow shadow-primary shadow-intensity-lg"
      onClick={() => {
        isHelpActive && dispatch(changeText(""));
        !isHelpActive && dispatch(changeText(infoText));
        dispatch(changeIsHelpActive(!isHelpActive));
      }}
    >
      <div>
        <h2>?</h2>
      </div>
    </div>
  );
}

export default HelpButton;
