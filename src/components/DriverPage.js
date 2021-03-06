import React from 'react';
import { connect } from 'react-redux';
import { loadDriver } from '../actions/driver';
import driver_pic from '../images/Driver_photo.png';

export class DriverPage extends React.Component {
    componentDidMount() {
        if (!this.props.driver) {
            this.props.onloadDriver();
        }
    }
    render() {
        const driver = this.props.driver;
        // let images = require.context('../images', true);
        // let img_src;

        // if (driver) {
        //     img_src = require.context(`./${driver.image}`);
        // }

        // let driver_pic;
        // if (driver) {
        //     driver_pic = driver.image;
        // }
        if (!driver) return null;
        return (
            <div className="container container--centered container--column">
                <div className="container-withoutPadding  container--centered driver__image">

                    <img

                        src={process.env.NODE_ENV === 'development' ? driver_pic : driver.image}

                        // src={img_src}
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
    onloadDriver: () => (dispatch(loadDriver()))
});
const mapStateToProps = (state) => {
    // console.log(state._root.entries[1][1]);
    console.log(state);

    return {
        // driver: state._root.entries[1][1]
        driver: state.driver.driver
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);