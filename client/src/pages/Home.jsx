import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='bg-cover flex flex-col' style={{ 'backgroundImage': 'url(../src/assets/bg.png)' }} >
        <div className='bg-slate-900 text-center rounded-md px-8 py-16 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60'>

          <h1 className='text-white text-5xl lg:text-7xl leading-snug font-bold mb-5 '>Welcome to Our Blog</h1>
          <p className='text-gray-300 lg:w-3/5 mx-auto mb-5'>
            Start your journey today & join a community of passionate readers and thinkers. Here you'll find a variety of articles and tutorials on topics such as
            web development, software engineering, and programming languages.
          </p>
          <div>
            <Link to='/about' className='text-white font-medium hover:text-green-400 inline-flex items-center py-1'>
              Learn More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </Link>
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500"/>

      <div className=' flex flex-col '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col p-20 py-7 gap-6 w-full bg-gradient-to-tr from-black to-violet-950'>
            <h2 className=' mt-10 my-5 text-4xl font-semibold text-center text-white text-decoration-line: underline'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline mt-5 mb-10 inline-flex self-center'
            >
              View all posts
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2 self-center"
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
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}