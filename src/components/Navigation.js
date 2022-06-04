import * as React from 'react'
import {Link} from 'gatsby'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Hero from './Hero'
import Contact from './Contact'

const navigation = [
  { name: 'Pricing', href: '/#pricing' },
  { name: 'About', href: '/#about' },
  { name: 'Contact Us', href: '/contact' }
]

export default function Navigation({page, option}) {
  return (
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
                    Charles Roberts Design
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
              <Link to="/#pricing" className="text-base font-medium text-gray-800 hover:text-gray-300">
                Pricing
              </Link>
              <Link to="/#about" className="text-base font-medium text-gray-800 hover:text-gray-300">
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
              >
                Contact Us
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
                      Charles Roberts Design
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

      {/* Render hero or hero2 depending on which page is active */}
      {page === "Hero" ? <Hero /> : <Contact option={option}/>}
    </div>
  )
}