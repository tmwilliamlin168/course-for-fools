import Link from 'next/link';

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
    label: "Online Judge",
    url: null,
},
{
    label: "Our Story",
    url: null,
},
];

export default function Header() {
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
            </div>
        </div>
            </div>
            <div className="m-16"></div>
        </>
    );
}