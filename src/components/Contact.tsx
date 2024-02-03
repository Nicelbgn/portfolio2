import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../css/contact.scss";
import { motion } from "framer-motion";
import { inputFields } from "../data/InputFields";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_1644vii",
          "template_u4zjhzt",
          form.current,
          "71XK9UUr5ic8Ff-H9"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
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
          <textarea
            placeholder="Ecrivez votre message"
            name="message"
            cols={42}
            rows={10}
          ></textarea>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            ENVOYÉ
          </motion.button>
        </div>
      </form>
    </section>
  );
}
