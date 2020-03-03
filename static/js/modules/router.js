import { FetchData } from './api.js';
import { renderTemplate } from './render.js'
import dataHelper from './dataHelper.js'
// import { loader } from './loader.js';

function handleRoutes() {
    routie({
        '/':
            FetchData()
                .then(data => dataHelper(data))
                .then(data => renderTemplate(data))
    });
}

export { handleRoutes };