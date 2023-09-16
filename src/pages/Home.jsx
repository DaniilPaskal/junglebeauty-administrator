import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='page-background'>
            <ul>
                <li>
                    <Link to='/add-cats'>Add cats</Link>
                </li>
                <li>
                    <Link to='/view-cats'>View cats</Link>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;