import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = () => {
  return (
    <div className="flex flex-col items-center mr-96 justify-center  bg-white px-4 py-3 sm:px-6 rounded-5xl   dark:bg-indigo-950">
      <div className="flex flex-1 justify-between sm:hidden rounded-20">

        <a
          href="#"
          className="relative inline-flex items-center rounded-md  bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700" // Changed background color to light gray
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md  bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700" // Changed background color to light gray
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:z-20 focus:outline-offset-0  hover:text-white bg-gray-200"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:z-20 focus:outline-offset-0  hover:text-white"

            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:z-20 focus:outline-offset-0  hover:text-white"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:z-20 focus:outline-offset-0 md:inline-flex  hover:text-white"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-700 focus:z-20 focus:outline-offset-0  hover:text-white"
            >
              4
            </a>
            <a
              href="#"
              className="relative inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-blue-700 hover:text-white focus:z-20 focus:outline-offset-0"
            >
              5
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-700 hover:text-white focus:z-20 focus:outline-offset-0 bg-gray-200"
            >
              <span className="sr-only bg-gray-300">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Pagination };
