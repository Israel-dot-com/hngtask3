import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
 
export default function Home() {
  return (
    <div className="flex justify-center">
      <Link href="/gallery">
        <div><button>Click here to go to our Gallery</button></div>
      </Link>
      
    </div>
  )
}