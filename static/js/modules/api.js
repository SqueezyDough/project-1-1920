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

async function FetchData(query) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '76f45dfa187d66be5fd6af05573eab04';
    const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
    const detail = 'Default';
    const mediaCarrier = 'jeugd';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&p=${mediaCarrier}`;

    const config = {
        Authorization: `Bearer ${secret}`
    };

    console.log('fetch data...')

    return fetch(url, config)
        .then(checkStatus)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export { FetchData };