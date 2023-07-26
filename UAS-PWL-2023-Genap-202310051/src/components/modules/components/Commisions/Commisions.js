import React from 'react';
import { useHistory } from 'react-router-dom';

const Commissions = () => {
  const history = useHistory();

  // Fungsi untuk menangani klik tombol "Commissions Headshot"
  const handleCommissionsHeadshotClick = () => {
    // Tambahkan logika atau aksi yang ingin dilakukan saat tombol "Commissions Headshot" diklik
    // Misalnya, pindah ke halaman "Commissions Headshot"
    history.push('/commissions/headshot');
  };

  return (
    <div>
      <h1>Commissions</h1>
      <div className="commissions-widget">
        <button onClick={handleCommissionsHeadshotClick}>Commissions Headshot</button>
      </div>
    </div>
  );
}

export default Commissions;
