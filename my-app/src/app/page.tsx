
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button"
import { redirect } from "next/navigation";

const isAuth=false;
export default function Home() {
  if(!isAuth){
    redirect('/login')
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       {/* <h1 className="text-4xl roboto-thin text center">Khi em buôn cả thế giới</h1> */}
       {/* <div className="w-[700px] h-[700px] bg-red-600">
          <Image src="/image/cute.avif" alt="suffer" width={200} height={200}/>
       </div> */}
<ul>
  <li>
<Link href={'/login'}>Login</Link>
  </li>
  <li>
<Link href={'/register'}>register</Link>
  </li>
</ul>

<Button/>
      </main>
    </div>
  );
}
