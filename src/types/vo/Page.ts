/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

export interface Pagination {
  pageNumber: number;
  itemsNumber: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
}

export interface PaginationMethods<T extends object> {
  getContent(this: void): T;

  getPagination(this: void): Pagination;

  getPageNumber(this: void): number;

  getItemsNumber(this: void): number;

  getTotalPages(this: void): number;

  getTotalItems(this: void): number;

  hasNext(this: void): boolean;
}

export type PageInstance<T extends object> = PaginationMethods<T> & T;
