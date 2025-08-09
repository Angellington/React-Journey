import { Box } from "@mui/material";
import ActionsLayer from "./components/ActionsLayer/ActionsLayer";
import BackgroundContainer from "./BackgroundContainer";

import styles from "./style/Home.module.css";
import DataCard from "./components/DataCard/DataCard";

import { useState, useEffect } from "react";
import EditModal from "./components/EditModal/EditModal";

const Home = () => {
  const [datas, setDatas] = useState(() => {
    const saved = localStorage.getItem("objects");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateDatas = (newDatas) => {
    setDatas(newDatas);
    localStorage.setItem("objects", JSON.stringify(newDatas));
  };

  const handleDelete = (id) => {
    const updatedList = datas.filter((item) => item.id !== id);
    setDatas(updatedList);
    localStorage.setItem("objects", JSON.stringify(updatedList));
  };

  const handleEdit = (id) => {
    const item = datas.find((d) => d.id === id);
    setEditingItem(item);
    setIsModalOpen(true);
  }

  const handleSaveEdit = (updatedItem) => {
    const updatedList = datas.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    updateDatas(updatedList);
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <BackgroundContainer>
      <Box className={styles.action}>
        <ActionsLayer updateDatas={updateDatas} currentDatas={datas} />
      </Box>
      <Box className={styles.cards}>
        {datas.length > 0 &&
          datas.map((data) => (
            <DataCard
              key={data.id}
              name={data.name}
              description={data.description}
              id={data.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
      </Box>
      { isModalOpen && (
        <EditModal 
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={editingItem}
          onSave={handleSaveEdit}
        />
      )}
    </BackgroundContainer>
  );
};

export default Home;
