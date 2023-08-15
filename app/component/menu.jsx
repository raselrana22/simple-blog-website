import Link from "next/link";

export default function Menu() {
  return (
    <div className='m-6'>
      <ul className='flex space-x-6'>
        <Link href={"/home"}>
          <li>Home</li>
        </Link>
        <Link href={"/blog"}>
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
}
