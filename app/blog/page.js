import Link from "next/link";
import blogData from "../data/blogData.json"

export default function Blog() {

    const posts = blogData;

    console.log(blogData);
    return (<div>
        {posts.map(post => {
            return (
                <div key={post.id}>

                    <Link href={`/post/${post.id}`}>
                        <p>{post.id}:- {post.title}</p>
                    </Link>
                </div>
            )
        })}
    </div>)
}