import { useForm } from 'react-hook-form'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/reused/NavBar'


const LoginPage = ({props, onClick}) => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <>
    <NavBar />
    <LoginForm />
    </>


)
}

export default LoginPage

{/*     
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

        
      </div> */}