import itemToObject from './itemToObject';
import Token from '../entities/Token';

export default item => new Token(itemToObject(item));
