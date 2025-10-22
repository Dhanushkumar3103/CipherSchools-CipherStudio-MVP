import { createContext, useState, useEffect } from "react";

export const CipherContext = createContext();

export const CipherProvider = ({ children }) => {
  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cipherProject");
    if (saved) setFiles(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cipherProject", JSON.stringify(files));
  }, [files]);

  const addFile = (name) => {
    setFiles({ ...files, [name]: "" });
    setActiveFile(name);
  };

  const deleteFile = (name) => {
    const newFiles = { ...files };
    delete newFiles[name];
    setFiles(newFiles);
    setActiveFile(Object.keys(newFiles)[0] || "");
  };

  const updateFile = (name, content) => {
    setFiles({ ...files, [name]: content });
  };

  return (
    <CipherContext.Provider
      value={{ files, activeFile, setActiveFile, addFile, deleteFile, updateFile }}
    >
      {children}
    </CipherContext.Provider>
  );
};
