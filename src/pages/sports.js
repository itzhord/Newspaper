import { useState, useEffect } from "react";
import axios from "axios";
import TopMenu from "../hompage/TopMenu";
import ContentBanner from "../hompage/ContentBanner";
import Subscribe from "../hompage/Suscribe";
import Footer from "../hompage/Footer";
import NavRubics from "../component/NavRubics"
import RightSideBar from "../component/RightSideBar";
import "./Nav-Headline.css";

const Sports = () =>{

    const [sports, setSports ] = useState(null)
    const [sportsLoading, setSportsLoading ] = useState(true)


    
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
                

                if (response.status == 200){
                    setSports(response.data);
                    setSportsLoading(false);
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
            <NavRubics bizLoading={sportsLoading} news={sports} />
            <RightSideBar />
        </div>
        <Subscribe />
        <Footer />
        </>
    );
};

export default Sports;