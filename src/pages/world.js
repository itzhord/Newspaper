import { useState, useEffect } from "react";
import axios from "axios";
import TopMenu from "../hompage/TopMenu";
import ContentBanner from "../hompage/ContentBanner";
import Subscribe from "../hompage/Suscribe";
import Footer from "../hompage/Footer";
import NavRubics from "../component/NavRubics"
import RightSideBar from "../component/RightSideBar";
import "./Nav-Headline.css";
const World = () =>{

    const [world, setWorld] = useState(null)
    const [worldLoading, setWorldLoading ] = useState(true)


    
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
              

                if (response.status == 200){
                    setWorld(response.data);
                    setWorldLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchNews();
    }, [])




    return(
        <>
        <TopMenu />
        <ContentBanner />
        <div className="Healdline-nav">
            <NavRubics bizLoading={worldLoading} news={world} />
            <RightSideBar />
        </div>
        <Subscribe />
        <Footer />
        </>
    );
};

export default World;