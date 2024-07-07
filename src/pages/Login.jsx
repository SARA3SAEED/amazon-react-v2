import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const navigate =useNavigate();


  // useEffect(()=>{
  //   fetchUser();
  // },[]);

  const fetchUser = async (event)=>{
    event.preventDefault();

    try{
    const response = await axios.get(`https://668a9a912c68eaf3211d458f.mockapi.io/user`);
    const user = response.data.find((user) => user.email === email && user.password === password);
    console.log('Get user:', user);

    if(user){
      console.log(user.id)
      localStorage.setItem('userId', user.id);
      navigate('/home')
    }
  } catch (error) {
    console.log(error)
  }
  }


  return (
    <>
      <section className="h-screen">
  <div className="h-full">
    {/* Left column container with background*/}
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
      <img
                    src="data:image/png;base64,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"
                    style={{ height: '450px', width: '450px' }} className='ml-20 rounded' />
      </div>
      {/* Right column container */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={fetchUser}>
          {/*Sign in section*/}
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 me-4 text-lg">Sign in with</p>
            {/* Facebook */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* Facebook */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </button>
            {/* X */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* X */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </button>
            {/* Linkedin */}
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              {/* Linkedin */}
              <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </button>
          </div>
          {/* Separator between social media sign in and email/password sign in */}
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>
          {/* Email input */}
          <div className="relative mb-6" data-twe-input-wrapper-init="">
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address"
              value= {email}
              onChange={e => setEmail(e.target.value)}
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="relative mb-6" data-twe-input-wrapper-init="">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password"
              value= {password}
              onChange={e => setPassword(e.target.value)}
            />
            <label
              htmlFor="exampleFormControlInput22"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          <div className="mb-6 flex items-center justify-between">
            {/* Remember me checkbox */}
            <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                defaultValue=""
                id="exampleCheck2"
              />
              <label
                className="inline-block ps-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            {/*Forgot password link*/}
            <a href="#!">Forgot password?</a>
          </div>
          {/* Login button */}
          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
            >
              Login
            </button>
            {/* Register link */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?
              <a
                href="#!"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
