import * as React from "react";
import "./contact.css"; // Déplacez les styles dans un fichier CSS pour un meilleur gestion

function Contact() {
  return (
    <div id="about">
      <section className="header">
        <h1>Á Propos</h1>
        <p>Bienvenue sur LabVeillTech, un projet dédié à la veille technologique dans le domaine du développement web, avec un focus particulier sur le CSS. Ce site reflète ma passion pour le code et mon engagement à rester à l’avant-garde des technologies qui façonnent l’ingénierie des médias.</p>
      </section>
      <section className="info">
        <h2>Mon domaine</h2>
        <p>L’ingénierie des médias, au croisement de la technologie et de la créativité, est un domaine qui repose sur l’utilisation des outils numériques pour concevoir et produire des contenus interactifs et visuellement engageants. Le CSS joue un rôle central dans ce processus, en transformant des idées abstraites en interfaces fluides, esthétiques et accessibles.</p>
        <p>Dans ce domaine, la capacité à rester à jour avec les tendances et innovations technologiques est essentielle. Mon objectif est de maîtriser ces évolutions pour enrichir l’expérience utilisateur et renforcer la valeur des projets numériques.</p>
      </section>
      <section id="ikigai-container">
        <h2>Ikigai</h2>
      </section>
      <section className="info">
        <h2>Les Taxonomies : Structurer pour Apprendre</h2>
        <p>J’ai choisi de structurer ce projet autour de taxonomies claires pour organiser les informations et guider ma réflexion. </p>
        <p>Chaque ressource ou sujet est classé selon son domaine, ses thématiques principales et son utilité dans mon métier.</p>
        <p>Cette approche m’aide à comprendre pourquoi chaque outil ou source est pertinent et comment il contribue à mes objectifs professionnels.</p>
      </section>
      <section className="info">
        <h2>Développement du Site</h2>
        <p>Plutôt que d’utiliser un constructeur de sites web classique, j’ai fait le choix de coder ce site moi-même. Pourquoi ? Parce que cela me semblait naturel et logique pour refléter ma passion pour le CSS et le développement web. En écrivant chaque ligne de code, j’ai pu exprimer ma créativité tout en démontrant mes compétences techniques en CSS et avec React.</p>
        <p>Ce site est plus qu’une vitrine de mon projet, c’est une preuve concrète de mon engagement et de ma maîtrise du CSS, JS et React. Chaque animation, chaque mise en page, chaque interaction témoigne de mon intérêt pour les détails et de mon envie d’aller au-delà des solutions toutes faites.</p>
      </section>
    </div>
  );
}

export default Contact;
