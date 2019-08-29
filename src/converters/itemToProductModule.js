import itemToObject from './itemToObject';
import ProductModule from '../entities/ProductModule';

export default (item) => new ProductModule(itemToObject(item));
