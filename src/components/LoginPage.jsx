import React from 'react'

const LoginPage = () => {

    const handleOnSubmit = (event) => {
        console.log("Routing to Translation Page");
    }

  return (
    <>
    <div>Login Page</div>
    <input type="text" placeholder='UserName' />
    <button onSubmit={handleOnSubmit}> Submit</button>
    </>
  )
}

export default LoginPage