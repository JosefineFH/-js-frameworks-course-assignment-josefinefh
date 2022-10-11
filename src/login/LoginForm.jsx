import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "../components/common/FormError";
import { BASE_URL, TOKEN_PATH } from "../constants/api/api";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GetFromLocalStorage from "../admin/CheckLogedIn";

const url = BASE_URL + TOKEN_PATH;

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  let history = useNavigate();
  GetFromLocalStorage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data)

    try {
      const response = await axios.post(url, data);
      console.log(response)
      setAuth(response.data);
      history("/admin");
    } catch (error) {
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("username", { required: true, minLength: 3 })}
            type="text"
            placeholder="Enter Username..."
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}

          {errors.username && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            {...register("password", { required: true })}
            type="password"
            placeholder="Password..."
          />
          {errors.password && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <section>
        <div className="message"></div>
      </section>
    </>
  );
}