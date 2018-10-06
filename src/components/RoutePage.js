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
            <p style={{ color: 'rgb(172,120,109)', fontSize: 10, fontFamily: 'PxGroteskRegular', letterSpacing: 2 }}>YOUR TRIP</p>
        </div>
        <div className="container alignItems">
            <p style={{ fontSize: 48, margin: 0, fontFamily: 'PxGroteskLight' }}>5:39</p>
            <p style={{ fontSize: 30, margin: 0, paddingLeft: 10, paddingBottom: 5, fontFamily: 'PxGroteskLight' }}>PM</p>
        </div>
        <div className="container container--flexstart ">
            <p style={{ marginTop: 0, fontFamily: 'PxGroteskLight', fontSize: 13, color: 'rgb(63,56,37)' }}>Estimated arrival at DFW Int'l Airport - Terminal E</p>
        </div>
        <div className="container container--column topBorder">
            <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight', }}>Current Vibe</div>
            <div style={{ marginTop: 6, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular', }}>Vaporwave Beats</div>

        </div>
        <div className="container--withoutPadding marginTop">
            <button className="route-big-button">
                CHANGE VEHICLE VIBE
            </button>
        </div>
    </div>

);


export default RoutePage;