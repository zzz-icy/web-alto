import React from 'react';
import Edit from '../images/Edit_icon.png';

const SummaryPage = () => (
    <div className="container-column">
        <div>
            <p>Your Trip</p>
        </div>
        <div>
            <p>5:39 PM</p>
        </div>
        <div style={{ marginTop: 5 }}>
            <p>Estimated arrival at DFW Int'l Airport - Terminal E</p>
        </div>
        <div className="container-spacearound">
            <div className="container-column">
                <div>Estimated Fare:</div>
                <div>$65 - $75</div>
            </div>
            <div className="container-column">
                <div>Passenger:</div>
                <div>1 - 5</div>
            </div>
            <div className="container-column">
                <div>Payment:</div>
                <div>Amex01</div>
            </div>
        </div>
        <div>
            <div>449 Flora St.</div>
            <div>Dallas, Texas 75201</div>
        </div>
        <div>
            <div>DFW International Airport</div>
            <div>American Airlines terminal E</div>
            <div>irving, Texas 75216</div>
        </div>
        <div>
            <input />
            <img src={Edit} alt="Edit Icon" style={{ marginLeft: 10 }} />
        </div>
        <div>
            <button>
                Cancel Trip
            </button>
        </div>
    </div>
);


export default SummaryPage;