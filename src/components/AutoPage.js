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
        <p style={{ color: 'rgb(172,120,109)', fontSize: 10, fontFamily: 'PxGroteskRegular', letterSpacing: 2 }}>YOUR VEHICLE</p>
        <p style={{ fontSize: 58, color: 'rgb(63,56,37)', fontFamily: 'PxGroteskLight', marginTop: 10 }}> Alto 09</p>
        <div className="container container--spacebetween">
            <div className="container--withoutPadding container--column topBorder marginLeft">
                <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight', }}>Make/Model</div>
                <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskBold', }}>2019 Volkswagen Atlas</div>
            </div>
            <div className="container--withoutPadding container--column topBorder marginLeft">
                <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight', }}>Color</div>
                <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskBold', }}>Pure White</div>
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