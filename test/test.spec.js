describe('product', function () {
    var person;

    beforeEach(function () {
        person = {name: 'asd'};
    });

    it('should be name "asd"', function () {
        return new Promise(function (s, f) {
            setTimeout(function () {
                s('asd')
            }, 3000);
        }).then(function (name) {
            expect(person.name).toEqual(name);
        });
    });
});