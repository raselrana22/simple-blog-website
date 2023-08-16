import BlogPost from "@/app/component/blogPost";

export default function Post({ params }) {
    const id = parseInt(params.id);  // post id
    return (
        <div className='px-8 pt-4'>
            <BlogPost postId={id} />
        </div>
    )
}