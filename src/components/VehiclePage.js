import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/trip';
import vehicle_pic from '../images/Vehicle_photo.png';

class VehiclePage extends React.Component {
    componentDidMount() {
        // if (!this.props.data) {
        this.props.onloadVehicle('vehicle');
        // }
    }
    render() {
        const { vehicle } = this.props;

        if (!vehicle) return null;
        return (
            <div className="container container--centered container--column">
                <div style={{
                    marginTop: 20,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: "80%"
                }}>
                    <img
                        src={vehicle_pic}
                        alt="vehicle pic"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>

                <p className="subtitle">YOUR VEHICLE</p>
                <p className="title">{vehicle.license}</p>

                <div className="container--withoutPadding container--spacebetween">

                    <div className="container--withoutPadding container--column topBorder marginLeft">
                        <div className="lightfontitem">Make/Model</div>
                        <div className="boldfontitem">{vehicle.make}</div>
                    </div>

                    <div className="container--withoutPadding container--column topBorder marginLeft">
                        <div className="lightfontitem">Color</div>
                        <div className="boldfontitem">{vehicle.color}</div>
                    </div>

                </div>
                <div className="container--withoutPadding bigMarginTop">
                    <button disabled className="big-button">
                        IDENTIFY VEHICLE
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onloadVehicle: (data) => (dispatch(loadData(data)))
});
const mapStateToProps = (state) => {
    // console.log(state.mainReducer._root.entries[1][1]);
    return {
        vehicle: state.data
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(VehiclePage);