import blogData from "../data/blogData.json"

export default function Blog() {

    const posts = blogData;
    console.log(posts);

    console.log(blogData);
    return (<div>
        {posts.map(post => {
            return <div key={post.id}> {post.title}</div>
        })}
    </div>)
}