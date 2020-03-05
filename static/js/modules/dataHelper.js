export default function cleanData(data) {
    const booksPerCategory = getBooksPerCategory(data)
    const allBooks = mergeCategories(booksPerCategory)
    const randomizedBooks = shuffleList(allBooks);

    return createRenderableObject(randomizedBooks)
}

export function createRenderableObject(data) {
    return { Books: data }
}

export function createResultsObject(data) {
    const obj = Object.entries(data).map(book => {
        return { Topic: book }
    })

    return { Results: obj }
}

function getBooksPerCategory(data) {
    return data.map(category => category.results)
}

function mergeCategories(categories) {
    return [].concat(...categories)
}

function shuffleList(booksList) {
    // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
    return booksList
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
}