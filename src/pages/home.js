import "../App.css";
import Header from "../components/Header";
import EventsList from "../components/EventsList";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import homeSlides from "../components/carouselData";

function Home() {
  const headingTitle = "Indy YSA Announcements";

  return (
    <div className="home">
      <Header title={headingTitle} subtitle="" />

        <section className="home-main">
            <div className="home-two-column">
                <div className="home-events-column">
                    <h2>Latest Flyers and News</h2>

                    <div className="events-container">
                        <EventsList />
                    </div>
                    
                </div>
                
                <div className="home-carousel-column">
                    <Carousel items={homeSlides} />
                </div>
                
                
            </div>
        </section>
        <Footer />
    </div>
  );
}

export default Home;
