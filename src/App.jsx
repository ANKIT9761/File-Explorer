import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./App.css";
import explorer from "./data/folderData"

export default function App() {

  let data=JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const [explorerData, setExplorerData] = useState((data)?data:explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  // caching the data

  window.onbeforeunload = ()=>{
    let stringData=JSON.stringify(explorerData);
    console.log(stringData);
    localStorage.setItem("data",stringData);
    console.log("Item Set:");
  }

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
