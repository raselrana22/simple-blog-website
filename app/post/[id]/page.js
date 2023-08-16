import BlogPost from "@/app/component/blogPost";
import blogData from "/app/data/blogData.json"

export default function Post({ params }) {
    const id = parseInt(params.id);  // post id
    return (
        <div className='px-8 pt-4'>
            <BlogPost postId={id} />
        </div>
    )
}

// // Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
    const posts = await blogData;

    return posts.map((post) => ({
        id: "" + post.id,
    }))
}
