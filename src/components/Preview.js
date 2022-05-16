import React from "react";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

function Preview() {
  const text = useSelector((state) => state.text.text);
  return (
    <Card className="w-75 m-3">
      <Card.Header className="text-start title">Preview</Card.Header>
      <Card.Body>
        <ReactMarkdown>{text}</ReactMarkdown>
      </Card.Body>
    </Card>
  );
}

export default Preview;
