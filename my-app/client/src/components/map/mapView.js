import React, { Component } from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'
import ReactDOMServer from 'react-dom/server';

import sunflower from "../../img/sunflower2.svg"

import "./mapView.scss"

class MapView extends Component {

    constructor(props){
        super(props);

        // Ref used for having interaction with the "object" map.
        this.leafletMap= React.createRef()
    }


    componentDidMount() {

        setTimeout(() => {
            if (this.leafletMap.current) {
                this.leafletMap.current.leafletElement.invalidateSize()
            }
        }, 100);
    }


    render() {
        //Get the position from Redux Store
        const position = [42.927701, 2.262881];

        let flower = <img
            src={sunflower}
            alt="flower"
            height={50}
            className=" marker-icon"
        />;

        let icon_marker = ReactDOMServer.renderToStaticMarkup( <div>
            {flower}
        </div>)

        let iconDiv = new L.divIcon({
            className: 'icon-marker-container',
            html: icon_marker
        })

        // change the url for having a new map design.
        return (
            <div className="map-container" >
                <Map  center={ position } minZoom={3} maxZoom={15} zoom={8} ref={this.leafletMap}>
                    <TileLayer
                        url='https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png'
                        attribution= '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
                    />

                        <Marker position={position}
                                icon={iconDiv}
                                className="marker"
                        />
                </Map>
            </div>
        );
    }
}
export default MapView;