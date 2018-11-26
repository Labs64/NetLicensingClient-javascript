import faker from 'faker';
import factory from './factory';
import Constants from '@/Constants';

const randomItem = array => array[Math.floor(Math.random() * array.length)];

export default factory(() => {
    const token = {
        number: faker.random.uuid(),
        active: faker.random.boolean(),
        expirationTime: faker.date.future(),
        tokenType: randomItem(Object.values(Constants.Token.Type)),
    };

    if (token.tokenType === Constants.Token.Type.SHOP) {
        token.licenseeNumber = 'some number';
    }
    return token;
});
