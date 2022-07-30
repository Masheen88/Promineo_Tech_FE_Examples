import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { StrictMode } from "react";

function App() {
  return (
    // navigationBar
    <StrictMode>
      <NavigationBar />
    </StrictMode>
  );
}

export default App;
