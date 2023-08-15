// The home page component

import Button from "./components/clientComponent";
import Blog from "./components/server-component"

export default async function Home() {

  const blog = await Blog();

  return (
    <div className="m-10">
      <div className="font-bold">
        <h1>Blog post title: {blog.title}</h1>
      </div>
      <div className="mt-6">
        <h2>Post details: <p>{blog.body}</p></h2>
      </div>
      <div className="mt-2">
        <Button />
      </div>
    </div>
  )
}