import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <img className="abouta" src="images/image-B.jpg" />
        <p className="footer-subscription-heading">ABOUT ME</p>
        <p className="footer-subscription-text">
          Hello! My name is Alex, a full-time Systems/Network Administrator and
          part-time Cryptocurrency Miner/Developer from Oakland California. I am
          fully devoted to all-things related to technology and decentralized
          systems. I first discovered Peer 2 Peer technology when I was 10 years
          old. I removed my first virus at 11 years old, and built my first
          computer at 12 years old. Sometimes, frozen computers start working
          when I stand next to them.
          <br></br>
          <br></br>I like to bring with me, a light-hearted and humourous work
          ethic. I firmly believe in "Work Hard, Play Hard." I work well alone,
          or in a team setting. I am comfortable leading or playing support. If
          there is any slack to pick up; I am usually the first one to pick it
          up. I am very proactive in my approach to problems, but also careful
          from the experience I have gained in the field.
          <br></br>
          <br></br>I am currently contracted out as a systems administrator for
          medium and large sized businesses. A notable company I currently
          support is Fairtrade USA, an international non profit company that
          certifies coffee and other products for fair labor practices. They
          have 200-300 employees around the World. Right now, I am supporting
          them completely remote. I also support Westates Mechanical Corp, an
          architecture company that designs sprinkler solutions. They have 30-40
          users, some remote, mostly in office. Lastly, I support Tax Plus,
          accounting company. They have 6 users.
          <br></br>
          <br></br>A majority of the work I do is onboarding and offboarding
          users, issuing and tracking assets, network security, solving I.T.
          tickets. I achieve this with remote viewing and controlling tools,
          cloud administration and group policy via Azure active directory,
          organized modern inventory tracking with excel and PDQ, Slack for
          direct user communication.
          <br></br>
          <br></br>
          In a world of censorship. It is important to do whatever is neccessary
          to fight for freedom. I have been following WEB3, IPFS, and Ethereum
          Dapp technology for the last 3 years. I cannot stand on the sidelines
          any longer. I completed all Pre-Space Race and Space Race programs. I
          am currently working on the Slingshot Development program, where I
          learned how to make this Web3 resume with React JS and Fleek IPFS
          Webhosting. I want to support the future of the internet.
          <br></br>
          <br></br>
          Contact info:<br></br>
          <br></br> email: alexanderp.dan@gmail.com <br></br>
          <br></br>phone: 510-610-2272<br></br>
          <br></br>
          slack: @APD
        </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Thank you for your time!
            </Link>
          </div>
          <small class="website-rights"></small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to={{
                pathname: "https://www.facebook.com/alexander.p.dan",
              }}
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to={{
                pathname:
                  "https://www.linkedin.com/in/alexander-dan-393b13174/",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>

            <Link
              class="social-icon-link linkedin"
              to={{
                pathname: "https://github.com/apdan510",
              }}
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
