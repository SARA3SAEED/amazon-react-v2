import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
        <>
        {/* Main navigation container */}
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
            {/* Hamburger button for mobile view */}
            <button
                className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-twe-collapse-init=""
                data-twe-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* Hamburger icon */}
                <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                    />
                </svg>
                </span>
            </button>
            {/* Collapsible navigation container */}
            <div
                className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-twe-collapse-item=""
            >
                {/* Logo */}
                <Link
                className="mb-4  mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                to="/home"
                >
                <img
                    src="data:image/png;base64,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"
                    style={{ height: '50px', width: '120px' }} className='rounded' />
                </Link>
                {/* Left navigation links */}
                <ul
                className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                data-twe-navbar-nav-ref=""
                >
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref="">
                    {/* Dashboard link */}
                    <Link
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/home"
                    data-twe-nav-link-ref=""
                    >
                    Home
                    </Link>
                </li>
                {/* Team link */}
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref="">
                    <Link
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/"
                    data-twe-nav-link-ref=""
                    >
                    SingUp
                    </Link>
                </li>
                {/* Projects link */}
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref="">
                    <Link
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/log"
                    data-twe-nav-link-ref=""
                    >
                    Login
                    </Link>
                </li>
                </ul>
                {/* Left links */}
            </div>
            {/* Right elements */}
            <div className="relative flex items-center">
                {/* Icon */}
                <Link to="/cart"
                className="me-4 text-neutral-600 dark:text-white" href="#">
                <span className="[&>svg]:w-5">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                </span>
                </Link>
                {/* First dropdown container */}
                <div
                className="relative"
                data-twe-dropdown-ref=""
                data-twe-dropdown-alignment="end"
                >
                {/* First dropdown trigger */}
                <a
                    className="me-4 flex items-center text-neutral-600 dark:text-white"
                    href="#"
                    id="dropdownMenuButton1"
                    role="button"
                    data-twe-dropdown-toggle-ref=""
                    aria-expanded="false"
                >
                    {/* Dropdown trigger icon */}
                    <span className="[&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </span>
                    {/* Notification counter */}
                    <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                    1
                    </span>
                </a>
                {/* First dropdown menu */}
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton1"
                    data-twe-dropdown-menu-ref=""
                >
                    {/* First dropdown menu items */}
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Action
                    </a>
                    </li>
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Another action
                    </a>
                    </li>
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Something else here
                    </a>
                    </li>
                </ul>
                </div>
                {/* Second dropdown container */}
                <div
                className="relative"
                data-twe-dropdown-ref=""
                data-twe-dropdown-alignment="end"
                >
                {/* Second dropdown trigger */}
                <a
                    className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-twe-dropdown-toggle-ref=""
                    aria-expanded="false"
                >
                    {/* User avatar */}
                    <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full"
                    style={{ height: 25, width: 25 }}
                    alt=""
                    loading="lazy"
                    />
                </a>
                {/* Second dropdown menu */}
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton2"
                    data-twe-dropdown-menu-ref=""
                >
                    {/* Second dropdown menu items */}
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Action
                    </a>
                    </li>
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Another action
                    </a>
                    </li>
                    <li>
                    <a
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                        data-twe-dropdown-item-ref=""
                    >
                        Something else here
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            {/* Right elements */}
            </div>
        </nav>
    </>
  )
}
