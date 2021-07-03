import get from 'lodash/get';

export const selectAbilityDetail = state => get(state, 'abilities.abilityDetail')