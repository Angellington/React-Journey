import React from 'react';
import styles from './CarDetails.module.css';

const CarDetails = ({ details = [] }) => {
  if (!details.length) {
    return <p className={styles.empty}>Nenhum carro disponível.</p>;
  }

  return (
    <div className={styles.carsGrid}>
      {details.map((car, idx) => (
        <div className={styles.carCard} key={car.id ?? idx}>
          <div className={styles.carHeader}>
            <span className={styles.badge}>Ano {car.ano}</span>
          </div>
          <h2 className={styles.model}>{car.model}</h2>
          <div className={styles.meta}>
            <p>
              Modelo: <strong>{car.model}</strong>
            </p>
          </div>
          <div className={styles.actions}>
            <button className={styles.btn}>Detalhes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
