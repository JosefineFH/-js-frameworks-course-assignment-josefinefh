import Heading from "../components/Layout/Heading";
import ContactForm from "./ContactForm";

function Contact(){
  return(
    <div className="container">
      <Heading title="Contact Us"/>

      <div className="form">
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact;