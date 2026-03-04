import { Item, List } from '@/types/api/response';

const cast = (value: string): unknown => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

const extractProperties = (properties?: { name: string; value: string }[]) => {
  const result: Record<string, unknown> = {};
  properties?.forEach(({ name, value }) => {
    result[name] = cast(value);
  });
  return result;
};

const extractLists = (lists?: List[]) => {
  const result: Record<string, unknown[]> = {};

  lists?.forEach((list) => {
    const { name } = list;
    result[name] = result[name] || [];
    result[name].push(itemToObject(list));
  });
  return result;
};

const itemToObject = <T extends object = Record<string, unknown>>(item?: Item | List): T => {
  return item ? ({ ...extractProperties(item.property), ...extractLists(item.list) } as T) : ({} as T);
};

export default itemToObject;
