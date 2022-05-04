import React from "react";
import { Button, Card } from "react-bootstrap";

function Editor({ setText, entireScreen, setEntireScreen }) {
  return (
    <Card className="w-50 m-3">
      <Card.Header className="text-start title">
        Editor
        <Button
          variant="light"
          className="float-end"
          onClick={() => setEntireScreen(!entireScreen)}
        >
          Wide
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <textarea
            name=""
            id="editor"
            rows={!entireScreen ? 15 : 100}
            className="w-100 border-0"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Editor;
