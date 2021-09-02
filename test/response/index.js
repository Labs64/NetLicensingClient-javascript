import _castArray from 'lodash/castArray';
import Item from './Item';
import Info from './Info';

export default class Response {
    constructor(data = []) {
        this.id = null;
        this.ttl = null;
        this.items = {
            item: [],
            pagenumber: null,
            itemsnumber: null,
            totalpages: null,
            totalitems: null,
            hasnext: null,
        };
        this.infos = { info: [] };

        _castArray(data).forEach((v) => {
            if (v instanceof Item) {
                this.items.item.push(v);
            } else if (v instanceof Info) {
                this.infos.info.push(v);
            }
        });

        this.setPage();
    }

    addItem(item) {
        if (!(item instanceof Item)) {
            throw new Error('Expected item to be an instance of the "Item"');
        }

        this.items.item.push(item);

        const page = this.items.pagenumber;
        const perPage = this.items.totalitems / this.items.totalpages;
        const totalItems = this.items.totalitems;

        this.setPage(page, perPage, totalItems);

        return this;
    }

    addInfo(info) {
        if (!(info instanceof Info)) {
            throw new Error('Expected info to be an instance of the "Info"');
        }

        this.infos.info.push(info);

        return this;
    }

    setTTL(ttl) {
        this.ttl = ttl;
    }

    setPage(page = 0, perPage = 100, totalItems = this.items.item.length) {
        this.items.pagenumber = page;
        this.items.itemsnumber = this.items.item.length;
        this.items.totalpages = Math.ceil(totalItems / perPage);
        this.items.totalitems = totalItems;
        this.items.hasnext = this.items.totalpages > this.items.pagenumber + 1;
        return this;
    }
}
