import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context'

export const ContactUs = () => {
  var users = [
    {
      id: 1,
      name:"amit"
    },{
      id: 2,
      name:"sumit"
    }
  ]
  const {style} = useContext(AppContext)
  return (
    <div>
        <h1>Contact Us</h1>
        <ul style={style}>
            <li>
                <Link to ="/contactus/manager">MANAGER</Link>
            </li>
            <li>
                <Link to ="/contactus/ceo">CEO</Link>
            </li>
            {/* <li>
              <Link to = "/contactus/director/101">DIRECTOR</Link>
            </li> */}
            {
              users.map((user)=>{
                return <li>
                  <Link to = {`/contactus/director/${user.id}`}>{user.name}</Link>
                </li>
              })
            }
        </ul>
    </div>
  )
}
