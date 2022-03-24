import React from "react";
import Header from "../../companents/Header/Header";
import BlogEntries from "../../companents/BlogEntries/BlogEntries";
import Sidebar from "../../companents/Sidebar/Sidebar";
import Footer from "../../companents/Footer/Footer";

const Main = () => {
    return(
        <>
            <div className="w3-content" style={{maxWith:"1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <Sidebar/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Main;