import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    selectFeatDetail,
} from "../selectors/feats.selector";
import { showFeatDetail } from "../reducers/feats.reducer";
import isEmpty from 'lodash/isEmpty';

const Feats = ({
    featsArray,
    featDetail,
    showFeatDetail
}) => {
    const showFeatDetails = !isEmpty(featDetail);
    return(
        <div className="maneuvers">
            <h1> Feats </h1>
            {featsArray.map(
                feat => (
                    <button key={feat.name} onClick={() => showFeatDetail(feat)}>
                        {feat.name}
                    </button>
                )
            )}
            { showFeatDetails &&
            <div className={`selectedObject`}>
                <p className="objectDescription">{featDetail.description}</p>
            </div>}
        </div>
    );
}

Feats.defaultProps = {
    featsArray: [],
    featDetail: {},
};

Feats.propTypes = {
    featsArray: ptypes.array,
    maneuverDetail: ptypes.object,
};

export const mapStateToProps = state => ({
    featDetail: selectFeatDetail(state),
});

export const mapDispatchToProps = dispatch => ({
    showFeatDetail: bindActionCreators(showFeatDetail, dispatch),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Feats)