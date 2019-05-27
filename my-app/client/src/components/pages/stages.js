import React, {Component} from 'react';
import './stages.scss';
import plantes from "../../img/plantes.jpeg";


class Stages extends Component {

    render() {


        return (
            <div className="container-body stages">
                <div className="content-title">
                    <h1>Stages</h1>

                    <hr/>

                    <img
                        src={plantes}
                        alt="plantes"
                        className="plantes-img"
                    />

                </div>
                <div className="content-row">
                    C’est le printemps dehors et dans ma vie de femme médecine !<br/>
                    Ainsi mon jardin de propositions fleurit !<br/>
                    La fleur au centre se nomme stage et va semer tout autour d’elle des graines de créativité !<br/><br/>

                    Toutes les propositions pour ces stages seront en lien avec la guérison, le ressourcement, la nature, la créativité, le sacré au cœur de soi et tout autour de soi.<br/>
                    Essentiellement adressées aux femmes pour la guérison et la reconnexion à leur source *  <br/>
                    Ces propositions seront toujours en lien avec l’Union du féminin et du masculin en soi    <br/>
                    Les hommes auront aussi leur place dans certains stages mixtes, qui aborderont les mêmes concepts, de reconnexion au sacré, à savoir donc pour eux, avec leur masculin sacré et aussi leur féminin. <br/>
                    Pour tous les êtres humains, il est si important et même salvateur de contacter, reconnaître, nourrir et renforcer ces 2 aspects en soi. De les aimer, les libérer.

                </div>
            </div>


        );
    }
}

export default Stages;
