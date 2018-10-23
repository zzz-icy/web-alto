import React from 'react';
import map from '../images/Map_overview.png';
import { connect } from 'react-redux';
import { loadVibe } from '../actions/vibe';
import { loadTrip } from '../actions/trip';
import moment from 'moment';
import mapIcon from '../images/Map_icon.png';

class RoutePage extends React.Component {

    componentDidMount() {
        if (!this.props.vibe) {
            this.props.onloadVibe();
            this.props.onloadTrip();
        }
    }

    render() {
        const { vibe, trip } = this.props;
        let time, dropoff_location, dropoff_name;
        if (trip) {
            time = moment(trip.estimated_arrival).format('LT').split(' ');
            dropoff_location = trip.dropoff_location;
            if (dropoff_location) {
                dropoff_name = dropoff_location.name
            }
        }
        if (!vibe || !trip) return null;
        return (
            <div className=" container container-withoutPadding container--centered container--column" >
                <div className=" route__image route__image--align">

                    <img
                        src={map}
                        alt="map overview"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />

                    <div className="container ">
                        <img src={mapIcon} alt="current location icon" className="route__image--alignself" />

                    </div>
                </div>
                <div className="container">
                    <p className="subtitle">YOUR TRIP</p>
                </div>
                <div className="container alignItems">
                    <p style={{ fontSize: 48, margin: 0, fontFamily: 'PxGroteskLight' }}>
                        {time[0]}
                    </p>
                    <p style={{ fontSize: 30, margin: 0, paddingLeft: 10, paddingBottom: 5, fontFamily: 'PxGroteskLight' }}>
                        {time[1]}
                    </p>
                </div>
                <div className="container container--flexstart ">
                    <p style={{ marginTop: 0, fontFamily: 'PxGroteskLight', fontSize: 13, color: 'rgb(63,56,37)' }}>
                        {dropoff_name}
                    </p>
                </div>
                <div className="container container--column topBorder">
                    <div style={{ marginTop: 10, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskLight', }}>Current Vibe</div>
                    <div style={{ marginTop: 6, fontSize: 12, color: 'rgb(108,104,91)', fontFamily: 'PxGroteskRegular', }}>{vibe.name}</div>

                </div>
                <div className="container--withoutPadding marginTop">
                    <button className="route-big-button">
                        CHANGE VEHICLE VIBE
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onloadVibe: () => (dispatch(loadVibe())),
    onloadTrip: () => (dispatch(loadTrip()))

});
const mapStateToProps = (state) => {
    // console.log(state.mainReducer._root.entries[1][1]);
    console.log(state);
    return {
        vibe: state.vibe.vibe,
        trip: state.trip.trip
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoutePage);

