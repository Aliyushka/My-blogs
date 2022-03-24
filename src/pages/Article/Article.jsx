import React from 'react';
import {useParams} from "react-router-dom";

import styles from "./Article.module.css"
import Comments from './Comments';
import {posts, secondPost} from "../../constant"


const Article = () => {
    const params = useParams();
    const postId = parseInt(params.id);
    const postData = posts.find((item) => {
        return item.id === postId;
    })


    return (
        <div className={styles.main}>
            <div className={styles.container}>{
                secondPost.map ((item,index) => {
                    return <>
                    <img src={item.img} alt=""/>
                    <p>{item.fioDate}</p>
                    </>
                })
            }
            </div>
            <h1>{postData.title}</h1>{
            secondPost.map((item, index) => {
                return <>
                    <p>{item.text}</p>
                </>
            })
        }
            <img src={postData.imageUrl}/> <br/>
            <p>{postData.desc}</p> <br/> <br/>
            <Comments/>
        </div>
    );
};

export default Article;