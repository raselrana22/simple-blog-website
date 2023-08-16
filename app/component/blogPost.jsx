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
      <div>{post.title}</div>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}
