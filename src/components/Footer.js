import React from 'react'
import {Link} from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerLogo from './../images/T1.png'


library.add(faLinkedin, faGithub, faInstagram, faTwitter)

export default function Footer() {
    return (
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="pt-16">
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-5 grid gap-4 mb-auto">
                        {/* <p className="text-2xl font-semibold">My iOS Career</p> */}
                        <img
                            className="h-16"
                            src={footerLogo}
                            alt="Company name"
                        />
                        <div>
                            <p>My goal here on My iOS Career is to help other iOS developers learn and grow their own careers. Whether you are just starting your journey or you are a seasoned vet, I hope to provide value and insights on how you can continue growing your skills. Let’s get swifty.</p>
                        </div>
                        <div className="-mx-4">
                            <div className="flex mx-4">
                                <a rel="noreferrer" aria-label="Twitter" href="https://twitter.com/cjrobertstech" className="pr-4 py-2 tert-inverted text-2xl text-gray-600 hover:text-gray-400" target="_blank" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                <a rel="noreferrer" aria-label="Linkedin" href="https://linkedin.com/in/cjrobertstech" className="pr-4 py-2 tert-inverted text-2xl text-gray-600 hover:text-gray-400" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                <a rel="noreferrer" aria-label="Github" href="https://github.com/cjroberts2013" className="pr-4 py-2 tert-inverted text-2xl text-gray-600 hover:text-gray-400" target="_blank" title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                                <a rel="noreferrer" aria-label="Instagram" href="https://instagram.com/cj_roberts" className="pr-4 py-2 tert-inverted text-2xl text-gray-600 hover:text-gray-400" target="_blank" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 grid md:grid-cols-2 gap-4">
                        <div className="md:mx-auto my-4">
                            <p className="mb-6 font-semibold">Quick Links</p>
                            <div className="grid gap-2">
                                {/* <p><Link className="text-gray-600 hover:text-green-500" to="/#home">Home</Link></p> */}
                                <p><Link className="text-gray-600 hover:text-green-500" to="/#home">Blog</Link></p>
                                <p><Link className="text-gray-600 hover:text-green-500" to="/#about">About</Link></p>
                                {/* <p><Link className="text-gray-600 hover:text-green-500" to="/contact" state={{ option: "Professional One-Page Website" }}>Contact</Link></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 mt-16 border-t-2 border-gray-100">
                <p className="text-sm"> &#169; {new Date().getFullYear()} My iOS Career</p>
            </div>
        </div>
    )
}