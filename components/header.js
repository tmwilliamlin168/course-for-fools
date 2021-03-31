import Link from 'next/link';

const internalLinks = [
{
    label: "Link1",
    url: "/link1",
},
{
    label: "Link2",
    url: "/link2",
},
];

export default function Header() {
    return (
        <div className="bg-white shadow fixed inset-x-0 top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center text-xl font-bold"
            >
              Logo
            </Link>
            <div className="hidden sm:ml-8 sm:flex space-x-8">
              <a
                href="https://course.williamlin.io/"
                target="_blank"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Course
              </a>
              {internalLinks.map(link => (
                <Link
                  href={link.url}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}