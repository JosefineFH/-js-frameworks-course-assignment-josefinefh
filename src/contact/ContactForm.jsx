import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form";
import FormError from "../components/common/FormError";

export default function ContactForm() {
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log(data)
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
            {...register("lastname", { required: true, minLength: 3 })}
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

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Message</Form.Label>
          <Form.Select {...register("option", { required: true})}> 
            <option value="1">Small select</option>
          </Form.Select>
          {errors.message && <FormError>{errors.message.message}</FormError>}

          {errors.message && (
            <div className="error-container">
              <p className="error">This field is required</p>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Message</Form.Label>
          <Form.Control
            {...register("message", { required: true, minLength: 3 })}
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
        <div className="message"></div>
      </section>
    </>
  )
}