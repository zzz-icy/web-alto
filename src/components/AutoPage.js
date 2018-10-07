import React from 'react';
import vehicle from '../images/Vehicle_photo.png';

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
                    width: '100%',
                    height: 'auto',
                }}
            />
        </div>

        <p className="subtitle">YOUR VEHICLE</p>
        <p className="title">Alto 09</p>

        <div className="container container--spacebetween">

            <div className="container--withoutPadding container--column topBorder marginLeft">
                <div className="lightfontitem">Make/Model</div>
                <div className="boldfontitem">2019 Volkswagen Atlas</div>
            </div>

            <div className="container--withoutPadding container--column topBorder marginLeft">
                <div className="lightfontitem">Color</div>
                <div className="boldfontitem">Pure White</div>
            </div>

        </div>
        <div className="container--withoutPadding bigMarginTop">
            <button disabled className="big-button">
                IDENTIFY VEHICLE
                </button>
        </div>
    </div>
);


export default AutoPage;