import itemToObject from './itemToObject';
import Notification from '../entities/Notification';

export default (item) => new Notification(itemToObject(item));
