/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Netlicensing = Netlicensing || {};

/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 *
 * @constructor
 */

Netlicensing.Licensee = function () {
    Netlicensing.BaseEntity.apply(this, arguments);

    //The attributes that should be cast to native types.
    Object.defineProperty(this, 'casts', {
        value: {
            number: 'string',
            active: 'boolean',
            name: 'string',
            licenseeSecret: 'string',
            markedForTransfer: 'boolean',
            inUse: 'boolean'
        }
    });

    //define default entity properties
    this.__defines(['number', 'active', 'name', 'licenseeSecret', 'markedForTransfer']);
    this.__define('inUse', true);

    //make methods not changeable
    Netlicensing.DefineUtil.notChangeable(this, ['asPropertiesMap']);
};

Netlicensing.Licensee.prototype = Object.create(Netlicensing.BaseEntity.prototype);
Netlicensing.Licensee.prototype.constructor = Netlicensing.Licensee;

Netlicensing.Licensee.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Netlicensing.Licensee.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Netlicensing.Licensee.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Netlicensing.Licensee.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Netlicensing.Licensee.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Netlicensing.Licensee.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Netlicensing.Licensee.prototype.setLicenseeSecret = function (licenseeSecret) {
    return this.setProperty('licenseeSecret', licenseeSecret);
};

Netlicensing.Licensee.prototype.getLicenseeSecret = function (def) {
    return this.getProperty('licenseeSecret', def);
};

Netlicensing.Licensee.prototype.setMarkedForTransfer = function (markedForTransfer) {
    return this.setProperty('markedForTransfer', markedForTransfer);
};

Netlicensing.Licensee.prototype.getMarkedForTransfer = function (def) {
    return this.getProperty('markedForTransfer', def);
};

Netlicensing.Licensee.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};

//make methods not changeable
Netlicensing.DefineUtil.notChangeable(Netlicensing.Licensee.prototype, ['constructor']);

//make methods not enumerable
Netlicensing.DefineUtil.notEnumerable(Netlicensing.Licensee.prototype, [
    'setNumber',
    'getNumber',
    'setActive',
    'getActive',
    'setName',
    'getName',
    'setLicenseeSecret',
    'getLicenseeSecret',
    'setMarkedForTransfer',
    'getMarkedForTransfer',
    'getInUse',
]);