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
  getContent(): T;

  getPagination(): Pagination;

  getPageNumber(): number;

  getItemsNumber(): number;

  getTotalPages(): number;

  getTotalItems(): number;

  hasNext(): boolean;
}

export type PageInstance<T extends object> = PaginationMethods<T> & T;
