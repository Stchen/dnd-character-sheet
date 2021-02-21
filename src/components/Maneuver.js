import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectActivatedManeuvers, selectManeuverDetail } from "../selectors/maneuver.selector";
import { newManeuverActivated, restartManLoop, showManeuverDetail, expendManeuver} from "../reducers/maneuver.reducer";
import './Maneuver.scss';
import isEmpty from 'lodash/isEmpty';

const Maneuver = ({
    activatedManeuvers,
    newManeuverActivated,
    restartManLoop,
    showManeuverDetail,
    expendManeuver,
    maneuverDetail,
}) => {
    const showManeuverDetails = !isEmpty(maneuverDetail);
    const maneuverExpendedStatus = maneuverDetail.maneuverExpended;
    return(
        <div className="maneuvers">
            <div className ="maneuver-controls">
                <button className="maneuver-activate" onClick={newManeuverActivated}> Activate next Maneuver </button>
                <button className="maneuver-restart" onClick={restartManLoop}> Restart Maneuver Loop </button>
            </div>
            { activatedManeuvers.map( maneuver => ( <button className = {`maneuverButton expendedStatus--${maneuver.maneuverExpended}`} onClick={() => showManeuverDetail(maneuver)}>{maneuver.name}</button> ) )}
            { showManeuverDetails &&
            <div className={`selectedManeuver expendedStatus--${maneuverExpendedStatus}`}>
                <p>Level: <strong>{maneuverDetail.level}</strong></p>
                <p>Casting Time: <strong>{maneuverDetail.castingTime}</strong></p>
                <p>Range: <strong>{maneuverDetail.range}</strong></p>
                <p>Target: <strong>{maneuverDetail.target}</strong></p>
                <p className="maneuverDescription">{maneuverDetail.description}</p>
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
    newManeuverActivated: bindActionCreators(newManeuverActivated, dispatch),
    restartManLoop: bindActionCreators(restartManLoop, dispatch),
    expendManeuver: bindActionCreators(expendManeuver, dispatch),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Maneuver)