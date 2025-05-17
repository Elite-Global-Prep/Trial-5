import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LuLoader } from "react-icons/lu";

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchPosts = async () => {
        console.log("fucntion called")
        setLoading(true)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchPosts()
    }, [])
    console.log("posts==========>", posts)
    return (
        <div>
            <h1>All Posts</h1>
            {
                loading ? (
                    <LuLoader style={{ width: '100px', height: '100px' }} />
                ) : (
                    posts.map((post) => (
                        <div key={post.id} style={{ border: "1px solid gray", margin: '10px' }}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}
