import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeEntireScreen, changeText } from "../redux/textSlice";

function Editor() {
  const dispatch = useDispatch();
  const entireScreen = useSelector((state) => state.text.entireScreen);
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

  const handleEntireScreen = () => {
    dispatch(changeEntireScreen(!entireScreen));
  };

  const handleChange = (val) => {
    dispatch(changeText(val));
  };

  return (
    <Card className="w-50 m-3">
      <Card.Header className="text-start title">
        Editor
        <Button
          variant="light"
          className="float-end"
          onClick={handleEntireScreen}
        >
          Wide
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {!isHelpActive ? (
            <textarea
              name="editor"
              id="editor"
              rows={!entireScreen ? 15 : 50}
              className="w-100 border-0"
              onChange={(e) => handleChange(e.target.value)}
            ></textarea>
          ) : (
            <textarea
              name="editor1"
              id="editor1"
              rows={!entireScreen ? 15 : 50}
              className="w-100 border-0"
              readOnly
              placeholder={infoText}
            ></textarea>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Editor;
