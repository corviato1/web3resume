import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Related Skills and Hobbies
        </p>
        <div className="input-areas"></div>
        <ul>Frequently encountered software in the field:</ul>
        <p>
          Zoom, Microsoft Office 365, Dropbox, Okta, Bluebeam, Ringcentral,
          Bria, Slack, 3dsMax, Autocad, Visual Studio Code, Adobe Suite,
          Salesforce
        </p>
        <br></br>
        <br></br>
      </section>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Systems Administration</h2>
            <Link to="/services">Active Directory and Domains</Link>
            <Link to="/services">Inventory Tracking and Deployment</Link>
            <Link to="/services">Windows, Mac OS, Linux</Link>
            <Link to="/services">Remote Viewing</Link>
            <Link to="/services">Voip Phones and Soft Phones</Link>
            <Link to="/services">Microsoft Office 365</Link>
            <Link to="/services">Filecoin, One drive, Dropbox</Link>
            <Link to="/services">AWS, Azure, GCP, VMs</Link>
            <Link to="/services">Servers and Workstations</Link>
          </div>
          <div class="footer-link-items">
            <h2>Network Administration</h2>
            <Link to="/services">Endpoint Protection</Link>
            <Link to="/services">Packet Sniffing and Capture</Link>
            <Link to="/services">Gateways, Subnets, Network Stack</Link>
            <Link to="/services">VPN and PPTP Tunnels</Link>
            <Link to="/services">Hippa and PCI network compliance</Link>
            <Link to="/services">MFA and Multi Layer Security</Link>
            <Link to="/services">Licensing Scans and Audits</Link>
            <Link to="/services">Anti Ransomware User Training</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Information Technology</h2>
            <Link to="/services">Godlike Patience</Link>
            <Link to="/services">Ticketing Systems</Link>
            <Link to="/services">Customer Service</Link>
            <Link to="/services">Data backups</Link>
            <Link to="/services">Video Conferencing</Link>
            <Link to="/services">Computer Benching, RMA, Repair</Link>
            <Link to="/services">Javascript, Solidity, HTML, CSS</Link>
            <Link to="/services">Helpdesk and Software Support</Link>
            <Link to="/services">Printers and Scanners</Link>
          </div>
          <div class="footer-link-items">
            <h2>Misc Skills</h2>
            <Link to="/services">Multi-Tasking</Link>

            <Link to="/services">Cryptocurrency Mining</Link>
            <Link to="/services">Googling</Link>
            <Link to="/services">Youtubing</Link>
            <Link to="/services">Guitar</Link>
            <Link to="/services">Poker</Link>
            <Link to="/services">Martial Arts</Link>
            <Link to="/services">Cooking</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo"></div>

          <div class="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer2;
