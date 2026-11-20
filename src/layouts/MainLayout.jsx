import { Outlet, useLocation } from "react-router";
import Header from "../partials/Header.jsx";
import { useEffect } from "react";

function MainLayout() {

    const {pathname, hash} = useLocation(); // hook che permette di conoscere l'indirizzo corrente

    useEffect(() => {
        if (pathname !== '/' || !hash) return;

        document.getElementById(hash.slice(1)) // rimuove # e prende l'elemento con id ''
        ?.scrollIntoView({behavior: 'smooth'}); // e con scrollintoview scorre fino l'elemento trovato
    },[pathname, hash]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <main className="col-12 col-md-9 min-vh-100 py-4 pt-5 pt-md-4 mt-2 mt-md-0">
                        <Outlet />
                    </main>
                    <Header />
                </div>
            </div>
        </>
    )
}
export default MainLayout