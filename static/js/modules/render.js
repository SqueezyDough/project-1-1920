import { createRenderableObject } from './dataHelper.js'

export function startRender(data) {
    const renderObject = readyCarouselData(data)
    renderTemplate(renderObject)
    automatedCarousel(data)

    console.log(data)
}

function readyCarouselData(data) {
    const CarouselData = takeRandomResultsFromList(data.Books)
    return createRenderableObject(CarouselData)
}

function renderTemplate(data) {
    document.querySelector('.books-overview').innerHTML = ''
    const template = document.querySelector('#booksTemplate').innerHTML;
    const insertContainer = document.querySelector('.books-overview');
    insertContainer.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}


function automatedCarousel(data) {
    setInterval(() => {
        const renderObject = readyCarouselData(data)
        renderTemplate(renderObject)
    }, 25000)
}

function takeRandomResultsFromList(data) {
    let randomResults = [];
    for (let i = 0; i < 5; i++) {
        randomResults.push(data[randomNumberGenerator(data.length)])
    }
    return randomResults;
}

function randomNumberGenerator(maxValue) {
    return Math.floor(Math.random() * maxValue)
}

export { renderTemplate }