import React, { useContext, useState } from "react";
import { CipherContext } from "../context/CipherContext";

const CipherFiles = () => {
  const { files, addFile, deleteFile, activeFile, setActiveFile } = useContext(CipherContext);
  const [newFile, setNewFile] = useState("");

  return (
    <div style={{ borderRight: "1px solid gray", padding: "10px", width: "200px" }}>
      <h3>Files</h3>
      <ul>
        {Object.keys(files).map((file) => (
          <li
            key={file}
            style={{ cursor: "pointer", fontWeight: file === activeFile ? "bold" : "normal" }}
            onClick={() => setActiveFile(file)}
          >
            {file} <button onClick={() => deleteFile(file)}>X</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="New file"
        value={newFile}
        onChange={(e) => setNewFile(e.target.value)}
      />
      <button onClick={() => { addFile(newFile); setNewFile(""); }}>Add</button>
    </div>
  );
};

export default CipherFiles;
