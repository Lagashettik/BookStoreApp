
export default class DataServices {
    getAllBooks = () => {
        return new Promise(async (resolve, reject) => {
            fetch('http://10.0.2.2:8000/books/')
                .then(responce => responce.json())
                .then(books => resolve(books))
                .catch(error => reject(error))
        })
    }
}