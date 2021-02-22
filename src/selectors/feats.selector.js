import get from 'lodash/get';

export const selectFeatDetail = state => get(state, 'feats.featDetail');
