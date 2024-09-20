import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodoContextsProvider from "./contexts/TodoContextsProvider.tsx";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="6759c7faccd94e8885ef9fdfdda7df05"
      domain="https://todostv.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <TodoContextsProvider>
        <App />
      </TodoContextsProvider>
    </KindeProvider>
  </StrictMode>
);
