import faker from 'faker';
import Constants from '@/Constants';
import Token from '@/entities/Token';
import factory from './factory';

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export default factory((data = {}) => {
    const token = new Token({
        number: faker.random.uuid(),
        active: faker.random.boolean(),
        expirationTime: faker.date.future(),
        tokenType: randomItem(Object.values(Constants.Token.Type)),

        ...data,
    });

    if (!token.licenseeNumber && token.tokenType === Constants.Token.Type.SHOP) {
        token.licenseeNumber = faker.random.uuid();
    }

    return token;
});
