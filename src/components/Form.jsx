import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { loginUser } from "../../api/user";
// import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
// import { STORAGE_KEY_USER } from "../../const/storageKeys";

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

  const navigate = useNavigate();

  // Local states
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

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

  // jsx = reacts html.
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
        </fieldset>
        <button type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default Form;
