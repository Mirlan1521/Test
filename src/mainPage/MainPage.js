import React,{useState} from "react";



function MainPage (){
    const [news, setNews] = useState("old news");


    function changeNews(e){
        e.preventDefault();
        setNews("new news")

    }
    return (
        <div>
            MainPge - {news}
            <div>
                <button onClick={changeNews}>Change News</button>
                <div>tests </div>
            </div>
        </div>

    )
}

export default MainPage;