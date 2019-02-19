import itemToObject from './itemToObject';
import Licensee from '../entities/Licensee';

export default item => new Licensee(itemToObject(item));
