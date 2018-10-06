import React from 'react';
import Edit from '../images/Edit_icon.png';
import Info from '../images/Info_icon.png';


class SummaryPage extends React.Component {
    state = {
        text: "Can you drop me off at AA International Bag Drop please?",
    }
    render() {
        return (
            <div className="container container--centered container--column">
                <div className="container--withoutPadding">
                    <p style={{ fontSize: 24, color: 'rgb(63,56,37)' }}>Your Trip</p>
                </div>
                <div className="container--withoutPadding alignItems">
                    <p style={{ fontSize: 48, margin: 0, fontFamily: 'PxGroteskLight' }}>5:39</p>
                    <p style={{ fontSize: 30, margin: 0, paddingLeft: 10, paddingBottom: 5, fontFamily: 'PxGroteskLight' }}>PM</p>
                </div>
                <div className="container--withoutPadding container--flexstart ">
                    <p style={{ marginTop: 0, fontFamily: 'PxGroteskLight', fontSize: 13, color: 'rgb(63,56,37)' }}>Estimated arrival at DFW Int'l Airport - Terminal E</p>
                </div>
                <div className="container--withoutPadding container--spacebetween marginTop">
                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth">
                        <div style={{ color: 'rgb(63,56,37)', fontFamily: 'PxGroteskLight', fontSize: 10, marginTop: 8 }}>Estimated Fare:</div>
                        <div className=" container--withoutPadding container-flexstart ">
                            <div style={{ color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular', fontSize: 13, marginTop: 6 }}>$65 - $75</div>
                            <img src={Info} alt="Info Icon" style={{ marginLeft: 8, marginTop: 6, height: 11, width: 'auto' }} />
                        </div>

                    </div>
                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth">
                        <div style={{ color: 'rgb(63,56,37)', fontFamily: 'PxGroteskLight', fontSize: 10, marginTop: 8 }}>Passenger:</div>
                        <div style={{ color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular', fontSize: 13, marginTop: 6 }}>1 - 5</div>
                    </div>
                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth ">
                        <div style={{ color: 'rgb(63,56,37)', fontFamily: 'PxGroteskLight', fontSize: 10, marginTop: 8 }}>Payment:</div>
                        <div style={{ color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular', fontSize: 13, marginTop: 6 }}>Amex01</div>
                    </div>
                </div>
                <div className="container--withoutPadding container--column marginTop">
                    <div style={{ color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight' }}>449 Flora St.</div>
                    <div style={{ color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight' }}>Dallas, Texas 75201</div>
                </div>
                <div className="container--withoutPadding container--column marginTop">
                    <p style={{ margin: 0, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular' }}>DFW International Airport</p>
                    <p style={{ margin: 0, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular' }}>American Airlines terminal E</p>
                    <p style={{ margin: 0, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular' }}>Irving, Texas 75216</p>
                </div>
                <div className="container--withoutPadding marginTop">

                    <textarea rows="2" cols="30" className="summary__input">
                        {this.state.text}
                    </textarea>
                    <img src={Edit} alt="Edit Icon" style={{ marginLeft: 10, height: 10, width: 'auto', marginTop: 3, paddingTop: 14 }} />
                </div>
                <div>
                    <div className="container--withoutPadding marginTop">
                        <button disabled className="big-button">
                            CANCEL TRIP
                </button>
                    </div>
                </div>
            </div>
        );
    }
}




export default SummaryPage;



// <input
// placeholder="Leave a note"
// value={this.state.text}
// size={50}
// className="summary__input"
// type='text'
// />