import { Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import ContentBanner from "./ContentBanner";
import Subscribe from "./Suscribe";
import Footer from "./Footer";
import Content from "./Content";


const MainPage = () =>{
    return(
        <>
        <TopMenu />
        <ContentBanner />
        <Content />
        <Subscribe />
        <Footer />
        <Outlet /> 
        </>
    )
}

export default MainPage;