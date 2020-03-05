import * as store from '../modules/store.js'
import * as results from './results.js'

export const layout = `
    {{#Books}}
    <article class="card" data-id="{{id}}">
        <a>
            <div class="card__front">
                {{#coverimages.1}} <img class="card__image" src="{{coverimages.1}}" alt="{{frabl.key1}}"> {{/coverimages.1}}
                {{^coverimages.1}} <p class="card__image__none"> Geen afbeelding </p> {{/coverimages.1}}

                <div class="chunks">
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                </div>
            </div>

            <div class="card__back">
                <h2>{{frabl.key1}}</h2>
                {{#summaries.0}} <p> {{summaries.0}} </p> {{/summaries.0}}
                {{^summaries.0}} <p> Geen samenvatting </p> {{/summaries.0}}

                <div class="chunks">
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                    <div class="eat-chunk"></div>
                </div>
            </div>
        </a>
    </article>
    {{/Books}}
`

export function handleEvents() {
    handleBookCollector()
    handleDone()
}

function handleBookCollector() {
    const books = document.querySelectorAll('.card')

    books.forEach(book => {
        addBookCollectorListener(book)
    })

}

function addBookCollectorListener(book) {
    book.addEventListener('click', () => {
        const id = book.getAttribute('data-id')
        store.storeChoice(id)
        book.classList.add('trigger-nomnom')
    })
}

function handleDone() {
    const doneButton = document.getElementById('done')

    doneButton.addEventListener('click', () => {
        getChoices();
        toggleView();
    })
}

function getChoices() {
    const choices = store.getLocalStorageChoices()
    results.getResults(choices)
}

function toggleView() {
    const wrapper = document.querySelector('body')
    const carouselView = document.querySelector('main')
    const resultsView = document.querySelector('.results-overview')

    wrapper.classList.toggle('lock-viewport')
    carouselView.classList.toggle('hide-content')
    resultsView.classList.toggle('hide-content')
}