import itemToObject from './itemToObject';
import Product from '../entities/Product';

export default (item) => {
    const object = itemToObject(item);

    const discounts = object.discount;

    delete object.discount;

    const product = new Product(object);
    product.setProductDiscounts(discounts);

    return product;
};
