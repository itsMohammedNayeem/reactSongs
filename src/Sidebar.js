import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp3.licdn.com/dms/image/C5616AQHq_JrA1k9egw/profile-displaybackgroundimage-shrink_350_1400/0/1517429266390?e=1632355200&v=beta&t=AS2O4IPsv8rzV90wkIPzTdZiijNMFAObkY47rktqTGY"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
          {/* t */}
        </Avatar>
        <h2>
          {/* test */}
          {user.displayName}
        </h2>
        <h4>
          {/* test@gmail.com */}
          {user.email}
        </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,200</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,029</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('hiphop')}
        {recentItem('pop')}
        {recentItem('jazz')}
        {recentItem('rock')}
        {recentItem('blues')}
      </div>
    </div>
  )
}

export default Sidebar
