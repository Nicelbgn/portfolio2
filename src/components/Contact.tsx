import Input from "./Input";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "../css/contact.scss";

export default function Contact() {
  const inputFields = [
    { type: "text", placeholder: "Votre nom complet", _class: "input-normal" , Name:"user_name" },
    { type: "text", placeholder: "Votre adresse email", _class: "input-normal",Name:"user_email" },
  ];

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_1644vii', 'template_u4zjhzt', form.current, '71XK9UUr5ic8Ff-H9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  };  

  return (
    <section>
      <form  ref={form} onSubmit={sendEmail}>
        <div id="form-container">
          {inputFields.map((inputField, index) => (
            <Input
              key={index}
              type={inputField.type}
              placeholder={inputField.placeholder}
              _class={inputField._class}
              Name={inputField.Name}
            />
          ))}
          <textarea placeholder="Ecrivez votre message" name="message" cols={42} rows={10}></textarea>
          <button>ENVOYER</button>
        </div>
      </form>
    </section>
  );
}
