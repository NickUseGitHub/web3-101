import { createRoot } from "react-dom/client";
import LoginWeb3 from "./components/LoginWeb3";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<LoginWeb3 />);
