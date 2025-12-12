import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Poll from "../components/Poll";


function events() {
  const headingTitle = "Event Poll and Suggestions";

  return (
    <div className="home">
        <Header title={headingTitle} subtitle="" />

        <section>
            <h2>Quick Poll</h2>
            <Poll />
        </section>

        <div className="contact-page home">
            <ContactForm />
        </div>

        <Footer />
    </div>
  );
}

export default events;
