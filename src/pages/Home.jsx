import AddCats from "./AddCats";
import ViewCats from "./ViewCats";
import News from "./News";

const Home = () => {
    return (
        <div className='page-content'>
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