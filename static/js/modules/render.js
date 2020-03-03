// id: render item, no id: render collection

function renderTemplate(data, name) {
    // TODO: details view
    name ? renderCard(data, name) : renderCollection(data);
}

function renderCollection(data) {
    const template = document.querySelector('#booksTemplate').innerHTML;
    const insertContainer = document.querySelector('.books-overview');

    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}

function renderCard(data, name) {
    // TODO: details view
}

export { renderTemplate }