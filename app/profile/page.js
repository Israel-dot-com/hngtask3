import { UserButton, auth } from '@clerk/nextjs';
export default function Profile() {
  return (
    <div className='flex justify-center'>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
