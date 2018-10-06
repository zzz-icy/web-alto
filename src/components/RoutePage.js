import React from 'react';
import map from '../images/Map_overview.png';
import mapIcon from '../images/Map_icon.png';

const RoutePage = () => (
    <div>
        <div className="container-withoutPadding container--centered">
            <div className="route__image route__image--align">

                <img
                    src={map}
                    alt="map overview"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
            <img src={mapIcon} alt="current location icon" style={{ position: 'absolute', right: 20 }} />
        </div>
        <div className="container">
            <p style={{ fontSize: 24 }}>Your Trip</p>
        </div>
        <div className="container container--flexstart alignItems">
            <p style={{ fontSize: 48, margin: 0 }}>5:39</p>
            <p style={{ fontSize: 36, margin: 0 }}>PM</p>
        </div>
        <div className="container container--flexstart ">
            <p style={{ marginTop: 0, fontSize: 10 }}>Estimated arrival at DFW Int'l Airport - Terminal E</p>
        </div>
        <div className="container container--column">
            <p>Current Vibe</p>
            <p>Vaporwave Beats</p>

        </div>
        <div>
            <button className="route-big-button">
                CHANGE VEHICLE VIBE
            </button>
        </div>
    </div>

);


export default RoutePage;