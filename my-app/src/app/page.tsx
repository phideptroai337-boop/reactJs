import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       {/* <h1 className="text-4xl roboto-thin text center">Khi em buôn cả thế giới</h1> */}
       <div className="w-[700px] h-[700px] bg-red-600">
          <Image src="/image/cute.avif" alt="suffer" width={200} height={200}/>
       </div>
      </main>
    </div>
  );
}
