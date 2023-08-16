import Link from "next/link";
import blogData from "../data/blogData.json"

export default function Blog() {
    const posts = blogData;

    return (
        <div className='px-8 pt-3'>
            <label className='font-bold px-1'>Blog Titles: </label>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <div className='text-lg p-1 mx-8 hover:scale-95'>
                            <Link href={`/post/${post.id}`}>
                                <p>{post.id}:- {post.title}</p>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}