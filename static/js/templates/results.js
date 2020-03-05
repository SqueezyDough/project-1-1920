import * as store from '../modules/store.js'
import { renderResults } from '../modules/render.js'

export const layout = `
    {{#Results}}
        <article>
            {{#Topic.1}}
                <h2>{{TopicName}}</h2>
                <div>
                    {{#Books}}
                        {{#coverimages.1}} <img src="{{coverimages.1}}" alt="{{frabl.key1}}"> {{/coverimages.1}}
                        {{^coverimages.1}} <p class="card__image__none"> Geen afbeelding </p> {{/coverimages.1}}
                    {{/Books}}
                </div>
            {{/Topic.1}}
        </article>
    {{/Results}}
`

export function getResults(choices) {
    const data = JSON.parse(store.getLocalStorageItems());
    const books = findChoices(data, choices)
    const dataByTopic = sortByTopic(books, 'subject-topical')

    renderResults(dataByTopic)
}

function findChoices(data, choices) {
    return data.Books.filter(book => choices.includes(book.id))
}

function sortByTopic(data, property) {
    return data.reduce((acc, obj) => {
        // property value
        let key = {}

        if (obj[property]) {
            key = obj[property][0]
        }

        if (!acc[key]) {
            acc[key] = [];
            acc[key].push({
                TopicName: key,
                Books: []
            })
        }

        acc[key][0].Books.push(obj)

        return acc;
    }, {})
}