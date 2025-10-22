import React, { useContext } from "react";
import { CipherContext } from "../context/CipherContext";
import { MonacoEditor } from "@monaco-editor/react";

const CipherEditor = () => {
  const { files, activeFile, updateFile } = useContext(CipherContext);

  if (!activeFile) return <div>Select a file to edit</div>;

  return (
    <div style={{ flex: 1 }}>
      <MonacoEditor
        height="400px"
        language="javascript"
        value={files[activeFile]}
        onChange={(value) => updateFile(activeFile, value)}
      />
    </div>
  );
};

export default CipherEditor;
