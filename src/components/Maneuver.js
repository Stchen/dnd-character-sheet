import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    selectActivatedManeuvers,
    selectManeuverDetail,
} from "../selectors/maneuver.selector";
import { newManeuverActivated, restartManLoop, showManeuverDetail, expendManeuver} from "../reducers/maneuver.reducer";
import { resetDelayDamage } from "../reducers/health.reducer";
import './Maneuver.scss';
import isEmpty from 'lodash/isEmpty';

const Maneuver = ({
    activatedManeuvers,
    newManeuverActivated,
    restartManLoop,
    showManeuverDetail,
    resetDelayDamage,
    expendManeuver,
    maneuverDetail,
}) => {
    const showManeuverDetails = !isEmpty(maneuverDetail);
    const maneuverExpendedStatus = maneuverDetail.maneuverExpended;
    return(
        <div className="maneuvers">
            <div className ="maneuver-controls">
                <button className="maneuver-activate" onClick={()=>{newManeuverActivated(); resetDelayDamage()}}> Activate next Maneuver </button>
                <button className="maneuver-restart" onClick={restartManLoop}> Restart Maneuver Loop </button>
            </div>
            { activatedManeuvers.map( maneuver => (
                <button key={maneuver.name} className = {`maneuverButton expendedStatus--${maneuver.maneuverExpended}`} onClick={() => {showManeuverDetail(maneuver)}}>
                    {maneuver.name}
                </button>
            ))}
            { showManeuverDetails &&
            <div className={`selectedObject expendedStatus--${maneuverExpendedStatus}`}>
                <p>Level: <strong>{maneuverDetail.level}</strong></p>
                <p>Casting Time: <strong>{maneuverDetail.castingTime}</strong></p>
                <p>Range: <strong>{maneuverDetail.range}</strong></p>
                <p>Target: <strong>{maneuverDetail.target}</strong></p>
                <p className="objectDescription">{maneuverDetail.description}</p>
                <button className={`maneuver-expend expendedStatus--${maneuverExpendedStatus}`} onClick={() => expendManeuver(maneuverDetail)}> Expend Maneuver </button>
            </div>}
        </div>
    );
}

Maneuver.defaultProps = {
    activatedManeuvers: [],
    maneuverDetail: {},
};

Maneuver.propTypes = {
    activatedManeuvers: ptypes.array,
    maneuverDetail: ptypes.object,
};

export const mapStateToProps = state => ({
    activatedManeuvers: selectActivatedManeuvers(state),
    maneuverDetail: selectManeuverDetail(state)
});

export const mapDispatchToProps = dispatch => ({
    showManeuverDetail: bindActionCreators(showManeuverDetail, dispatch),
    resetDelayDamage: bindActionCreators(resetDelayDamage, dispatch),
    newManeuverActivated: bindActionCreators(newManeuverActivated, dispatch),
    restartManLoop: bindActionCreators(restartManLoop, dispatch),
    expendManeuver: bindActionCreators(expendManeuver, dispatch),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Maneuver)