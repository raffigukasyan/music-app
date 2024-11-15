import {Outlet} from "react-router-dom";

const Layout = ():JSX.Element => {
    return (
        <div>
            <header>
                HEADER
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                FOOTER
            </footer>
        </div>
    )
}


export default Layout;