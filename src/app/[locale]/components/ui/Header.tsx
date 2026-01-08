"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './button';
import { Link } from "@/lib/i18n/routing";
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"

interface MenuItem {
  label: string;
  href: string;
  items?: MenuItem[];
}

const Header = ({ variant }: { variant: "default" | "secondary" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MenuItems: MenuItem[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Services',
      href: '/services',
      items: [
        {
          label: 'Service 1',
          href: '/services/service-1'
        },
        {
          label: 'Service 2',
          href: '/services/service-2'
        }
      ]
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      label: 'Blog',
      href: '/blog',
      items: [
        {
          label: 'Blog 1',
          href: '/blog/blog-1'
        },
        {
          label: 'Blog 2',
          href: '/blog/blog-2'
        },
        {
          label: 'Blog 3',
          href: '/blog/blog-3'
        }
      ]
    },
    {
      label: 'About Us',
      href: '/about-us',
    },
    {
      label: 'Contact',
      href: '/contact-us',
    }
  ]

  return (
    <header className='e-header relative z-[10] pt-[8px] pb-[13px] lg:py-[14px] bg-background/80 backdrop-blur-[15px] lg:min-h-[80px] min-h-[50px] flex items-center justify-center shadow-[0px_17px_70px_rgba(37,75,148,0.07)]'>
      <div className="container grid grid-cols-[1fr_auto] xl:grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Logo */}
        <div className="e-header__logo max-w-[92px] lg:max-w-[20vw]">
          <Link href="/">
            <Image src="/header-logo.svg" alt="Logo" width={162} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="e-header__nav hidden xl:flex justify-center">
          <motion.ul 
            className="flex items-center gap-[12px]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {MenuItems.map((item, index) => (
              <motion.li 
                key={item.label} 
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.items ? (
                  <DesktopDropdown item={item} />
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center text-heading-2 text-secondary px-[10px] py-[6px] font-medium rounded-none hover:text-purple transition-colors border-b border-transparent hover:border-purple"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Actions - Desktop Button + Mobile Menu Toggle */}
        <div className="e-header__actions flex items-center gap-3">
          {/* Desktop CTA Button */}
          <Button size={'lg'} className='rounded-full hidden md:flex text-purple border-solid border-purple hover:text-purple hover:border-purple hover:bg-purple hover:text-white' variant="outline">
            Get a Free Consultation
          </Button>

          {/* Mobile Menu Toggle */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ms-auto p-0 relative"
                aria-label="Toggle menu"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible !w-[20px] !h-[20px]"
                >
                  {/* Top Line - morphs to X diagonal */}
                  <motion.line
                    x1="4"
                    x2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={false}
                    animate={{
                      y1: mobileMenuOpen ? 12 : 6,
                      y2: mobileMenuOpen ? 12 : 6,
                      rotate: mobileMenuOpen ? 45 : 0,
                      pathLength: 1,
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1],
                      pathLength: { duration: 0.3, delay: mobileMenuOpen ? 0.1 : 0 }
                    }}
                    style={{ 
                      transformOrigin: "center",
                      pathLength: 1,
                    }}
                  />
                  
                  {/* Middle Line - fades out with scale */}
                  <motion.line
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={false}
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      scaleX: mobileMenuOpen ? 0 : 1,
                      pathLength: mobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ 
                      duration: 0.2, 
                      ease: "easeInOut",
                      pathLength: { duration: 0.3 }
                    }}
                    style={{ transformOrigin: "center" }}
                  />
                  
                  {/* Bottom Line - morphs to X diagonal */}
                  <motion.line
                    x1="4"
                    x2={mobileMenuOpen ? "20" : "16"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={false}
                    animate={{
                      y1: mobileMenuOpen ? 12 : 18,
                      y2: mobileMenuOpen ? 12 : 18,
                      x2: mobileMenuOpen ? 20 : 16,
                      rotate: mobileMenuOpen ? -45 : 0,
                      pathLength: 1,
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1],
                      pathLength: { duration: 0.3, delay: mobileMenuOpen ? 0.1 : 0 }
                    }}
                    style={{ 
                      transformOrigin: "center",
                      pathLength: 1,
                    }}
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <motion.nav 
                className="mt-8 flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {MenuItems.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {item.items ? (
                      <MobileSubMenu item={item} onLinkClick={() => setMobileMenuOpen(false)} />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-base font-medium hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                {/* Mobile CTA Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Button
                    size="lg"
                    className="rounded-full border-solid text-purple border-purple"
                    variant="outline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Free Consultation
                  </Button>
                </motion.div>
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// Desktop Dropdown Component
function DesktopDropdown({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="inline-flex items-center justify-center gap-1 text-heading-2 text-secondary px-[10px] py-[6px] font-medium rounded-none hover:text-purple transition-colors border-b border-transparent hover:border-purple"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {item.label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="absolute left-0 top-full mt-1 w-48 bg-popover border rounded-md shadow-lg z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {item.items?.map((subItem, index) => (
              <motion.li 
                key={subItem.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={subItem.href}
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors first:rounded-t-md last:rounded-b-md"
                >
                  {subItem.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

// Mobile SubMenu Component
function MobileSubMenu({ item, onLinkClick }: { item: MenuItem; onLinkClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-base font-medium hover:text-primary transition-colors"
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="pl-4 mt-2 space-y-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.items?.map((subItem, index) => (
              <motion.div
                key={subItem.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={subItem.href}
                  onClick={onLinkClick}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {subItem.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default Header;
