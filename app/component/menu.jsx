import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div
      className='flex justify-between 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6'
    >
      <ul className='flex space-x-6 p-3 text-xl'>
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
