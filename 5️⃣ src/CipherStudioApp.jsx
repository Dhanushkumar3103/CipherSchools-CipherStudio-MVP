import React from "react";
import { CipherProvider } from "./context/CipherContext";
import CipherFiles from "./components/CipherFiles";
import CipherEditor from "./components/CipherEditor";
import CipherPreview from "./components/CipherPreview";

function CipherStudioApp() {
  return (
    <CipherProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <CipherFiles />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CipherEditor />
          <CipherPreview />
        </div>
      </div>
    </CipherProvider>
  );
}

export default CipherStudioApp;
