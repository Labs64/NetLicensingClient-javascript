/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { ItemPagination } from '@/types/api/response';
import { Page as IPage, Pagination, PaginationMethods } from '@/types/vo/Page';

const Page = function <T extends object>(content: T, pagination?: Partial<ItemPagination>) {
  const pageNumber = parseInt(pagination?.pagenumber || '0', 10);
  const itemsNumber = parseInt(pagination?.itemsnumber || '0', 10);
  const totalPages = parseInt(pagination?.totalpages || '0', 10);
  const totalItems = parseInt(pagination?.totalitems || '0', 10);

  const page: PaginationMethods<T> = {
    getContent(): T {
      return content;
    },

    getPagination(): Pagination {
      return {
        pageNumber,
        itemsNumber,
        totalPages,
        totalItems,
        hasNext: totalPages > pageNumber + 1,
      };
    },

    getPageNumber(): number {
      return pageNumber;
    },

    getItemsNumber(): number {
      return itemsNumber;
    },

    getTotalPages(): number {
      return totalPages;
    },

    getTotalItems(): number {
      return totalItems;
    },

    hasNext(): boolean {
      return totalPages > pageNumber + 1;
    },
  };

  return new Proxy(content, {
    get(obj: T, prop: string | symbol, receiver) {
      if (Object.hasOwn(page, prop)) {
        return page[prop as keyof typeof page];
      }

      return Reflect.get(obj, prop, receiver);
    },

    set(obj, prop, value, receiver) {
      return Reflect.set(obj, prop, value, receiver);
    },

    getPrototypeOf() {
      return (Page.prototype as object) || null;
    },
  }) as IPage<T>;
};

export default Page;
