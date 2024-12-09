import { useState, useEffect } from "react";
import Rubics from "../component/Rubics"
import RightSideBar from "../component/RightSideBar"
import axios from "axios";
import "./Content.css"


const Content = () =>{
    const [data, setData ] = useState(null)
    const [loading, setLoading ] = useState(true)
    const [buisnessDdata, setBusinessData ] = useState(null)
    const [businessLoading, setBusinessLoading ] = useState(true)
    const [travelDdata, setTravelData ] = useState(null)
    const [travelLoading, setTravelLoading ] = useState(true)
    const [foodData, setFoodData ] = useState(null)
    const [FoodLoading, setFoodLoading ] = useState(true)
    
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
                

                if (response.status == 200){
                    setData(response.data);
                    setLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchNews();
    }, [])

    
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
                

                if (response.status == 200){
                    setBusinessData(response.data);
                    setBusinessLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchNews();
    }, [])

    
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
               

                if (response.status == 200){
                    setTravelData(response.data);
                    setTravelLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchNews();
    }, [])
  
  
    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=qIZSGRSilzS2vpL4sQ51BA6WE01pUyGd");
               

                if (response.status == 200){
                    setFoodData(response.data);
                    setFoodLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchNews();
    }, [])

  if(loading){
    return <h1>Loading...</h1>
  }

    return(
        <div className="content-container">
            <Rubics data={data} business={buisnessDdata} travel={travelDdata} food={foodData}/>
            <RightSideBar />
        </div>
    );
};

export default Content;