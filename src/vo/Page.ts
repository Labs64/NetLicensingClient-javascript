/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import { ItemPagination } from '@/types/api/response';
import { PageInstance, Pagination, PaginationMethods } from '@/types/vo/Page';

const Page = function <T extends object>(content: T, pagination?: Partial<ItemPagination>) {
  const pageNumber = parseInt(pagination?.pagenumber || '0', 10);
  const itemsNumber = parseInt(pagination?.itemsnumber || '0', 10);
  const totalPages = parseInt(pagination?.totalpages || '0', 10);
  const totalItems = parseInt(pagination?.totalitems || '0', 10);

  const page: PaginationMethods<T> = {
    getContent(this: void): T {
      return content;
    },

    getPagination(this: void): Pagination {
      return {
        pageNumber,
        itemsNumber,
        totalPages,
        totalItems,
        hasNext: totalPages > pageNumber + 1,
      };
    },

    getPageNumber(this: void): number {
      return pageNumber;
    },

    getItemsNumber(this: void): number {
      return itemsNumber;
    },

    getTotalPages(this: void): number {
      return totalPages;
    },

    getTotalItems(this: void): number {
      return totalItems;
    },

    hasNext(this: void): boolean {
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
  }) as PageInstance<T>;
};

export default Page;
