//The server side component

export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!res.ok) {
    throw new Error("There was an error");
  }

  return res.json();
}
