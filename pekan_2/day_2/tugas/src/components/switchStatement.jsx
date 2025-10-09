import { useState } from "react";

function PageCar({ Car }) {
  const styleImg = {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "all 0.4s ease",
    marginTop: "20px",
  };

  let content;
  switch (Car) {
    case "1":
      content = <img src="mobil_1.jpg" alt="Mobil 1" style={styleImg} />;
      break;
    case "2":
      content = <img src="mobil_2.jpg" alt="Mobil 2" style={styleImg} />;
      break;
    case "3":
      content = <img src="mobil_3.jpg" alt="Mobil 3" style={styleImg} />;
      break;
    default:
      content = <img src="mobil_4.jpg" alt="Mobil 4" style={styleImg} />;
  }
  return content;
}

export default function Switch() {
  const [dataCars, setDataCars] = useState("1");

  const changeCar = () => {
    const carss = ["1", "2", "3", "4"];
    const currentIndex = carss.indexOf(dataCars);
    const nextIndex = (currentIndex + 1) % carss.length;
    setDataCars(carss[nextIndex]);
  };

  const containerStyle = {
    textAlign: "center",
    padding: "40px",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    color: "#333",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const buttonHover = (e) => (e.target.style.backgroundColor = "#555");
  const buttonLeave = (e) => (e.target.style.backgroundColor = "#333");

  return (
    <div style={containerStyle}>
      <h3>Status Data Mobil:</h3>
      <button
        onClick={changeCar}
        style={buttonStyle}
        onMouseOver={buttonHover}
        onMouseLeave={buttonLeave}
      >
        Lihat Mobil Berikutnya
      </button><br />
      <PageCar Car={dataCars} />
    </div>
  );
}
