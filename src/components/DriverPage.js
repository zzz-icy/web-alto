import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/trip';
import driver_pic from '../images/Driver_photo.png';

export class DriverPage extends React.Component {
    componentDidMount() {
        if (!this.props.data) {
            this.props.onloadDriver('driver');
        }
    }
    render() {
        const driver = this.props.driver;
        // let driver_pic;
        // if (driver) {
        //     driver_pic = driver.image;
        // }
        console.log(driver);
        if (!driver) return null;
        return (
            <div className="container container--centered container--column">
                <div className="container-withoutPadding  container--centered driver__image">

                    <img
                        src={driver_pic}
                        alt="driver pic"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}

                    />
                </div>
                <div className="container container--centered container--column">
                    <p className="subtitle">YOUR DRIVER</p>

                    <p className="title">{driver.name}</p>

                    <div className="bottomBorder" />

                    <p style={{ fontFamily: 'PxGroteskLight', color: 'rgb(108,104,91)', fontSize: 12, marginTop: 10, marginBottom: 40, wordWrap: 'break-word' }}>
                        {driver.bio}
                    </p>
                </div>
                <div className="container-withoutPadding">
                    <button disabled className="big-button">
                        CONTACT DRIVER
                        </button>


                </div>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    onloadDriver: (data) => (dispatch(loadData(data)))
});
const mapStateToProps = (state) => {
    // console.log(state._root.entries[1][1]);
    return {
        // driver: state._root.entries[1][1]
        driver: state.data
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);