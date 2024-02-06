import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import Logo from "../assets/logo.png";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-4 border-teal-300 bg-indigo-300"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  className="h-10 me-1 rounded-full"
                  alt="Synergy Logo"
                />
                <span className="self-center text-slate-800 text-2xl whitespace-nowrap dark:text-white font-serif">
                  Synergy
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="text-slate-700 " />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-500"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-500"
                >
                  Synergy
                  <br />
                  Blogs&Books
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-slate-700" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ShreyaSharma03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-500"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-slate-700 dark:text-slate-500"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-slate-700" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-slate-700 dark:text-slate-500"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-slate-700 dark:text-slate-500"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Synergy™"
            year={new Date().getFullYear()}
            className="text-gray-600"
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
            />
            <Footer.Icon
              href="https://github.com/ShreyaSharma03"
              icon={BsGithub}
              className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="text-gray-600 hover:text-gray-900 dark:hover:text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
