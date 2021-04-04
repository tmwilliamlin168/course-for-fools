import {useState} from 'react';

import Link from 'next/link';

//online judge and our story fake links were there before
const internalLinks = [
{
    label: "Pre-Register",
    url: "/register",
},
{
    label: "Contact",
    url: "mailto:course@williamlin.io",
},
{
    label: "Our Story",
    url: '/story',
},
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-white shadow fixed inset-x-0 top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link href="/">
                                <a className="bg-clip-text text-transparent flex-shrink-0 inline-flex items-center text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-600">
                                    Zero to Hero
                                </a>
                            </Link>
                            <div className="hidden sm:ml-8 sm:flex space-x-8">
                            {internalLinks.map(link => (
                                link.url ? 
                                    <Link
                                        href={link.url}
                                        key={link.label}
                                    >
                                        <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                            {link.label}
                                        </a>
                                    </Link>
                                :
                                    <a
                                        key={link.label}
                                        className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                        title="Coming soon!"
                                    >
                                        {link.label}
                                    </a>
                            ))}
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            aria-label="Main menu"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                            >
                            {!isOpen && (
                                <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                            )}

                            {isOpen && (
                                <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={(isOpen ? "block" : "hidden") + " sm:hidden"}>
                    <div className="pt-2 pb-3 space-y-1">
                    {internalLinks.map(link => (
                        <Link
                            href={link.url}
                            key={link.label}
                        >
                            <a className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                                {link.label}
                            </a>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
            <div className="m-16"></div>
        </>
    );
}