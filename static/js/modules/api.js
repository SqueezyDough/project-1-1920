// source: https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

async function FetchData() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'planeet';
    const key = 'cdb8415c172ec6178b63451e222891a6';
    const secret = '31978bcbb4e5eb7239f01c180e2f07b1';
    const detail = 'Default';
    const mediaCarrier = 'jeugd';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&p=${mediaCarrier}`;

    const config = {
    Authorization: `Bearer ${secret}`
    };

    return fetch(url, config)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export { FetchData };