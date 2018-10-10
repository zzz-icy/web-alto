import React from 'react';
import map from '../images/Map_overview.png';
import { connect } from 'react-redux';
import { loadData } from '../actions/trip';
import mapIcon from '../images/Map_icon.png';

class RoutePage extends React.Component {

    componentDidMount() {
        // if (!this.props.vibe) {
        this.props.onloadVibe('vibe');
        // }
    }

    render() {
        const { vibe } = this.props;

        if (!vibe) return null;
        return (
            <div className="container container--centered container--column">
                <div className="container-withoutPadding container--centered">
                    <div className="route__image route__image--align">

                        <img
                            src={map}
                            alt="map overview"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <img src={mapIcon} alt="current location icon" style={{ position: 'absolute', right: 20 }} />
                </div>
                <div className="container">
                    <p className="subtitle">YOUR TRIP</p>
                </div>
                <div className="container alignItems">
                    <p style={{ fontSize: 48, margin: 0, fontFamily: 'PxGroteskLight' }}>5:39</p>
                    <p style={{ fontSize: 30, margin: 0, paddingLeft: 10, paddingBottom: 5, fontFamily: 'PxGroteskLight' }}>PM</p>
                </div>
                <div className="container container--flexstart ">
                    <p style={{ marginTop: 0, fontFamily: 'PxGroteskLight', fontSize: 13, color: 'rgb(63,56,37)' }}>Estimated arrival at DFW Int'l Airport - Terminal E</p>
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
    onloadVibe: (data) => (dispatch(loadData(data)))
});
const mapStateToProps = (state) => {
    // console.log(state.mainReducer._root.entries[1][1]);
    return {
        vibe: state.data
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoutePage);

