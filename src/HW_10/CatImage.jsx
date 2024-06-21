import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error("Ошибка при получении изображения:", error);
    }
  };

  return (
    <div className={styles.container}>
      {imageUrl && (
        <img src={imageUrl} alt="Random Cat" className={styles.catImage} />
      )}
      <button onClick={fetchImage} className={styles.button}>
        NEXT
      </button>
    </div>
  );
}

export default CatImage;
