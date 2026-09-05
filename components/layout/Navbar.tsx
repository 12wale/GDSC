import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="GDSC Logo" width={40} height={40} className="rounded" />
              <span className="font-bold text-gray-800 text-lg">GDSC Fayoum</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Home</Link>
            <Link href="#events" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Events</Link>
            <Link href="#team" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Team</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Contact</Link>
          </div>

          <div className="flex items-center">
            <Button variant="primary" size="sm">Join Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
