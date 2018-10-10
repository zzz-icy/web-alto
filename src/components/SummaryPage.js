import React from 'react';
import { connect } from 'react-redux';
import Edit from '../images/Edit_icon.png';
import Info from '../images/Info_icon.png';
import { loadData } from '../actions/trip'

class SummaryPage extends React.Component {
    componentDidMount() {
        if (!this.props.trip) {
            this.props.onloadTrip();
        }
    }

    state = {
        text: "Can you drop me off at AA International Bag Drop please?",
    }
    onNoteChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const { trip } = this.props;
        console.log(trip);
        if (!trip) return null;
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
                        <div className="font--brownPxGroteskLight">Estimated Fare:</div>
                        <div className=" container--withoutPadding container-flexstart ">
                            <div className="font--greygreenPxGroteskRegular">$65 - $75</div>
                            <img src={Info} alt="Info Icon" style={{ marginLeft: 8, marginTop: 6, height: 11, width: 'auto' }} />
                        </div>
                    </div>

                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth">
                        <div className="font--brownPxGroteskLight">Passenger:</div>
                        <div className="font--greygreenPxGroteskRegular" >1 - 5</div>
                    </div>

                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth ">
                        <div className="font--brownPxGroteskLight">Payment:</div>
                        <div className="font--greygreenPxGroteskRegular">Amex01</div>
                    </div>

                </div>
                <div className="container--withoutPadding container--column marginTop font--greygreenPxGroteskLight">
                    <div>449 Flora St.</div>
                    <div>Dallas, Texas 75201</div>
                </div>

                <div className="bottomBorder marginTop" />
                <div className="container--withoutPadding container--column marginTop ">
                    <p className="destination">DFW International Airport</p>
                    <p className="destination">American Airlines terminal E</p>
                    <p className="destination">Irving, Texas 75216</p>
                </div>
                <div className="container--withoutPadding marginTop">

                    <textarea
                        rows="2"
                        cols="30"
                        className="summary__input"
                        value={this.state.text}
                        onChange={this.onNoteChange}
                    // wrong: if use this.onChange()
                    />
                    <img
                        src={Edit}
                        alt="Edit Icon"
                        style={{ marginLeft: 10, height: 10, width: 'auto', marginTop: 3, paddingTop: 14 }}
                    />
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

const mapDispatchToProps = (dispatch) => ({
    onloadTrip: () => (dispatch(loadData()))
});

const mapStateToProps = (state) => ({
    trip: state.data
});
export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);



// <input
// placeholder="Leave a note"
// value={this.state.text}
// size={50}
// className="summary__input"
// type='text'
// />