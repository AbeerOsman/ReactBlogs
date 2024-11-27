import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFounf = () => {
    return (
        <div className="not-found">
            <h2>SORRY!</h2>
            <p>That page that you are looking for is not yet creating...</p>
            <Link to="/">from here you can go-back to the hoem page</Link>
        </div>
    );
}

export default NotFounf;