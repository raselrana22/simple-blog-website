import Link from "next/link";

export default async function Home() {

  return (
    <div className="flex justify-center">
      <Link href={"/home"}>
        <p className='text-3xl font-bold pt-10'>
          <span class='text-pink-500'>Welcome to my</span>
          <span class='text-rose-950'> Blog</span>
        </p>
      </Link>
    </div>
  );
}