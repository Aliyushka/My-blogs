import React from "react";
import {popularPosts} from "../../constant";

const PopularPosts = () => {
    return(
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>

                <ul className="w3-ul w3-hoverable w3-white">
                    {popularPosts.map((item) => {
                            return <li className="w3-padding-16">
                                <img src={item.img} alt="Image" className="w3-left w3-margin-right"
                                     style={{width: '50px'}}/>
                                <span className="w3-large">{item.title}</span><br/>
                                <span>{item.titleDesc}</span>
                            </li>
                        }
                    )}
                </ul>
            </div>
            <hr />
        </>

    )
}

export default PopularPosts;