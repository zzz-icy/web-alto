import React from 'react';
import vehicle from '../images/Vehicle_photo.png';

// import AppRouter from '../AppRouter';

const AutoPage = () => (
    <div className="container container--centered container--column">
        <div style={{
            marginTop: 20,
            marginRight: 'auto',
            marginLeft: 'auto',
            width: "80%"
        }}>
            <img
                src={vehicle}
                alt="vehicle pic"
                style={{
                    // maxWidth: 600,
                    // maxHeight: 600,
                    width: '100%',
                    height: 'auto',

                }}
            />
        </div>
        <p style={{ color: 'rgb(172,120,109)' }}>YOUR VEHICLE</p>
        <p style={{ fontSize: 48 }}> Alto 09</p>
        <div className="container">
            <div className="container container--column topBorder">
                <p>Make/Model</p>
                <p>2019 Volkswagen Atlas</p>
            </div>
            <div className="container container--column topBorder">
                <p>Color</p>
                <p>Pure White</p>
            </div>
        </div>
        <div>
            <button disabled className="big-button">
                IDENTIFY VEHICLE
                </button>
        </div>
    </div>
);


export default AutoPage;