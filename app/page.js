import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import SkeletonLoader from "./components/SkeletonLoader";
 
export default function Home() {
  return (
    <div className="flex justify-center">
      <Link href="/gallery">
        <div className="flex justify-center"><button>&darr;Click HERE to go to our Gallery&darr;</button></div>
        <SkeletonLoader />
        <div className="flex justify-center"><button>&uarr;Click HERE to go to our Gallery&uarr;</button></div>
      </Link>
      
    </div>
  )
}