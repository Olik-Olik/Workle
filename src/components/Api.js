export class Api {
    constructor(arr) {
        this._address = arr.address;
        this._headers = arr.headers;
    }

    getInitialCards() {
        return fetch(this._address + '/cards',
            {
                headers: this._headers,
                method: 'GET',
            })
            .then((response) => this._handleResponse(response));
    }


}