import { FetchData } from './api.js';
import { renderTemplate } from './render.js'
import dataHelper from './dataHelper.js'
import * as store from './store.js'

function handleRoutes() {
    routie({
        '': () => {
            if (store.dataInStorage()) {
                const data = JSON.parse(store.getLocalStorageItems())
                renderTemplate(data)
            } else {
                const queries = ['Voetbal', 'Tennis', 'Korfbal', 'Aarde', 'Planeet', 'Dieren', 'Dinosaurus', 'Anne Frank']

                const books = queries.map(query => FetchData(query))
                Promise.all(books)
                    .then(data => dataHelper(data))
                    .then(data => store.storeData(data))
                    .then(data => renderTemplate(JSON.parse(data)))
            }
        }
    });
}

export { handleRoutes }