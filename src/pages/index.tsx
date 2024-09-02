import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        Landing
        <div className="flex justify-center gap-3 ">
          <Link href={"/backoffice"}>Backoffice</Link>
          <Link href={"/order"}>Order</Link>
        </div>
      </div>
    </>
  );
}
