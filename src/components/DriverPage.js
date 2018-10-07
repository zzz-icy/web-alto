import React from 'react';
import driver from '../images/Driver_photo.png';

const DriverPage = () => (
    <div className="container container--centered container--column">
        <div className="container-withoutPadding  container--centered driver__image">

            <img
                src={driver}
                alt="driver pic"
                style={{
                    width: '100%',
                    height: 'auto',
                }}

            />
        </div>
        <div className="container container--centered container--column">
            <p className="subtitle">YOUR DRIVER</p>

            <p className="title">Steph</p>

            <div className="bottomBorder" />

            <p style={{ fontFamily: 'PxGroteskLight', color: 'rgb(108,104,91)', fontSize: 12, marginTop: 10, marginBottom: 40, wordWrap: 'break-word' }}>
                Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018
            </p>
        </div>
        <div className="container-withoutPadding">
            <button disabled className="big-button">
                CONTACT DRIVER
                </button>


        </div>
    </div >

);


export default DriverPage;