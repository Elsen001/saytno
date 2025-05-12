'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import icon from './img/FireIcon.svg.png'

const links = [
  { href: '/', label: 'Yeni' },
  { href: '/', label: 'Yeni sdcds sdc' },
  { href: '/', label: 'Yeni sdcdsc' },
  { href: '/', label: 'Yeniasdasdasdas' },
  { href: '/', label: 'Yeniasdasdasdas' },
  { href: '/', label: 'Yeniasdasdasdas' },
]

const Header = () => {
  return (
    <header className="flex gap-2 overflow-x-auto p-2">
      {links.map((link, index) => {
        const isActive = index === 0 // sadece ilk link aktif görünsün

        return (
          <div
            key={index}
            className={`flex items-center justify-center h-10 px-4 rounded-full gap-2 whitespace-nowrap
              ${isActive
                ? 'bg-[linear-gradient(180deg,rgba(92,20,125,1)_0%,rgba(130,27,179,1)_43%,rgba(127,64,214,1)_100%)]'
                : 'bg-gray-500 text-white'}
            `}
          >
            <Link href={link.href}>{link.label}</Link>
            <Image src={icon} alt="" width={12} height={12} />
          </div>
        )
      })}
    </header>
  )
}

export default Header
