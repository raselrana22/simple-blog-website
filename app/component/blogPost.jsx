import blogData from "../data/blogData.json";

export default function BlogPost({ postId }) {
  const post = blogData.find((post) => post.id === postId);

  if (!post) {
    return (
      <div>
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className='text-lg font-bold pb-1'>{post.title}</div>
      <p className='py-1 flex justify-center text-justify'>{post.content}</p>
      <p className='py-2'>Date: {post.date}</p>
    </div>
  );
}
