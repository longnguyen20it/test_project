import React, { Suspense, useEffect, useState } from "react";
import postApi from "../api/postApi";
import Layout from "../../components/layout";
import PostList from "../../components/post/PostList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const handleClickFetchData = () => {
        const fetchPostList = async () => {
            try {
                const response = await postApi.getAll();
                if (response.length > 0) {
                    setData(response);
                }
            } catch (err) {
                setError("Get data had failed");
            }
        };
        fetchPostList();
    };

    return (
        <Layout>
            <h1>Post list:</h1>
            <PostList list={data} handleFetchData={handleClickFetchData} error={error}/>
        </Layout>
    );
}
