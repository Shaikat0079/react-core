import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){
    // console.log(fetchPosts)
    const posts = use(postsPromise)
    return (
        <div>
            <h1>Here are Total {posts.length} posts!</h1>
            {
                posts.map(post=><Post post={post} key={post.id}></Post>)
            }
        </div>
    )
}