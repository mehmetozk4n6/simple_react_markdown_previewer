import Editor from "./Editor";
import Preview from "./Preview";

function Container() {
  return (
    <div className="d-flex flex-column align-items-center container">
      <Editor />
      <Preview />
    </div>
  );
}

export default Container;
