import React from "react";
import "./pagPrestador.css";
import { useNavigate } from "react-router-dom";
import ImgCorrendo from "../../assets/correndo1.webp";
import MaskSvg from "../../assets/Rectangle2.svg";

const PrestadoPag: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="principal">
        <div
          className="mask"
          style={{
            WebkitMaskImage: `url(${MaskSvg})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "2500px 100%",
            maskImage: `url(${MaskSvg})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "2500px 100%",
            background: "linear-gradient(180deg, #07a0cea3, #31b26565)",
            height: "400px",
            width: "100%",
            position: "relative",
            zIndex: 1,
            marginTop: "100px", // <--- empurra a máscara pra baixo
          }}
        ></div>
      </div>
      {/* conteúdo por cima */}
      <div className="conteudo">
        <h1>Passeador ou Pet sitter?</h1>
        <h2>
          "Transforme seu amor por animais em uma oportunidade única!” Seja
          <strong> pet sitter</strong> ou <strong>passeador</strong> e descubra
          a alegria de cuidar e brincar com nossos melhores amigos de quatro
          patas.
        </h2>
        <div className="h3-container">
          <h3>O primeiro passo é simples →</h3>
          <button onClick={() => navigate("/cadastroP")}>cadastre-se</button>
        </div>
      </div>
      <div className="imagem-final">
        <img src={ImgCorrendo} alt="correndo" />
      </div>
    </div>
  );
};
export default PrestadoPag;
