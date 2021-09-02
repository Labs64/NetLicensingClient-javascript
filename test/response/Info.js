export default class info {
    constructor(value, id, type = 'error') {
        this.value = value;
        this.id = id;
        this.type = type;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    getValue() {
        return this.value;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    getId() {
        return this.id;
    }

    setType(type) {
        this.type = type;
        return this;
    }

    getType() {
        return this.type;
    }
}
