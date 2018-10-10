import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/trip';

import driver from '../images/Driver_photo.png';

export class DriverPage extends React.Component {

    render() {
        // const driver = this.props.data;

        // if (!driver) return null;
        return (
            <div className="container container--centered container--column">
                <div className="container-withoutPadding  container--centered driver__image">

                    <img
                        src={driver}
                        alt="driver pic"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}

                    />
                </div>
                <div className="container container--centered container--column">
                    <p className="subtitle">YOUR DRIVER</p>

                    <p className="title">Steph</p>

                    <div className="bottomBorder" />

                    <p style={{ fontFamily: 'PxGroteskLight', color: 'rgb(108,104,91)', fontSize: 12, marginTop: 10, marginBottom: 40, wordWrap: 'break-word' }}>
                        Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018
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
    onloadTrip: () => (dispatch(loadData()))
});
const mapStateToProps = (state) => {
    // console.log(state.mainReducer._root.entries[1][1]);
    return {
        data: state.mainReducer._root.entries[1][1]
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);