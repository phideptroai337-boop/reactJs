
import Link from "next/link";

export default function RegisterLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <main><div>
    <h1>Khi em buôn cả thể giới, anh mang nụ cưới đến với đời em</h1>
    <div>
      <Link href="/">Home</Link>
    </div>
    {children}</div></main>
  );
}
