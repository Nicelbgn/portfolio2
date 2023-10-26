import Input from "./Input";
import "../css/contact.scss"

export default function Contact() {
  return (
    <section>
      <form action="">
        <div id="form-container">
            <Input type="text" placeholder="Votre nom complet" _class="input-normal"/>
            <Input type="text" placeholder="Votre nom complet" _class="input-normal"/>
            <Input type="text" placeholder="Votre nom complet" _class="input-area"/>
            <button>ENVOYER</button>
        </div>
      </form>
    </section>
  );
}
