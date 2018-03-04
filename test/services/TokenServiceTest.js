import Faker from '../Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import Licensee from '../../src/entities/Licensee';
import Token from '../../src/entities/Token';
import ProductService from '../../src/services/ProductService';
import LicenseeService from '../../src/services/LicenseeService';
import TokenService from '../../src/services/TokenService';


describe('TokenServiceTest', () => {
    let context;
    let product;
    let licensee;
    let token;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');

        product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        ProductService.create(context, product)
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee));
    });

    beforeEach(() => {
        token = new Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));
    });

    afterAll(() => {
        ProductService.delete(context, product.getProperty('number'), true);
    });

    it('check "create" method', () => {
        TokenService.create(context, token)
            .then((entity) => {
                expect(entity instanceof Token).toBe(true);
                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);
            });
    });

    it('check "get" method', () => {
        TokenService.create(context, token)
            .then(entity => TokenService.get(context, entity.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Token).toBe(true);

                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);
            });
    });

    it('check "list" method', () => {
        TokenService.create(context, token)
            .then(() => TokenService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Token).toBe(true);
            });
    });

    it('check "delete" method', () => {
        TokenService.create(context, token)
            .then(() => TokenService.delete(context, token.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            });
    });
});
