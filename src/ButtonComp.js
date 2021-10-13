import React from "react";
import { useThemeUpdate } from "./ThemeContext";

export default function ButtonComp() {
  const toggleTheme = useThemeUpdate();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
