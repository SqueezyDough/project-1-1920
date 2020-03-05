import { storeChoice } from '../modules/store.js'

export const overview = `
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
    //handleDone()
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
        storeChoice(id)
        book.classList.add('trigger-nomnom')
    })
}