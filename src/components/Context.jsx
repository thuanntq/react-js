import React from "react";
import { ThemeContext, MODE_DARK } from "src/contexts/themeContext";
import {
  LocaleContext,
  LOCALE_EN,
  LOCALE_VI,
} from "src/contexts/localeContext";
import { useContext } from "react";

const Context = () => {
  const themeSetting = useContext(ThemeContext);
  const localeContext = useContext(LocaleContext);

  return (
    <div>
      <label className="d-flex">
        <input
          type="checkbox"
          onChange={themeSetting.toggle}
          checked={themeSetting.theme === MODE_DARK}
        />
        <span>Dark mode</span>
      </label>

      <label className="d-flex">
        <input type="checkbox" onChange={localeContext.toggle} />
        {localeContext.locale === LOCALE_VI && (
          <img src="/flags/vi.svg" alt={localeContext.locale} width={32} />
        )}
        {localeContext.locale === LOCALE_EN && (
          <img src="/flags/en.svg" alt={localeContext.locale} width={32} />
        )}
      </label>
    </div>
  );
};

export default React.memo(Context);
