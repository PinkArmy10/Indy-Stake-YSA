import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

//import Poll from "../components/Poll";
import Poll from "../components/FirebasePoll";
//import ContactForm from "../components/ContactForm";
import ContactForm from "../components/FirebaseContactForm";


function SeasonalPlans() {
  return (
    <div className="accordion">
      <h2>Current Event Plans</h2>

      <Accordion
        title="Spring"
        content={
          <ul>
            <li>Temple trips and conference watch parties.</li>
            <li>Outdoor service projects and park cleanups.</li>
            <li>Easter-themed FHE activities.</li>
          </ul>
        }
      />

      <Accordion
        title="Summer"
        content={
          <ul>
            <li>Game nights and BBQs at the stake center.</li>
            <li>Hiking and outdoor sports activities.</li>
            <li>Special YSA firesides and devotionals.</li>
          </ul>
        }
      />

      <Accordion
        title="Fall"
        content={
          <ul>
            <li>Bonfires and chili cook-offs.</li>
            <li>Service projects and food drives.</li>
            <li>Thanksgiving gratitude activities.</li>
          </ul>
        }
      />

      <Accordion
        title="Winter"
        content={
          <ul>
            <li>Caroling and hot chocolate nights.</li>
            <li>Temple trips and New Year goals FHE.</li>
            <li>Indoor game nights and movie evenings.</li>
          </ul>
        }
      />
    </div>
  );
}


function events() {
  const headingTitle = "Event Poll and Suggestions";

  return (
    <div className="home">
        <Header title={headingTitle} subtitle="" />

        <section>
            <h2>Quick Poll</h2>
            <Poll />
        </section>

        <div className="accordion">
            <SeasonalPlans />
        </div>

        <div className="contact-page home">
            <ContactForm />
        </div>

        <Footer />
    </div>
  );
}

export default events;
