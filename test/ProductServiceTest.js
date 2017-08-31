describe('ProductServiceTest', function () {
    var context, promise, source, discounts, sourceProduct;

    // beforeAll(function () {
    //     context = new Nlic.Context().setUsername('Demo').setPassword('demo');
    //     promise = Promise.resolve('ProductServiceTest');
    //     source = {
    //         number: 'JS-TEST-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    //         name: 'JS-NAME-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    //         active: Boolean(Math.round(Math.random())),
    //         version: Number((Math.random() + 1).toFixed(2)),
    //         description: 'JS-DESCRIPTION-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    //         licensingInfo: 'JS-LICENSING-INFO-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    //         licenseeAutoCreate: Boolean(Math.round(Math.random())),
    //         custom_property: 'MY-CUSTOM-PROPERTY',
    //         discounts:[
    //             {totalPrice}
    //         ]
    //     };
    //     discounts = [
    //         new Nlic.ProductDiscount().setTotalPrice(Math.round((Math.random() + 0.1) * 100)).setCurrency('EUR',)
    //     ];
    //
    //     sourceProduct = new Nlic.Product()
    //         .setProperty('number', source.number)
    //         .setProperty('name', source.name)
    //         .setProperty('active', source.active)
    //         .setProperty('version', source.version)
    //         .setProperty('description', source.description)
    //         .setProperty('licensingInfo', source.licensingInfo)
    //         .setProperty('licenseeAutoCreate', source.licenseeAutoCreate)
    // });
    //
    //
    // it('ProductService.create', function () {
    //     return promise = promise
    //         .then(function () {
    //             return Nlic.ProductService.create(context, sourceProduct);
    //         })
    //         .then(function (product) {
    //             expect(product.getProperty('number')).toBe();
    //             expect(product.getProperty('name')).toBe(source.name);
    //             expect(product.getProperty('active')).toBe(source.active);
    //             expect(product.getProperty('version')).toBe(source.version);
    //             expect(product.getProperty('description')).toBe(source.description);
    //             expect(product.getProperty('licensingInfo')).toBe(source.licensingInfo);
    //             expect(product.getProperty('licenseeAutoCreate')).toBe(source.licenseeAutoCreate);
    //         });
    // });
    //
    // it('ProductService.get', function () {
    //     return promise = promise
    //         .then(function () {
    //             return Nlic.ProductService.get(context, sourceProduct);
    //         })
    //         .then(function (product) {
    //             expect(product.getProperty('number')).toBe();
    //             expect(product.getProperty('name')).toBe(source.name);
    //             expect(product.getProperty('active')).toBe(source.active);
    //             expect(product.getProperty('version')).toBe(source.version);
    //             expect(product.getProperty('description')).toBe(source.description);
    //             expect(product.getProperty('licensingInfo')).toBe(source.licensingInfo);
    //             expect(product.getProperty('licenseeAutoCreate')).toBe(source.licenseeAutoCreate);
    //         });
    // });
    //
    // it('ProductService.delete', function () {
    //     return promise = promise
    //         .then(function () {
    //             return Nlic.ProductService.delete(context, source.number);
    //         })
    //         .then(function (state) {
    //             expect(state).toBe(true);
    //         });
    // });

});