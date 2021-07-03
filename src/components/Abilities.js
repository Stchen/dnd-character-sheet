import React from 'react';
import { PropTypes as ptypes } from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    selectAbilityDetail
} from "../selectors/abilities.selector";
import { showAbilitiesDetail } from "../reducers/abilities.reducer";
import isEmpty from 'lodash/isEmpty';

const Abilities = ({
    abilitiesArray,
    abilityDetail,
    showAbilitiesDetail
}) => {
    const showAbilityDetails = !isEmpty(abilityDetail);
    console.log(abilityDetail)
    return(
        <div className="maneuvers">
            <h1> Feats/Abilities </h1>
            {abilitiesArray.map(
                ability => (
                    <button key={ability.name} onClick={() => showAbilitiesDetail(ability)}>
                        {ability.name}
                    </button>
                )
            )}
            { showAbilityDetails &&
            <div className={`selectedObject`}>
                <p className="objectDescription">{abilityDetail.description}</p>
            </div>}
        </div>
    );
}

Abilities.defaultProps = {
    abilitiesArray: [],
    abilityDetail: {},
};

Abilities.propTypes = {
    abilitiesArray: ptypes.array,
};

export const mapStateToProps = state => ({
    abilityDetail: selectAbilityDetail(state)
});

export const mapDispatchToProps = dispatch => ({
    showAbilitiesDetail: bindActionCreators(showAbilitiesDetail, dispatch),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Abilities)