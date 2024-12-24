import logo from "./../assets/ns-logo.svg";
import { Link } from 'react-router-dom';
import Article from "../components/ArticleSection";
import * as React from "react";


function Home() {
  return (
    <div id="home">
      <header>
        <div>
          <img src={logo} alt="Logo de Nathan Stader" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-delay="0.05" data-scroll-position="left"/>
          <h2 data-scroll data-scroll-speed="2" data-scroll-delay="0.1">Bienvenu !</h2>
        </div>
        <div>
          <h3>Á propos</h3>
          <p>
          Le projet LabVeillTech vise à développer une stratégie de veille technologique pour les ingénieurs des médias en se concentrant sur les nouveautés et tendances liées au CSS. À travers cinq sources clés (Fireship, Kevin Powell, CSS Battle, Bytes.dev, et Daily.dev), le projet explore des ressources pédagogiques, des outils interactifs et des plateformes d'agrégation de contenu. Chaque article analyse une source, en mettant en avant son contenu, son utilité professionnelle, et son impact sur l'amélioration des compétences techniques et créatives. Ce travail permet de structurer une veille efficace pour intégrer les innovations CSS dans les pratiques professionnelles.
          </p>
          <Link to="/about">Plus d'informations</Link>
        </div>
        <div>
          <h1 data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.05">LabVeillTech</h1>
          <h2 data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-delay="0.1">Nathan Stader - M51-2</h2>
        </div>
      </header>
      <div id="separator">
        <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-delay="0.05" data-scroll-position="left">Voici une liste de mes différents articles que je souhaite partager avec vous !</span>
        </div>
      <section id="articles">
        <Article id={1}/>
        <Article id={2}/>
        <Article id={3}/>
        <Article id={4}/>
        <Article id={5}/>
      </section>
    </div>
  );
}

export default Home;
