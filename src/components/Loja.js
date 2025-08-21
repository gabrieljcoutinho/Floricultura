import React from 'react';
import Header from './Header';
import '../Css/loja.css';

import separadorDireita from '../../src/imgs/separador-direita.svg';
import separadorEsquerdo from '../../src/imgs/separador-esquerda.svg';

import alstroemeria from '../imgs/Loja/alstroemeria.jpg';
import amarilis from '../imgs/Loja/amarilis.jpg';
import anmona from '../imgs/Loja/anmona.jpg';
import azaleia from '../imgs/Loja/azaleia.jpg';
import camelia from '../imgs/Loja/camelia.jpg';
import ciclame from '../imgs/Loja/ciclame.jpg';
import clematite from '../imgs/Loja/clematite.jpg';
import cravo from '../imgs/Loja/cravo.jpg';
import erica from '../imgs/Loja/erica.jpg';
import florAmorPerfeito from '../imgs/Loja/florAmorPerfeito.jpg';
import florDeLotus from '../imgs/Loja/florDeLotus.jpg';
import florNifeia from '../imgs/Loja/florNifeia.jpg';
import florPrimula from '../imgs/Loja/florPrimula.jpg';
import gladioloPalma from '../imgs/Loja/gladioloPalma.jpg';
import lirioStarGazer from '../imgs/Loja/lirioStarGazer.jpg';
import margarida from '../imgs/Loja/margarida.jpg';
import orquideaCatleyaRoxa from '../imgs/Loja/orquideaCatleyaRoxa.jpg';
import orquideaPhalaenopsis from '../imgs/Loja/orquideaPhalaenopsis.jpg';
import rosaVermelha from '../imgs/Loja/rosaVermelha.jpg';
import rosaPrincipeNegro from '../imgs/Loja/rosaPrincipeNegro.jpg';

const produtos = [
  [
    { img: alstroemeria, nome: 'Alstroemeria', preco: 'R$ 12,00', desc: 'Delicada e colorida, perfeita para arranjos.' },
    { img: amarilis, nome: 'Amarilis', preco: 'R$ 15,00', desc: 'Elegante, traz charme para qualquer ambiente.' },
    { img: anmona, nome: 'Anmona', preco: 'R$ 18,00', desc: 'Flor exótica, símbolo de beleza rara.' },
    { img: azaleia, nome: 'Azaleia', preco: 'R$ 10,00', desc: 'Alegria em cada pétala vibrante.' },
  ],
  [
    { img: camelia, nome: 'Camelia', preco: 'R$ 14,00', desc: 'Romântica e sofisticada.' },
    { img: ciclame, nome: 'Ciclame', preco: 'R$ 13,00', desc: 'Ideal para dar cor ao seu lar.' },
    { img: clematite, nome: 'Clematite', preco: 'R$ 16,00', desc: 'Cresce e se destaca em qualquer jardim.' },
    { img: cravo, nome: 'Cravo', preco: 'R$ 9,00', desc: 'Clássico e cheio de tradição.' },
  ],
  [
    { img: erica, nome: 'Erica', preco: 'R$ 11,00', desc: 'Pequena, charmosa e delicada.' },
    { img: florAmorPerfeito, nome: 'Amor Perfeito', preco: 'R$ 12,00', desc: 'Simboliza carinho e lembrança.' },
    { img: florDeLotus, nome: 'Flor de Lótus', preco: 'R$ 20,00', desc: 'Elegância e serenidade em flor.' },
    { img: florNifeia, nome: 'Nifeia', preco: 'R$ 22,00', desc: 'Flores únicas para momentos especiais.' },
  ],
  [
    { img: florPrimula, nome: 'Primula', preco: 'R$ 13,00', desc: 'Traz frescor e leveza ao ambiente.' },
    { img: gladioloPalma, nome: 'Gladiolo Palma', preco: 'R$ 17,00', desc: 'Imponente e marcante.' },
    { img: lirioStarGazer, nome: 'Lírio StarGazer', preco: 'R$ 25,00', desc: 'Perfume intenso e elegante.' },
    { img: margarida, nome: 'Margarida', preco: 'R$ 8,00', desc: 'Simples e alegre, simboliza pureza.' },
  ],
  [
    { img: orquideaCatleyaRoxa, nome: 'Orquídea Catleya Roxa', preco: 'R$ 30,00', desc: 'Exótica e sofisticada.' },
    { img: orquideaPhalaenopsis, nome: 'Orquídea Phalaenopsis', preco: 'R$ 28,00', desc: 'Elegância em cada pétala.' },
    { img: rosaVermelha, nome: 'Rosa Vermelha', preco: 'R$ 15,00', desc: 'Clássica e romântica.' },
    { img: rosaPrincipeNegro, nome: 'Rosa Príncipe Negro', preco: 'R$ 35,00', desc: 'Para momentos inesquecíveis.' },
  ],
];

const separadores = [separadorDireita, separadorEsquerdo, separadorDireita, separadorEsquerdo];

const Loja = () => {
  return (
    <div>
      {produtos.map((bloco, i) => (
        <React.Fragment key={i}>
          <div className="flexbox">
            {bloco.map((produto, idx) => (
              <div className="div1" key={idx}>
                <img src={produto.img} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p className="descricao">{produto.desc}</p>
                <p className="preco">{produto.preco}</p>
              </div>
            ))}
          </div>
          {i < separadores.length && (
            <img
              src={separadores[i]}
              alt="separador"
              className={i % 2 === 0 ? "separadorDireita" : "separadorEsquerda"}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Loja;
