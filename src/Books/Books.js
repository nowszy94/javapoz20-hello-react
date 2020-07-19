import React, { useState } from 'react';

const useBooks = function () {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = function () {
        setLoading(true);
        fetch('http://localhost:8080/books')
            .then(response => response.json())
            .then(response => {
                setBooks(response);
                setLoading(false);
            });
    };

    return {
        books, loading, fetchData,
    };
};

function BooksList({ books }) {
    return (<ul>
        {books.map(book => <li>{book.id}. {book.name}, {book.description}</li>)}
    </ul>);
}

function BooksForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = function(event) {
        event.preventDefault();

        fetch('http://localhost:8080/books', {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(onSubmit);
    };

    return (<form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="name" />
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="description" />

        <input type="submit" value="submit" />
    </form>)
}

function Books() {
    const { books, loading, fetchData } = useBooks();

    return (<div>
        {!loading && books.length === 0 && <button onClick={fetchData}>Click</button>}
        {!loading && books.length > 0 && <BooksList books={books} />}
        <BooksForm onSubmit={fetchData} />
    </div>);
}


export default Books;
