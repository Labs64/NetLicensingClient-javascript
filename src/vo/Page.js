export default (content = [], pageNumber = 0, itemsNumber = 0, totalPages = 0, totalItems = 0) => {
    const paginator = {
        getContent() {
            return content;
        },

        getPageNumber() {
            return pageNumber;
        },

        getItemsNumber() {
            return itemsNumber;
        },

        getTotalPages() {
            return totalPages;
        },

        getTotalItems() {
            return totalItems;
        },

        hasNext() {
            return (totalPages > pageNumber + 1);
        },
    };

    const paginatorKeys = Object.keys(paginator);

    return new Proxy(content, {
        get(target, key) {
            if (paginatorKeys.indexOf(key) !== -1) {
                return paginator[key];
            }
            return target[key];
        },
    });
};
