import React from 'react';
import driver from '../images/Driver_photo.png';

const DriverPage = () => (
    <div className="container-withoutPadding container--centered" >
        <div className="container-withoutPadding">

            <img
                src={driver}
                alt="driver pic"
                style={{
                    // maxWidth: 600,
                    // maxHeight: 600,
                    width: '100%',
                    height: 'auto',
                }}

            />
        </div>
        <div className="container container--column">
            <p style={{ color: 'rgb(172,120,109)' }}>YOUR DRIVER</p>
            <p style={{ fontSize: 48 }}> Steph</p>
            <p>Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018</p>
            <div>
                <button disabled className="big-button">
                    CONTACT DRIVER
                </button>
            </div>
        </div>
    </div>
);


export default DriverPage;