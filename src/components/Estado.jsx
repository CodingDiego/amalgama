/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "../axios/axiosApi"
import "../axios/axiosUsersApi"

/*
Ventajas principales, tiene persistencia, no se pierden los datos entre sesiones porque
estan en localStorage, osea no hay necesidad de refetchear. Y basicamente como se encarga el localStorage
de almacenar los datos no hay necesidad EN ESTE CASO de un overkill como una db.
pero dado el json las ventajas son casi redundantes.
*/


const Estado = () => {
    const [books, setBooks] = useState(null);
    const [users, setUsers] = useState(null);

    const fetchApi = async () => {
        try {
            const response = await axios.get("https://api.org/books");
            console.log(response.data);
            localStorage.setItem('books', JSON.stringify(response.data));
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://api.org/users");
            console.log(response.data);
            localStorage.setItem('users', JSON.stringify(response.data));
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        const storedUsers = localStorage.getItem('users');
        
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        } else {
            fetchApi();
        }

        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            fetchUsers();
        }
    }, []);

    return (
        <>
            <h1>Desafio 2</h1>
            <ul>
                {users && users.map(user => (
                    <li key={user.id}>
                        {user.nickname}: {user.email}
                        <ul>
                            {user.favorite_books.map(book => (
                                <li key={book.id}>
                                    {book.title} by {book.author.name}, favorited at {book.favorited_at}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                {books && books.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Estado
