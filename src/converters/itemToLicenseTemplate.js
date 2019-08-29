import itemToObject from './itemToObject';
import LicenseTemplate from '../entities/LicenseTemplate';

export default (item) => new LicenseTemplate(itemToObject(item));
