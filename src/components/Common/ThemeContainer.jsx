import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {
  getThemeLibrary,
  getThemeValueByColor,
} from "../../core/utils/theme/tw-theme";

// import { useUserTheme } from "../../../core//contex/theme.context";
const ThemeContainer = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [themeColor, setThemeColor] = useState("19,50,240");

  const [modeDependTheme, setModeDependTheme] = useState({});
  const [colorDependThemes, setColorDependThemes] = useState({});

  useEffect(() => {
    const currentModeDependTheme = getThemeLibrary(themeMode);
    // console.log(currentModeDependTheme);
    setModeDependTheme(currentModeDependTheme);
  }, [themeMode]);
  useEffect(() => {
    const currentColorDependTheme = getThemeValueByColor("theme", themeColor);
    setColorDependThemes(currentColorDependTheme);
  }, [themeColor]);
  const handleModeChange = (checked) => {
    setThemeMode(checked ? "dark" : "light");
  };
  const handleColorChange = (color) => {
    setThemeColor(color);
  };

  useEffect(() => {
    const varObj = {
      ...modeDependTheme,
      ...colorDependThemes,
    };

    let style = "";
    for (const key in varObj) {
      style += key + ": " + varObj[key] + " ; ";
    }
    document.body.style = style;
  }, [modeDependTheme, colorDependThemes]);
  return (
    <div
    >
      <div className="fixed bottom-10 left-12 flex z-50 ">
        <DarkModeSwitch
          checked={themeMode === "dark"}
          onChange={handleModeChange}
          size={28}
        />
        {/* <span onClick={() => handleColorChange("250,0,0")}>red</span>
        <span onClick={() => handleColorChange("50,50,255")}>blue</span>
        <span onClick={() => handleColorChange("50,255,50")}>green</span> */}
      </div>

      <div>{children}</div>
    </div>
  );
};

export { ThemeContainer };
