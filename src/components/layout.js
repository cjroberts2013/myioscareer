import * as React from "react"
import { Link } from "gatsby"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from "./../components/Footer"

import headerLogo from './../images/T1.png'

const navigation = [
  { name: 'Blog', href: '/#home' },
  { name: 'About', href: '/#about' },
]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div id="home" className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-white pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="">
                  <Link to="/#home" className="text-base font-bold text-gray-800">
                    <img 
                      className="h-16 w-auto sm:h-16"
                      src={headerLogo}
                      alt="My iOS Career Logo"
                    />
                  </Link>
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-teal-200 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link to="/#home" className="text-base font-medium text-gray-800 hover:text-gray-300">
                Blog
              </Link>
              <Link to="/#about" className="text-base font-medium text-gray-800 hover:text-gray-300">
                About
              </Link>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="text-base font-bold text-gray-800">
                  <Popover.Button>
                    <Link to="/#home" className="text-base font-bold text-gray-800">
                      My iOS Career
                    </Link>
                  </Popover.Button>
                </div>
                <div className="-mr-2 ">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Popover.Button key={item.name} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-secondary hover:text-white">
                      <Link
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    </Popover.Button>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <main>{children}</main>
    </div>





      {/* <main>{children}</main> */}



      {/* <footer>
        © {new Date().getFullYear()}, My iOS Career
      </footer> */}
       <Footer />
    </div>
  )
}

export default Layout
