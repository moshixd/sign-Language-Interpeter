import { useForm } from "react-hook-form";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const Form = ({ onSubmit, header, placeholder }) => {
  // Hooks
  // Destructure.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // errorMessage function / Render Functions.
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is to short (min. 3 characters)</span>;
    }
  })();

  return (
    <>
      <h2>What's your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor={header}>{header}:</label>
          <input
            type="text"
            placeholder={placeholder}
            {...register(header, usernameConfig)}
          />
          {errorMessage}

          <button type="submit">Login</button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
