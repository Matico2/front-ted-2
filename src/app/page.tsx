import React from 'react';
import './Home.css'; 

export default function Home() {
  return (
    <div className="container text-center">
      <h2 className="title mb-4">
        Bem-vindo ao Ateliê <span className="sun-text">Sol</span> e <span className="moon-text">Lua</span>
      </h2>
      <div className="sun-section">
        <p className="description mb-8">
          Descubra a magia do Ateliê Sol e Lua, onde a arte da costura se entrelaça com o encanto cósmico.
          Nossas criações refletem a beleza do nascer e pôr do sol, cada peça contando uma história única.
        </p>
      </div>
      <div className="moon-section">
        <p className="description mb-8">
          Cada ponto é costurado com intenção, transformando nossas peças em expressões de espiritualidade e estilo.
          Explore nossa coleção exclusiva de roupas que capturam a essência dos astros e da natureza.
        </p>
      </div>
    </div>
  );
}
