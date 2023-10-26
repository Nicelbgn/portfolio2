import Input from "./Input";
import "../css/contact.scss";

export default function Contact() {
  const inputFields = [
    { type: "text", placeholder: "Votre nom complet", _class: "input-normal" },
    { type: "text", placeholder: "Votre adresse email", _class: "input-normal" },
  ];

  return (
    <section>
      <form action="">
        <div id="form-container">
          {inputFields.map((inputField, index) => (
            <Input
              key={index}
              type={inputField.type}
              placeholder={inputField.placeholder}
              _class={inputField._class}
            />
          ))}
          <textarea name="" id="" cols={43} rows={10} placeholder="Ecrivez votre message"></textarea>
          <button>ENVOYER</button>
        </div>
      </form>
    </section>
  );
}
