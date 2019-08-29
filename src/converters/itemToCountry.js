import itemToObject from './itemToObject';
import Country from '../entities/Country';

export default (item) => new Country(itemToObject(item));
