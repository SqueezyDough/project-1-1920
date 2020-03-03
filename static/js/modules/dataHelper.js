export default function cleanData(data) {
    const books = getBooks(data)

    console.log(books)

    return createRenderableObject(books)
}

function getBooks(data) {
    return data.results
}

function createRenderableObject(data) {
    return { Books: data }
}