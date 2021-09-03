import faker from 'faker';
import Constants from '@/Constants';
import Token from '@/entities/Token';
import factory from './factory';

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export default factory((data = {}) => {
    const token = new Token({
        number: faker.datatype.uuid(),
        active: faker.datatype.boolean(),
        expirationTime: faker.date.future(),
        tokenType: randomItem(Object.values(Constants.Token.Type)),

        ...data,
    });

    if (!token.licenseeNumber && token.tokenType === Constants.Token.Type.SHOP) {
        token.licenseeNumber = faker.datatype.uuid();
    }

    return token;
});
