import React, {Component} from 'react';
import './bienvenue.scss';
import sunflower from "../../img/sunflower.svg"
import MapView from "../map/mapView";
import {FaPhone, FaEnvelope} from 'react-icons/fa';
import tree from "../../img/tree.jpg";

class Bienvenue extends Component {

    render() {
        let flower = <img
            src={sunflower}
            alt="luceanne"
            height={30}
            className=" d-inline-block align-top"
        />

        return (
            <div className="container-body-bienvenue">

                <div className="content-title">
                    <h1>Bonjour et bienvenue</h1>
                    <h2>Sur le site de <a href="/quisuisje" className=" a-link blue-gradient">Luceanne</a> ou <a
                        href="/quisuisje"
                        className="a-link  green-gradient">Anne Chaimbault</a></h2>
                    <p>Je suis kinésiologue, femme médecine, énergéticienne, coach pour les femmes et artiste.</p>
                    <br/>
                    <hr/>
                    <img
                        src={tree}
                        alt="tree"
                        className=" tree-img"
                    />
                </div>
                <div className="content-container">
                    <div className="content-row">
                        <h3 className="title-content">LIBERATION &nbsp; EQUILIBRE &nbsp; HARMONIE </h3> <br/>

                        Ressourcement, Ouverture du Cœur dans la lumière, Alignement pour l’ensemble de l’être.<br/>

                        Je propose de vous accompagner sur votre chemin de guérison, ou, et dans votre vie en
                        changement <br/><br/>

                        Ceci avec les propositions suivantes <br/><br/>

                        <ul>
                            <li>
                                KINESIOLOGIE
                            </li>
                            <li>
                                SOIN AU CŒUR DE SOI ( soin que j’ai créé )
                            </li>
                            <li>
                                COACHING ( accompagnement des femmes )
                            </li>
                        </ul>

                        Sur les questions du féminin, de la maternité, du post partum, de la sexualité. <br/>
                        Pour aller vers la libération, la ré-harmonisation, la guérison, la renaissance, pendant ou
                        après les étapes importantes ou les épreuves de la vie. <br/>
                        Recréer le lien au sacré<br/>
                        <br/>

                        <h4>Mon Axe</h4>

                        <ul>
                            <li>
                                L’ouverture du cœur
                            </li>
                            <li>
                                La guérison de l’être
                            </li>
                            <li>
                                La renaissance
                            </li>
                            <li>
                                La Présence, joie, harmonie, bonheur, créativité, vivre au présent
                            </li>
                            <li>
                                L’union du féminin et du masculin, en soi et dans la relation à l’autre.
                            </li>
                            <li>
                                Guérison de la femme, coaching.
                            </li>
                        </ul>

                        Féminin sacré *** Femme sauvage*** connectée à son cœur, à sa nature, à la nature, au Grand Tout
                        Masculin sacré ***<br/>
                        Il est essentiel pour moi de placer le cœur au centre de notre être, tant par son magnifique
                        pouvoir de transformation, que son besoin d’amour.<br/>
                        Nous sommes des êtres en devenir, et nous avons la nécessité de contacter notre lumière, de nous
                        alléger, de nous retrouver dans notre authenticité.<br/>
                        Ceci ne nous a pas toujours été facilement offert et c’est alors sans doute le moment de Se
                        l’offrir !<br/>
                        *Aime Toi, s’aime Toi !* offrons, partageons nos graines de coeur d’amour lumière !*<br/>
                        <br/>
                        Aussi accompagner une personne en demande, c’est pour moi être en capacité de l’écouter,
                        l’entendre et lui offrir ma compassion, la mettre au service de son expansion, de sa révélation
                        intérieure. Celle-ci permettra à son pouvoir personnel de s’activer dans l’amour de soi.<br/>
                        Cela se vivra dans un cadre intime et sécurisant, entouré de toute ma bienveillance.<br/>
                        <br/>


                        <div className="list-span-link">
                            <a href="/soins/kinesiologie"
                               className="span-link a-link green-gradient">Kinésiologie</a>✻<a
                            className="span-link a-link green-gradient" href="/soins/coeurdesoi">Soin au cœur de
                            Soi</a>✻<a href="/soin/coaching" className="span-link a-link green-gradient">Coaching</a>✻<a
                            className="span-link  a-link green-gradient">Accompagnement</a>
                        </div>


                        <br/><br/>

                        <div className="kine">
                            <h4>Kinésiologie</h4><br/>
                            Durée d’une séance environ 1h30<br/>
                            Pour les jeunes enfants, enfants 1 h.<br/>
                            <br/>
                        </div>

                        <br/><br/>

                        <div className="soin-coeur-soi">
                            <h4>Soin au cœur de soi</h4><br/>
                            La durée varie selon la situation, la demande…<br/>
                            <ul>
                                <li>Energétique</li>
                                <li>Soin Essenien</li>
                                <li>Sonothérapie</li>
                                <li>Massages sonores, avec les bols tibétains sur le corps habillé.</li>
                                <li>Soin à distance, quelle qu’elle soit.</li>
                            </ul>

                            <p>
                                La connexion se fait bien sûr à l’avance par téléphone, WathsApp ou skype.<br/>
                                Et après un échange suffisant.je donne ensuite le soin avec les mêmes outils, sans
                                massage … mais avec la fréquence du son si nécessaire.<br/><br/>
                                Note : l’alternance, la balance, et la complémentarité* kinésiologie / soin * est très
                                créatrice.
                            </p>
                            <br/>
                        </div>


                        <br/><br/>


                        <div className="sejour-soin">
                            <h4>Séjour soin</h4><br/>
                            Possibilité pour les personnes qui viennent de loin, de faire un processus sur 2 ou 3
                            jours<br/>
                            Avec la kinésiologie et les soins en alternance. C’est une plongée, intense et
                            profonde.<br/>
                            Comme un stage en individuel.<br/>
                            Possibilité de gîte ou chambre d’hôte à proximité, dans un cadre très charmant et lumineux.
                            Aux Labadous ou autres ..<br/>
                            <br/>
                        </div>

                        <br/><br/>


                        <div className="accompagnement">
                            <h4>Accompagnement de passages de vie</h4><br/>
                            <ul>
                                <li>Maternité</li>
                                <li>Naissance</li>
                                <li>Le grand départ</li>
                                <li>Union</li>
                                <li>Séparation</li>
                                <li>Cérémonies, rituels en individuel, couple, groupes</li>
                            </ul>
                            <br/>
                        </div>
                        <hr/>

                        <br/><br/>

                        <div className="split-2">
                            <div className="pour-qui">
                                <h4>Pour qui ?</h4><br/>
                                Femmes et hommes à tout âge<br/>
                                Bébés, enfants, adolescents, jeunes<br/>
                                <br/>
                            </div>

                            <br/><br/>

                            <div className="tarifs">
                                <h4>Tarifs</h4><br/>
                                La base est 60€ pour 1h 30<br/>
                                <br/>
                            </div>
                        </div>

                        <hr/>
                        <br/><br/>
                        <div className="contacts">
                            <div className="left-description">

                                <h4>Où ?</h4><br/>
                                <p>
                                    A Rennes le Château<br/>
                                    Dans la Haute vallée de l’Aude, proche du Bugarach, dans un lieu magique en beauté
                                    et
                                    vibrations… Berceau du féminin sacré.<br/>
                                    Avec différentes possibilités d’hébergement tout près. Gîtes et chambre
                                    d’hôtes. <br/>
                                    Au village, ou plus dans la nature, au centre des Labadous, ou dans un hameau.<br/>
                                </p>

                                <h4>Comment me contacter ?</h4>
                                <div className="info-contact">
                                    <span className="phone"><FaPhone/> 06 31 32 86 53</span>
                                    <a href="mailto:8lunesoleil8@gmail.com" className="email a-link"><FaEnvelope/> 8lunesoleil8@gmail.com</a>
                                </div>

                            </div>
                            <div className="right-map">
                                <MapView/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="credits">Icons made by <a
                    href="https://www.freepik.com/?__hstc=57440181.0bb9dbbf1feb2b5d394c86c2a099bff6.1558648736345.1558648736345.1558648736345.1&__hssc=57440181.1.1558648736346&__hsfp=3793565771"
                    title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                        title="Flaticon">www.flaticon.com</a> is licensed by <a
                    href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC
                    3.0 BY</a></div>
            </div>


        );
    }
}

export default Bienvenue;
