import React from "react";

import Button from "elements/Button";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-5 mr-5">
            <BrandIcon />
            <p className="tagline w-75">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy-policy">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms-condition">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="mailto:support@mystaycation.com">
                  support@mystaycation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+622123456789">
                  021 - 2345 - 6789
                </Button>
              </li>
              <li className="list-group-item">
                <span>MyStaycation, Medan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2023 • All rights reserved • MyStaycation.
          </div>
        </div>
      </div>
    </footer>
  );
}
