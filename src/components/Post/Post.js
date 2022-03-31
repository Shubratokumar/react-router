import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {postId} = useParams();
    const [post, setPost]  = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h2>This is post.{postId}</h2>
            <h2>Post No : {post.id}</h2>
            <h3>Title : {post.title}</h3>
            <p>Description : {post.body}</p>
        </div>
    );
};

export default Post;