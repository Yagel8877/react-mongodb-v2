import NavBar from "./NavBar";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "@nextui-org/react"


//Layout with checking if page is in loading state with react-router v6.4 page that use loader function that needs to be resolve before rendering the page

const Layout = ({children}) => {
    
    const navigation = useNavigation();

    return(
        <>
        <NavBar />
        <main>
        {navigation.state === "loading" && <Loading size="lg" type="points" />}
            {/*for displaying routes*/}
            <Outlet />
            {/* for displaying err page and other children if there is*/}
            {children}
        </main>
        </>
    )

}
export default Layout;