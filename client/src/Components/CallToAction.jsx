import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <>
    <div className="flex flex-col gap-8 my-12">
      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
          <p className="text-gray-500 my-2">
            Checkout these resources with 100 JavaScript Projects
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://www.100jsprojects.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              100 JavaScript Projects
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">Master HTML & CSS with ease</h2>
          <p className="text-gray-500 my-2">
            Start your web development journey by following this roadmap.
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://www.linkedin.com/pulse/master-html-css-complete-beginners-roadmap-learning-web-nadeem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML & CSS Roadmap
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">Learn CSS from basics</h2>
          <p className="text-gray-500 my-2">
            Design your website as per your desire now.
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://www.geeksforgeeks.org/learn-css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS Fundamentals
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">Thinking of building skills in React?</h2>
          <p className="text-gray-500 my-2">
            Here are some of the beginner friendly React Projects.
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://github.com/topics/react-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Projects
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--syHI113J--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/agxf0lf3y7p0kqd0d286.png" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">
            Want to learn MERN & become a Full-Stack Developer?
          </h2>
          <p className="text-gray-500 my-2">
            Checkout these resources provided here & start your journey.
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://www.freecodecamp.org/news/mern-stack-roadmap-what-you-need-to-know-to-build-full-stack-apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MERN Roadmap
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2024/01/Copy-of-mern-stack-hotel-booking-website--1-.png" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col p-3">
          <h2 className="text-2xl">
            Need help using Bootstrap?
          </h2>
          <p className="text-gray-500 my-2">
            Get your bootstrap resources and create your interactive and responsive websites.
          </p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Bootstrap
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="https://getbootstrap.com/docs/4.6/assets/img/bootstrap-icons.png" />
        </div>
      </div>
      </div>
    </>
  );
}
