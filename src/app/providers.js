"use client";

import { store } from "./redux";
import { Provider } from "react-redux";
import Theme from "./components/Theme";
import { persistStore } from "redux-persist";
import StyledComponentsRegistry from "./registry";
import { PersistGate } from "redux-persist/integration/react";

export const persistor = persistStore(store);

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
