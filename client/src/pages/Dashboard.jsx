import React, { useState, useEffect } from 'react'
import DashSidebar from '../Components/DashSidebar'
import DashProfile from '../Components/DashProfile'
import DashPosts from '../Components/DashPosts'
import { useLocation } from "react-router-dom"
import DashUsers from '../Components/DashUsers'
import DashComments from '../Components/DashComments'
import DashComponents from '../Components/DashComponents'

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }

  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === 'profile' && <DashProfile />}
      {/* posts */}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard components */}
      {tab === 'dash' && <DashComponents />}

    </div>
  )
}
