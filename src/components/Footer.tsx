import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center w-full py-2'>
      <span className='text-xs font-semibold'>Designed & Developed by AYOUB EL AAMRI © {new Date().getFullYear()}</span>
    </div>
  )
}
