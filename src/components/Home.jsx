import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li><Link to="/dashboard"/></li>
                <li><Link to="login"/></li>
            </ul>
        </>
    )
}

export default Home