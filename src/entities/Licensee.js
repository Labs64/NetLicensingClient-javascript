/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var Nlic = Nlic || {};

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

Nlic.Licensee = function () {
    Nlic.BaseEntity.apply(this, arguments);

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
    this.__notChangeable('asPropertiesMap');
};

Nlic.Licensee.prototype = Object.create(Nlic.BaseEntity.prototype);
Nlic.Licensee.prototype.constructor = Nlic.Licensee;

Nlic.Licensee.prototype.setNumber = function (number) {
    return this.setProperty('number', number);
};

Nlic.Licensee.prototype.getNumber = function (def) {
    return this.getProperty('number', def);
};

Nlic.Licensee.prototype.setActive = function (active) {
    return this.setProperty('active', active);
};

Nlic.Licensee.prototype.getActive = function (def) {
    return this.getProperty('active', def);
};

Nlic.Licensee.prototype.setName = function (name) {
    return this.setProperty('name', name);
};

Nlic.Licensee.prototype.getName = function (def) {
    return this.getProperty('name', def);
};

Nlic.Licensee.prototype.setLicenseeSecret = function (licenseeSecret) {
    return this.setProperty('licenseeSecret', licenseeSecret);
};

Nlic.Licensee.prototype.getLicenseeSecret = function (def) {
    return this.getProperty('licenseeSecret', def);
};

Nlic.Licensee.prototype.setMarkedForTransfer = function (markedForTransfer) {
    return this.setProperty('markedForTransfer', markedForTransfer);
};

Nlic.Licensee.prototype.getMarkedForTransfer = function (def) {
    return this.getProperty('markedForTransfer', def);
};

Nlic.Licensee.prototype.getInUse = function (def) {
    return this.getProperty('inUse', def);
};