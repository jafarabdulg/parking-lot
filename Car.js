class Car{
    constructor(noPol, owner) {
        this._noPol = noPol;
        this._owner = owner;
    }

    get noPol() {
        return this._noPol;
    }

    set noPol(value) {
        this._noPol = value;
    }

    get owner() {
        return this._owner;
    }

    set owner(value) {
        this._owner = value;
    }
}

export default Car;