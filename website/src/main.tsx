import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
  // </React.StrictMode>,
);
