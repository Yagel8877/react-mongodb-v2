import Layout from "./Layout";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <Layout >
        <p>Oops, there must've been an error :(</p>
        <Link to='/' className="text-4xl underline text-blue-400 hover:text-5xl">go back to Home Page</Link>
        </Layout>
    
    )
}
export default ErrorPage;