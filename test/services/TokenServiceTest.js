import axios from 'axios';
import Promise from 'bluebird';
import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Product from '../../src/entities/Product';
import Licensee from '../../src/entities/Licensee';
import Token from '../../src/entities/Token';
import ProductService from '../../src/services/ProductService';
import LicenseeService from '../../src/services/LicenseeService';
import TokenService from '../../src/services/TokenService';
import Constants from '../../src/Constants';


describe('services.TokenServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "create" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);


        const token = new Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))

            // test
            .then(() => TokenService.create(context, token))
            .then((entity) => {
                expect(entity instanceof Token).toBe(true);
                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "get" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);

        const token = new Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => TokenService.create(context, token))

            // test
            .then(entity => TokenService.get(context, entity.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Token).toBe(true);
                expect(entity.getProperty('number')).toBeTruthy();
                expect(entity.getProperty('tokenType')).toBe(token.getProperty('tokenType'));
                expect(entity.getProperty('licenseeNumber')).toBe(token.getProperty('licenseeNumber'));
                expect(entity.getProperty('expirationTime') instanceof Date).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "list" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);


        const token = new Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => TokenService.create(context, token))

            // test
            .then(() => TokenService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Token).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });

    it('check "delete" method', () => {
        const product = new Product()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true)
            .setProperty('version', String(Faker.float(1, 3)))
            .setProperty('description', Faker.string('JS-DESCRIPTION-').toUpperCase())
            .setProperty('licensingInfo', Faker.string('JS-LICENSING-INFO-').toUpperCase())
            .setProperty('licenseeAutoCreate', Faker.boolean());

        const licensee = new Licensee()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('name', Faker.string('JS-NAME-').toUpperCase())
            .setProperty('active', true);


        const token = new Token()
            .setProperty('tokenType', 'SHOP')
            .setProperty('licenseeNumber', licensee.getProperty('number'));

        // setup
        return Promise.resolve()
            .then(() => ProductService.create(context, product))
            .then(() => LicenseeService.create(context, product.getProperty('number'), licensee))
            .then(() => TokenService.create(context, token))

            // test
            .then(entity => TokenService.delete(context, entity.getProperty('number')))
            .then((state) => {
                expect(state).toBe(true);
            })

            // cleanup
            .finally(() => axios({
                url: `${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.getProperty('number')}`,
                method: 'delete',
                validateStatus() {
                    return true;
                },
                auth: {
                    username: context.getUsername(),
                    password: context.getPassword(),
                },
                params: {
                    forceCascade: true,
                },
            }));
    });
});
