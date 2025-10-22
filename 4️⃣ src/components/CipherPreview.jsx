import React, { useContext } from "react";
import { CipherContext } from "../context/CipherContext";
import { Sandpack } from "@codesandbox/sandpack-react";

const CipherPreview = () => {
  const { files } = useContext(CipherContext);

  return (
    <div style={{ flex: 1 }}>
      <Sandpack
        template="react"
        files={Object.keys(files).reduce((acc, key) => {
          acc[`/${key}.jsx`] = files[key];
          return acc;
        }, {})}
      />
    </div>
  );
};

export default CipherPreview;
