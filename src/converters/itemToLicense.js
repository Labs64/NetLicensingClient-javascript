import itemToObject from './itemToObject';
import License from '../entities/License';

export default item => new License(itemToObject(item));
