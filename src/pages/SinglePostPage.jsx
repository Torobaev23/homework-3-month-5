import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
    const [postData, setPostData] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.postId}/comments`)
            .then(res => res.json())
            .then(data => setPostData(data.comments))

    }, [])

    const [postData2, setPostData2] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.postId}`)
            .then(res => res.json())
            .then(data => setPostData2(data))


    }, [])
    console.log(postData2)

    return (
        <div>
            {postData ? (
                <div>
                    {postData.map((item) => (
                        <div>
                            <h1>Post: {postData2.title}</h1>
                            <h2>Comments: {item.body}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default SinglePostPage