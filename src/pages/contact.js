import contacts from "../components/contactData";
import "../App.css";

const Contact = () => {
    return (
        <div className="contact-page home">
        {/* Left: contact cards */}
        <div className="contact-list">
            <h1>Contact us at:</h1>
            <div className="contact-grid">
            {contacts.map((contact, index) => (
                <div key={index} className="contact-card">
                <div className="contact-card-header">
                    <img
                    src={contact.photo}
                    alt={contact.name}
                    className="contact-photo"
                    />
                    <div className="contact-main">
                    <h2 className="contact-name">{contact.name}</h2>
                    <p className="contact-position">{contact.position}</p>
                    </div>
                </div>

                <div className="contact-details">
                    <p><strong>Stake:</strong> {contact.stake}</p>
                    <p><strong>Ward:</strong> {contact.ward}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Right: YSA pages/links */}
      <div className="contact-links">
        <section className="links-section">
          <h2>Indiana YSA&apos;s</h2>
          <ul>
            <li>
                <h3>Bloomington YSA: </h3>
                
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Fin%2Fbloomington-ysa-branch&sa=D&sntz=1&usg=AOvVaw19CNyb6uZB6C0AZ7HjT5p8">
                    Branch Page
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fgroupme.com%2Fjoin_group%2F106756370%2Fc6p4x4Jm&sa=D&sntz=1&usg=AOvVaw3-nJKvyI5tX6XfCVUn2yPi">
                    GroupMe
                </a>
            </li>

            <li>
                <h3>Indianapolis YSA: </h3>
                <a href="https://local.churchofjesuschrist.org/en/units/us/in/indianapolis-ysa-branch">
                    Branch Page
                </a>
                <a href="https://sites.google.com/view/indyysabranch/ysa-contacts?authuser=0">
                    Contacts Page (preferd)
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fgroupme.com%2Fjoin_group%2F110457423%2FmP7P2bwl&sa=D&sntz=1&usg=AOvVaw1Na8cfBLmhVn1gqjPXOiw4">
                    GroupMe
                </a>
            </li>

            <li>
                <h3>Lafayette YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Fin%2Flafayette-ysa-ward&sa=D&sntz=1&usg=AOvVaw1Bf5XAT-FpMp_BvGCKdBo3">
                    Branch Page
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fgroupme.com%2Fjoin_group%2F90134514%2FoZkHLjyq&sa=D&sntz=1&usg=AOvVaw0xmVJSAwHkMtmOQaCWxSeT">
                    GroupMe
                </a>
            </li>

            <li>
                <h3>Michiana  YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Fin%2Fmichiana-ysa-branch&sa=D&sntz=1&usg=AOvVaw14VBYoNmhCL3klKtCP57L-">
                    Branch Page
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1BjnAyEMs6%2F&sa=D&sntz=1&usg=AOvVaw1GgmSTO550jn_0TgaPG5vp">
                    Facebook
                </a>
            </li>

            <li>
                <h3>Muncie YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Fin%2Fmuncie-ysa-branch&sa=D&sntz=1&usg=AOvVaw2G3qdv7eRsuj2rB37FV4YV">
                    Branch Page
                </a>
            </li>

            <li>
                <h3>Fishers YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fgroupme.com%2Fjoin_group%2F100799682%2FeRHW0TgW&sa=D&sntz=1&usg=AOvVaw3EDEtF1LQeeDGKVh_bHhhM">
                    GroupMe
                </a>
            </li>
          </ul>
        </section>

        <section className="links-section">
          <h2>Ohio YSA Pages</h2>
          <ul>
            <li>
                <h3>Cincinnati YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Foh%2Fcincinnati-ysa-ward&sa=D&sntz=1&usg=AOvVaw0ym2bFaIXQEcPKMwrPV5Dp">
                    Branch Page
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1BjnAyEMs6%2F&sa=D&sntz=1&usg=AOvVaw1GgmSTO550jn_0TgaPG5vp">
                    Facebook
                </a>
            </li>

            <li>
                <h3>Dayton YSA: </h3>
                <a href="https://www.google.com/url?q=https%3A%2F%2Flocal.churchofjesuschrist.org%2Fen%2Funits%2Fus%2Foh%2Fdayton-ysa-branch&sa=D&sntz=1&usg=AOvVaw1MZRSJ2hfgWGGiPKX5g26B">
                    Branch Page
                </a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F2252397856%2F%3Fref%3Dshare%26mibextid%3DWaXdOe&sa=D&sntz=1&usg=AOvVaw0CYMsxySJEPgEJPPR9-pax">
                    Facebook
                </a>
            </li>
            {/* ...other Ohio items... */}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Contact;