import factory from './factory';

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const licenseType = factory(() => ({
    name: randomItem(['FEATURE', 'TIMEVOLUME', 'FLOATING', 'QUANTITY']),
}));

export const licensingModel = factory(() => ({
    name: randomItem(['TimeLimitedEvaluation', 'TimeVolume', 'FeatureWithTimeVolume']),
}));

export default {
    licenseType,
    licensingModel,
};
