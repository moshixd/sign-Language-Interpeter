import React from 'react'

const LoginPage = ({props, onClick}) => {

  return (
    <>
      <div>login page</div>
      <input type="text" placeholder='enter username' />
      <button onClick={onClick}> submit</button>

      <br />
      <br />
      <h1>Current Users in list</h1>
      <div>


        <ul>
          {props.users.map(user => (
          <li className="user" key={user.username}>{user.username}
          <ul>
           {user.translations.map(translation => (
            <li className="translation" key={translation}>{translation}</li>
            ))}
            </ul>
          </li>
          ))}
        </ul>

        
      </div>
    </>
  )
}

export default LoginPage