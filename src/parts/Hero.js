import React from "react";
import Button from "elements/Button";
import NumberFormatter from "utils/numberFormatter";

import HeroImg from "assets/images/hero-img.jpg";
import HeroFrame from "assets/images/frame-1.svg";
import UserIcon from "assets/images/icon/Vector-1.svg";
import CityIcon from "assets/images/icon/Vector.svg";
import MapIcon from "assets/images/icon/tabler_map-pin.svg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-5 mt-5" style={{ marginBottom: "5rem" }}>
      <div className="row align-items-center justify-content-between">
        <div className="col-auto pr-5" style={{ width: 550 }}>
          <h1
            className="mb-4 text-primary"
            style={{ fontWeight: 900, lineHeight: 1.4 }}
          >
            Forget Busy Work, <br />
            Start Your Next Vacation
          </h1>
          <p
            className="lh-base w-80 text-secondary"
            style={{ fontSize: "18px", marginBottom: "2.5rem" }}
          >
            We provide what you need to enjoy your holiday with family. <br />
            Time to make another memorable moments. Your money can return but
            your time is not.
          </p>
          <Button
            className="btn btn-shadow mb-3"
            isPrimary
            hasShadow
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 25 }}>
              <img
                width="36"
                height="36"
                src={UserIcon}
                alt={`${props.data.travelers} travelers`}
              />
              <h5 className="fw-bold text-secondary mt-2">
                {NumberFormatter(props.data.travelers)}
                <span className="fw-normal text-secondary"> travelers</span>
              </h5>
            </div>
            <div className="col-auto" style={{ marginRight: 25 }}>
              <img
                width="36"
                height="36"
                src={CityIcon}
                alt={`${props.data.cities} cities`}
              />
              <h5 className="fw-bold text-secondary mt-2">
                {NumberFormatter(props.data.cities)}
                <span className="fw-normal text-secondary"> cities</span>
              </h5>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={MapIcon}
                alt={`${props.data.treasures} treasures`}
              />
              <h5 className="fw-bold text-secondary mt-2">
                {NumberFormatter(props.data.treasures)}
                <span className="fw-normal text-secondary"> treasures</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5 position-relative">
          <div style={{ height: 435 }}>
            <img
              src={HeroImg}
              className="img-fluid position-absolute"
              alt="main pict"
              style={{
                margin: "-30px 0 0 -7px",
                zIndex: 1,
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "5%",
                borderBottomLeftRadius: "5%",
                borderBottomRightRadius: "5%",
                height: "100%",
              }}
            />
            <img
              src={HeroFrame}
              className="img-fluid"
              alt="frame"
              style={{
                margin: "0 0 -30px 0",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
