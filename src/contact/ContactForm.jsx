import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form";
import FormError from "../components/common/FormError";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const message = document.querySelector(".message_container")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {

    setLoginError(null);
    setSubmitting(true);

    message.innerHTML = `<div class="message"><p>Your data has been successfully send to us. </p></div>`

  }

  return (
    <>
      <Form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            {...register("firstname", { required: true, minLength: 3 })}
            type="text"
            placeholder="Enter your first name..."
          />
          {errors.firstname && <FormError>{errors.firstname.message}</FormError>}

          {errors.firstname && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            {...register("lastname", { required: true, minLength: 4 })}
            type="text"
            placeholder="Enter your Last name..."
          />
          {errors.lastname && <FormError>{errors.lastname.message}</FormError>}

          {errors.lastname && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email", { required: true, minLength: 3 })}
            type="email"
            placeholder="Enter your email..."
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}

          {errors.email && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOption">
          <Form.Label>Options</Form.Label>

          <Form.Select aria-label="Default select example"  {...register("option",  { minLength: 1 })}>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          {errors.message && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Message</Form.Label>
          <Form.Control
            {...register("message", { required: true, minLength: 10 })}
            as="textarea"
            placeholder="Enter your message..."
          />
          {errors.message && <FormError>{errors.message.message}</FormError>}

          {errors.message && (
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
        <div className="message_container"></div>
      </section>
    </>
  )
}