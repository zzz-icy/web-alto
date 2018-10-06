import React from 'react';
import Edit from '../images/Edit_icon.png';
import Info from '../images/Info_icon.png';


const SummaryPage = () => (
    <div className="container container--centered container--column">
        <div className="container">
            <p style={{ fontSize: 24 }}>Your Trip</p>
        </div>
        <div className="container container--flexstart alignItems">
            <p style={{ fontSize: 48, margin: 0 }}>5:39</p>
            <p style={{ fontSize: 36, margin: 0 }}>PM</p>
        </div>
        <div className="container container--flexstart ">
            <p style={{ marginTop: 0 }}>Estimated arrival at DFW Int'l Airport - Terminal E</p>
        </div>
        <div className="container container--flexstart marginTop">
            <div className="container--withoutPadding container--column container-small marginRight">
                <div>Estimated Fare:</div>
                <div className=" container--withoutPadding container-flexstart ">
                    <div>$65 - $75</div>
                    <img src={Info} alt="Info Icon" style={{ marginLeft: 10 }} />
                </div>

            </div>
            <div className="container container--column container-small ">
                <div>Passenger:</div>
                <div>1 - 5</div>
            </div>
            <div className="container container--column container-small ">
                <div>Payment:</div>
                <div>Amex01</div>
            </div>
        </div>
        <div className="container container--column marginTop">
            <div>449 Flora St.</div>
            <div>Dallas, Texas 75201</div>
        </div>
        <div className="container container--column marginTop">
            <p style={{ margin: 0 }}>DFW International Airport</p>
            <p style={{ margin: 0 }}>American Airlines terminal E</p>
            <p style={{ margin: 0 }}>Irving, Texas 75216</p>
        </div>
        <div className="container marginTop">
            <input />
            <img src={Edit} alt="Edit Icon" style={{ marginLeft: 10 }} />
        </div>
        <div>
            <button disabled className="big-button">
                CANCEL TRIP
            </button>
        </div>
    </div>
);


export default SummaryPage;