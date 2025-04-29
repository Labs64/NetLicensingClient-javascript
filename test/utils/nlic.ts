import { Info, Item, ItemPagination, Items, List, NlicResponse } from '@/types/api/response';

const toProperty = (data: Record<string, string | undefined>): { name: string; value: string }[] =>
  Object.entries(data)
    .filter(([, value]) => value)
    .map(([name, value]) => ({ name, value }) as { name: string; value: string });

export const createMockItem = (
  type: string,
  props: Record<string, string | Record<string, string | undefined>[]> = {},
): Item => {
  const property: { name: string; value: string }[] = [];
  const list: List[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (Array.isArray(value)) {
      for (const obj of value) {
        list.push({ name: key, list: [], property: toProperty(obj) });
      }
    } else {
      property.push({ name: key, value });
    }
  }

  return {
    type,
    list,
    property,
  };
};

export const createMockResponse = (
  items: Item[] = [],
  info: Info[] = [],
  pagination: Partial<ItemPagination> = {},
): NlicResponse => {
  const defaultPagination: ItemPagination = {
    pagenumber: null,
    itemsnumber: null,
    totalpages: null,
    totalitems: null,
    hasnext: null,
  };

  const itemsData: Items | null = items.length > 0 ? { item: items, ...defaultPagination, ...pagination } : null;

  return {
    signature: null,
    infos: {
      info: info,
    },
    items: itemsData,
    ttl: null,
  };
};

export const createMockErrorResponse = (infos: Info[]): NlicResponse => {
  return {
    signature: null,
    infos: { info: infos },
    items: null,
    ttl: null,
  };
};
