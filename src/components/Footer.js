import React from "react";

function Footer({
  year = new Date().getFullYear(),
  siteName = "Indy YSA",
  links = [],
}) {
  return (
    <footer className="footer">
      <p>
        Disclaimer: Not an official church-sponsored product. © {year} {siteName}
      </p>
    </footer>
  );
}

export default Footer;
