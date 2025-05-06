"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation'; 

import { useState } from 'react';
import React from 'react';
import {NavbarSidebar} from './navbar-sidebar';
import {MenuIcon} from 'lucide-react';

interface NavbarItemPropsimport {
   href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
      <Link href={href}>
        <Button
        
          variant="outline"
          className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
            isActive && "bg-black text-white hover:bg-black hover:text-white"
          )}
        >
          {children}
        </Button>
      </Link>
    );
  };
  

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
  
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen]  = useState(true);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white px-6 items-center">
      <Link href="/" className="flex items-center">
        <span className="text-5xl font-semibold">
          funroad
        </span>
      </Link>

      <NavbarSidebar 
       items={navbarItems}
       open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen} 
        />
        
      <div className="items-center gap-4  sm:flex">
        {navbarItems.map((item) => (
          <NavbarItem 
          key={item.href} 
          href={item.href}
           isActive={pathname === item.href} 
            >
              {item.children}
          </NavbarItem>
        ))}
      </div>
       
       <div className="hidden lg:flex">
          <Button
          asChild
          variant="secondary"
          className="border-1 border-t-0 border-b-0 border-r-0 px-12 h-full
          rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
            <Link href="/sign-in">
              Log In
            </Link>
           
          </Button>

          <Button asChild className="border-1 border-t-0 border-b-0 border-r-0 px-12 h-full
          rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg">
            <Link href="/sign-up">
            Start Selling
              
            </Link>
          </Button>
        </div> 
           <div className="flex lg:hidden items-center justify-center">
             <Button
             variant="ghost"
             className="size-12 border-transparent bg-white"
             onClick={() => setIsSidebarOpen(true)}
             >
              <MenuIcon />
             </Button>
           </div>
    </nav>
  );
};
