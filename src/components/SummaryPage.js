import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import Edit from '../images/Edit_icon.png';
import Info from '../images/Info_icon.png';
import { loadData } from '../actions/trip';
import moment from 'moment';

export class SummaryPage extends React.Component {
    componentDidMount() {
        if (!this.props.trip) {
            this.props.onloadTrip('trip');
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
        // this.props.onloadTrip('trip');
        // console.log(this.props);
        const trip = this.props.trip;

        let time, est_fare_min, est_fare_max, psg_min, psg_max, payment, dropoff_location, pickup_location, dropoff_name, dropoff_zipcode, dropoff_city, dropoff_state, dropoff_street_line1, dropoff_street_line2, pickup_street_line1, pickup_street_line2, pickup_state, pickup_city, pickup_zipcode;
        if (trip) {
            time = moment(trip.estimated_arrival).format('LT').split(' ');
            // console.log(time);
            est_fare_min = numeral(trip.estimated_fare_min / 100).format('$0,0');
            est_fare_max = numeral(trip.estimated_fare_max / 100).format('$0,0');
            psg_min = trip.passengers_min;
            psg_max = trip.passengers_max;
            payment = trip.payment;
            dropoff_location = trip.dropoff_location;
            pickup_location = trip.pickup_location;
            if (dropoff_location) {
                dropoff_name = dropoff_location.name
                dropoff_street_line1 = dropoff_location.street_line1;
                dropoff_street_line2 = dropoff_location.street_line2;
                dropoff_state = dropoff_location.state;
                dropoff_city = dropoff_location.city;
                dropoff_zipcode = dropoff_location.zipcode;
            }
            if (pickup_location) {
                // pickup_name = pickup_location.name
                pickup_street_line1 = pickup_location.street_line1;
                pickup_street_line2 = pickup_location.street_line2;
                pickup_state = pickup_location.state;
                pickup_city = pickup_location.city;
                pickup_zipcode = pickup_location.zipcode;
            }
        }


        // const { estimated_arrival } = trip.trip;
        // console.log(moment(estimated_arrival));
        if (!trip) return null;
        return (
            <div className="container container--centered container--column">
                <div className="container--withoutPadding">
                    <p style={{ fontSize: 24, color: 'rgb(63,56,37)' }}>Your Trip</p>
                </div>
                <div className="container--withoutPadding alignItems">
                    <p style={{ fontSize: 48, margin: 0, fontFamily: 'PxGroteskLight' }}>
                        {time[0]}
                    </p>
                    <p style={{ fontSize: 30, margin: 0, paddingLeft: 10, paddingBottom: 5, fontFamily: 'PxGroteskLight' }}>
                        {time[1]}
                    </p>
                </div>
                <div className="container--withoutPadding container--flexstart ">
                    <p style={{ marginTop: 0, fontFamily: 'PxGroteskLight', fontSize: 13, color: 'rgb(63,56,37)' }}>
                        Estimated arrival at {dropoff_name}
                    </p>
                </div>
                <div className="container--withoutPadding container--spacebetween marginTop">

                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth">
                        <div className="font--brownPxGroteskLight">Estimated Fare:</div>
                        <div className=" container--withoutPadding container-flexstart ">
                            <div className="font--greygreenPxGroteskRegular">
                                {est_fare_min} - {est_fare_max}
                            </div>
                            <img src={Info} alt="Info Icon" style={{ marginLeft: 8, marginTop: 6, height: 11, width: 'auto' }} />
                        </div>
                    </div>

                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth">
                        <div className="font--brownPxGroteskLight">Passenger:</div>
                        <div className="font--greygreenPxGroteskRegular" >
                            {psg_min} - {psg_max}
                        </div>
                    </div>

                    <div className="container--withoutPadding container--column topBorder marginLeft percentageWidth ">
                        <div className="font--brownPxGroteskLight">payment:</div>
                        <div className="font--greygreenPxGroteskRegular">{payment}:</div>
                    </div>

                </div>
                <div className="container--withoutPadding container--column marginTop font--greygreenPxGroteskLight">
                    <div> {pickup_street_line1}</div>
                    {pickup_street_line2 && <div> {pickup_street_line2}</div>}
                    <div>
                        {pickup_city && <span>{pickup_city}, </span>}
                        {pickup_state && <span>{pickup_state}</span>}
                        {pickup_zipcode && <span>{pickup_zipcode}</span>}
                    </div>
                </div>

                <div className="bottomBorder marginTop" />
                <div className="container--withoutPadding container--column marginTop ">
                    {dropoff_street_line1 && <p className="destination">{dropoff_street_line1}</p>}                    {dropoff_street_line2 && <p className="destination">{dropoff_street_line2}</p>}
                    <p className="destination">
                        {pickup_city && <span>{dropoff_city}, </span>}
                        {pickup_state && <span>{dropoff_state}</span>}
                        {pickup_zipcode && <span>{dropoff_zipcode}</span>}
                    </p>

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
    onloadTrip: (pageName) => (dispatch(loadData(pageName)))
});

const mapStateToProps = (state) => {
    console.log(state);
    return {
        // trip: '1111111',
        // data: state.mainReducer._root.entries[1][1]
        trip: state.data
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);



// <input
// placeholder="Leave a note"
// value={this.state.text}
// size={50}
// className="summary__input"
// type='text'
// />