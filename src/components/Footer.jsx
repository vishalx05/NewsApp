import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <Wrapper>
        <div className="footer sm:footer-horizontal p-10 gap-10">

          {/* Services */}
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href="#" className="link link-hover">Branding</a>
            <a href="#" className="link link-hover">Design</a>
            <a href="#" className="link link-hover">Marketing</a>
            <a href="#" className="link link-hover">Advertisement</a>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title">Company</h6>
            <a href="/about" className="link link-hover">About Us</a>
            <a href="/contact" className="link link-hover">Contact</a>
            <a href="/careers" className="link link-hover">Jobs</a>
            <a href="/press" className="link link-hover">Press Kit</a>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a href="/terms" className="link link-hover">Terms of Use</a>
            <a href="/privacy" className="link link-hover">Privacy Policy</a>
            <a href="/cookies" className="link link-hover">Cookie Policy</a>
          </nav>

          {/* Newsletter */}
          <form onSubmit={(e) => e.preventDefault()}>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label className="label text-sm text-gray-300">
                Enter your email address
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered join-item text-black"
                  required
                />
                <button className="btn btn-primary join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LKM News. All rights reserved.
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
