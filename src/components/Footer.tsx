import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center w-full py-2 pb-3'>
      <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>© Designed & Developed by AYOUB EL AAMRI - {new Date().getFullYear()}</span>
    </div>
  )
}
