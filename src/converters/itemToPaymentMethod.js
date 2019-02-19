import itemToObject from './itemToObject';
import PaymentMethod from '../entities/PaymentMethod';

export default item => new PaymentMethod(itemToObject(item));
