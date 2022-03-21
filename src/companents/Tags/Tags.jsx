import React from "react";
import {labelTags} from "../../constant";

const Tags = () => {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                {labelTags.map((item) => {
                    return <span className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={{marginRight:"7px"}}>{item.title}</span>
                }
                )}
                </p>
            </div>
        </div>
    )
}

export default Tags;

