import { Item, List } from '@/types/api/response';
import { CastType } from '@/types/utils/cast';
import cast from '@/utils/cast';

export type ItemToObjectCastMap = Record<string, CastType>;

const extractProperties = (properties?: { name: string; value: string }[], castMap: ItemToObjectCastMap = {}) => {
  const result: Record<string, unknown> = {};
  properties?.forEach(({ name, value }) => {
    result[name] = cast(value, castMap[name]);
  });
  return result;
};

const extractLists = (lists?: List[], castMap: ItemToObjectCastMap = {}) => {
  const result: Record<string, unknown[]> = {};

  lists?.forEach((list) => {
    const { name } = list;
    result[name] = result[name] || [];
    result[name].push(itemToObject(list, castMap));
  });
  return result;
};

const itemToObject =
    <T extends object = Record<string, unknown>>(item?: Item | List, castMap: ItemToObjectCastMap = {}): T => {
      return item
          ? ({...extractProperties(item.property, castMap), ...extractLists(item.list, castMap)} as T)
          : ({} as T);
    };


export default itemToObject;
