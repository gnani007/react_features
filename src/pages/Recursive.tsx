import { useState } from 'react'

import { data } from "../mockData/mockData"

export interface FolderType {
  id: number;
  name: string;
  children?: FolderType[];
}

interface FolderProps {
  folder: FolderType;
}

interface FolderTreeProps {
  data: FolderType[];
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = folder.children && folder.children.length > 0;

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        style={{ cursor: hasChildren ? "pointer" : "default" }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (isOpen ? "📂" : "📁") : "📄"} {folder.name}
      </div>

      {isOpen &&
        hasChildren &&
        folder?.children?.map((child) => (
          <Folder key={child.id} folder={child} />
        ))}
    </div>
  );
};

const FolderTree: React.FC<FolderTreeProps> = ({ data }) => {
  return (
    <div>
      {data.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
    </div>
  );
};

const Recursive = () => {
  return (
    <div>
      <h3>Recursive</h3>
      <FolderTree data={data} />
    </div>
  )
}

export default Recursive