import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";


function PostList(props) {
    const [list, setList] = useState([]);
    const { handleFetchData, error } = props;

    useEffect(() => {
        setList(props.list);
    }, [props]);

    return (
        <div className="post-list py-4">
            <button
                className="btn btn-primary"
                onClick={() => {
                    handleFetchData();
                }}
            >
                Get Post List
            </button>
            <div className="post-list">
                {error || list.map((item, index) => (
                    <PostItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default PostList;
