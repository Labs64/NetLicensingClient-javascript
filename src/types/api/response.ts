export interface Info {
  id: string;
  type: 'ERROR' | 'WARNING' | 'INFO';
  value: string;
}

export interface List {
  property: { value: string; name: string }[];
  list: List[];
  name: string;
}

export interface Item {
  property: { value: string; name: string }[];
  list: List[];
  type: string;
}

export interface ItemPagination {
  pagenumber: string | null;
  itemsnumber: string | null;
  totalpages: string | null;
  totalitems: string | null;
  hasnext: string | null;
}

export type Items = { item: Item[] } & ItemPagination;

export interface NlicResponse {
  signature: null | string;

  infos: {
    info: Info[];
  };

  items: Items | null;

  ttl: string | null;
}
