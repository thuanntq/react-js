import React from "react";
import FormInput from "./components/FormInput";
import WindowSize from "./components/WindowSize";
import Context from "./components/Context";
import Demo from "./components/demo";
import { ThemeProvider } from "./contexts/themeContext";
import { LocaleProvider } from "./contexts/localeContext";
import Todo from "./components/todos/Todo";

const App = () => {
  return (
    <div className="container">
      <WindowSize />

      <hr />
      <Todo />
      <hr />
      <FormInput />
      <hr />
      <Demo />
      <hr />
      <ThemeProvider>
        <LocaleProvider>
          <Context />
        </LocaleProvider>
      </ThemeProvider>
    </div>
  );
};

export default React.memo(App);
