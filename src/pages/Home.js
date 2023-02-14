import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from '../context/auth';

const Home=()=>{

    const [auth, setAuth] = useAuth();
    return (
        <>
        <Jumbotron title="Hello World" />
        <pre>{JSON.stringify(auth,null,4)}</pre>
        </>
    )
}

export default Home;