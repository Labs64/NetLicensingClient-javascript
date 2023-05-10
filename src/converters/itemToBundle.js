import itemToObject from './itemToObject';
import Bundle from '../entities/Bundle';

export default (item) => new Bundle(itemToObject(item));
