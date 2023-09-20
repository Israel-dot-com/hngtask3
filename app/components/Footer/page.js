import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-600 text-white py-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&#169; {new Date().getFullYear()} <span className="font-bold">Israel</span> for HNGX Task 3</p>
      </div>
    </footer>
  )
}
