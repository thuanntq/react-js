import React from "react";

export const LOCALE_VI = "vi";
export const LOCALE_EN = "en";

export const LocaleContext = React.createContext();

export const Provider = ({ children }) => {
  const [locale, setLocale] = React.useState(LOCALE_EN);

  const toggle = () => {
    if (locale === LOCALE_EN) {
      setLocale(LOCALE_VI);
    } else {
      setLocale(LOCALE_EN);
    }
  };

  return (
    <LocaleContext.Provider value={{ toggle, locale }}>
      {children}
    </LocaleContext.Provider>
  );
};

Provider.displayName = "LocaleProvider";
export const LocaleProvider = React.memo(Provider);
