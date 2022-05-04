import React from "react";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function Preview({ text }) {
  return (
    <Card className="w-75 m-3">
      <Card.Header className="text-start title">Preview</Card.Header>
      <Card.Body>
        <Card.Text id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Preview;
