import { Header } from "@example/foo-lib";
import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <div>
      <Header title="Hello, world!" />
      <div>Body</div>
    </div>
  );
};

const element = document.createElement("div");
document.body.appendChild(element);
const root = createRoot(element);
root.render(<App />);
