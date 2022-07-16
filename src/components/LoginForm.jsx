import React from 'react';
import { useForm } from 'react-hook-form';

// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('firstName', { required: true})} />
//       {errors.userName && <p>Username is required.</p>}
//       <input type="submit" />
//     </form>
//   );
// }
// export default LoginForm


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <>
    <h2>What's your name?</h2>
    <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" {...register("username") } />
        </fieldset>
        
    </form>
    </>
  )
}

export default LoginForm