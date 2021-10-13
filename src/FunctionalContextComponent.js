import React from "react";
import ButtonComp from "./ButtonComp";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionalContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    aligSelf: "center",
    backgroundColor: darkTheme ? "black" : "whiteSmoke",
    color: darkTheme ? "white" : "black",
    width: "50%",
    height: "50%",
    padding: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>

      <div style={themeStyles}>Funtional Context theme</div>

      <ButtonComp />
    </>
  );
}
