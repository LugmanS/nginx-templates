import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h4>Nginx-Vite</h4>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
            </ul>
        </div>
    );
};
export default Home;