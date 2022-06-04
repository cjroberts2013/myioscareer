import * as React from 'react'
import {Link} from 'gatsby'
import heroimg from './../images/website-image-1.png'

export default function Hero() {
  return (
        <div className="pt-10 bg-white sm:pt-10 lg:pt-8 lg:pb-10 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-800 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">My iOS Career</span>
                    {/* <span className="block text-tertiary">that get Results</span> */}
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  My goal here on My iOS Career is to help other iOS developers learn and grow their own careers. Whether you are just starting your journey or you are a seasoned vet, I hope to provide value and insights on how you can continue growing your skills. Let’s get swifty.
                  </p>
                  {/* <div className="mt-10 sm:mt-12">
                    <Link
                      to="/contact"
                      state={{ option: "" }}
                      className="py-3 px-4 rounded-md shadow bg-secondary text-white font-medium hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary hover:ring-offset-white"
                    >
                      Get in touch
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="mt-12 mb-16 sm:mb-20 lg:m-12 lg:relative">
                <div className="mx-auto my-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={heroimg}
                    alt="Illustration of designing a webpage."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}