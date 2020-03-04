export function storeData(data) {
    if (dataInStorage()) {
        return getLocalStorageItems();
    } else {
        setLocalStorage(data)
        return getLocalStorageItems();
    }
}

export function dataInStorage() {
    return getLocalStorageItems() ? true : false
}

export function getLocalStorageItems() {
    return localStorage.getItem('books')
}

function setLocalStorage(data) {
    return localStorage.setItem('books', JSON.stringify(data))
}
