import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      className="bg-cover flex flex-col"
      style={{ backgroundImage: "url(../src/assets/aboutbg.png)" }}
    >
      <div className="bg-slate-900 text-center rounded-md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60">
        <div className="text-center mt-8">
          <h2 className="lg:text-4xl text-2xl font-semibold text-white">
            SYNERGY
            <br />
          </h2>
          <span className="lg:text-xl text-white">Blogs&Books</span>
        </div>

        <div className="flex flex-col my-12 bg-slate-900 border border-slate-400 w-[80%] rounded-md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-70 relative lg:items-center mx-auto">
          <div className="p-12 sm:h-[50vh] overflow-hidden overflow-y-scroll">
            <p className="mx-5 mt-5 lg:mx-12 text-center text-gray-300">
              Welcome to Synergy Blogs&Books !! This content management site is
              created by Group 18 as a group project to share their thoughts and
              ideas with the world. We aim to bring out our passionate designing
              and development skills which allows users to write, learn, and get
              inspired from various contents related to technology, coding, and
              everything in between.
              <br />
              <br />
              On this platform, users can find weekly articles and tutorials on
              topics such as web development, software engineering, and
              programming languages. We ensure every user will learn and explore
              new technologies and aspire their specific interests. Hence be
              sure to check back often for any new content !
              <br />
              <br />
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>

          <Link
            to="/search"
            className=" items-center flex justify-center mt-2 mb-10"
          >
            <button
              type="button"
              className="text-blue-500 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Checkout Posts
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2 inline-flex"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>

        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-400" />

        <div className="my-12 mx-auto w-[60%] flex flex-col p-12 bg-gradient-to-tr from-black to-violet-950 border border-teal-500 justify-center items-center rounded-lg text-center">
          <h2 className="lg:text-4xl text-2xl text-center mb-12 text-white">
            Want to imporve your coding skills?
          </h2>
          <img
            src="https://erikbern.com/assets/headshot-small.jpeg"
            className="w-80 rounded-sm border-2 border-teal-500"
          />
          <div className="flex-1 flex-col p-3"></div>
          <h2 className="my-2 text-gray-300">Erik Bernhardsson</h2>
          <p className="mb-5 text-gray-500 text-sm lg:p-8">
            Erik Bernhardsson is an outstanding blogger and coder with a
            programming blog. He discusses topics concerning all coders, such as
            Git repository, IDEs, naming conventions, and Windows support
            problems. You can check out this minimalist, well-written coding
            blog if you’re interested in coding from a business perspective or
            if you want to pick up some short tips for your next project.
          </p>

          <a
            href="https://erikbern.com/"
            className="text-blue-600 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Read now
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180 inline-flex"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
