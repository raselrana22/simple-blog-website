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
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}
