// import _each from 'lodash/each';
// import _castArray from 'lodash/castArray';
// import _isArray from 'lodash/isArray';
// import _isPlainObject from 'lodash/isPlainObject';
// import _isEmpty from 'lodash/isEmpty';
//
// const convertToItem = (item, handler = { property: [], list: [] }) => {
//     if (_isArray(item) || _isPlainObject(item)) {
//         _each(item, (value, name) => {
//             if (_isArray(value)) {
//                 _each(value, (v) => {
//                     const list = { property: [], list: [], name };
//                     handler.list.push(list);
//                     convertToItem(v, list);
//                 });
//                 return;
//             }
//
//             const property = { value, name };
//             handler.property.push(property);
//         });
//     }
//
//     return handler;
// };
//
// export default (queryParams, page = 0, perPage = 100) => {
//     const template = {
//         items: {
//             item: [],
//             pagenumber: null,
//             itemsnumber: null,
//             totalpages: null,
//             totalitems: null,
//             hasnext: null,
//         },
//     };
//
//     const items = _castArray(queryParams);
//
//     if (!_isEmpty(items)) {
//         const lowPageRange = page * perPage;
//         const highPageRange = (page + 1) * perPage;
//
//         for (let i = lowPageRange; i < highPageRange; i += 1) {
//             if (items[i]) {
//                 template.items.item.push(convertToItem(items[i]));
//             }
//         }
//     }
//
//     template.items.pagenumber = page;
//     template.items.itemsnumber = template.items.item.length;
//     template.items.totalpages = Math.ceil(items.length / perPage);
//     template.items.totalitems = items.length;
//     template.items.hasnext = template.items.totalpages > template.items.pagenumber + 1;
//
//     return template;
// };
