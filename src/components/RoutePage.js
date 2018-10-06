import React from 'react';
import map from '../images/Map_overview.png';
const RoutePage = () => (
    <div className="container container--centered container--column">

        <img
            src={map}
            alt="map overview"
            style={{
                // maxWidth: 600,
                // maxHeight: 600,
                width: '100%',
                height: 'auto'
            }}

        />
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
        <div>
            <p>Current Vibe</p>
            <p>Vaporwave Beats</p>

        </div>
        <div>
            <button disabled className="big-button">
                CONTACT DRIVER
                </button>
        </div>
    </div>
);


export default RoutePage;