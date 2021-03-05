import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import postApi from "../api/postApi";
import Layout from '../../components/layout'

const PostId = (props) => {
    const { query } = useRouter();
    const [postId, setPostId] = useState(query.postId);
    const [post, setPost] = useState([]);

    useEffect(() => {
        setPostId(query.postId);
    }, [query]);
    useEffect(() => {
        if (postId) {
            const fetchPostById = async () => {
                try {
                    const response = await postApi.get(postId);
                    console.log(response);
                    if (response) {
                        setPost(response);
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            fetchPostById();
        }
    }, [postId]);

    return (
        <Layout>
            <h1>{post.title}</h1>
            <div className="thumb">
                <img src={post.imageUrl} alt={post.title} className="img-fluid"/>
            </div>
            <div className="summary">
                <p>
                    {post.summary}
                </p>
            </div>
        </Layout>
    );
};

export default PostId;
