import React from 'react';
import driver from '../images/Driver_photo.png';

const DriverPage = () => (

    <div className="container-withoutPadding container--centered" >
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
        <div className="container container--column">
            <p style={{ color: 'rgb(172,120,109)', fontSize: 10, fontFamily: 'PxGroteskRegular', letterSpacing: 2 }}>YOUR DRIVER</p>
            <p style={{ fontSize: 58, fontFamily: 'PxGroteskLight', color: 'rgb(63,56,37)', marginTop: 8, marginBottom: 10 }}> Steph</p>
            <div style={{ borderBottomColor: 'rgb(217,216,203)', borderBottomWidth: 1, borderBottomStyle: 'solid', width: "30%" }}></div>
            <p style={{ fontFamily: 'PxGroteskLight', color: 'rgb(108,104,91)', fontSize: 12, marginTop: 10, marginBottom: 40 }}>Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018</p>
            <div>
                <button disabled className="big-button">
                    CONTACT DRIVER
                </button>
            </div>
        </div>
    </div>

);


export default DriverPage;