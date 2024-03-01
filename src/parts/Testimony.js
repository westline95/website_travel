import React from "react";
import Fade from "react-reveal/Fade";

import Star from "elements/Star";
import Button from "elements/Button";
import testimonyFrame from "assets/images/frame-2.svg";

export default function Testimony({ data }) {
  return (
    <section className="colored-hero" style={{ paddingTop: "3.2rem" }}>
      <Fade bottom>
        <div
          className="container"
          style={{ paddingTop: "2.5rem", paddingBottom: "3.5rem" }}
        >
          <div className="row align-items-center">
            <div className="col-auto" style={{ marginRight: 85 }}>
              <div
                className="testimonial-hero"
                style={{ margin: "-30px 0 0 30px" }}
              >
                <img
                  src={data.imageUrl}
                  alt="testimonial"
                  className="position-absolute"
                  style={{
                    zIndex: 1,
                    height: "465px",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 150,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                  }}
                />
                <img
                  src={testimonyFrame}
                  alt="testimonial-frame"
                  className=""
                  style={{
                    zIndex: 1,
                    margin: "30px 0 0 -30px",
                    height: "465px",
                  }}
                />
              </div>
            </div>
            <div className="col-6" style={{ marginTop: "-5rem" }}>
              <h4 className="fw-semibold" style={{ marginBottom: 17 }}>
                {data.name}
              </h4>
              <Star value={data.rate} width={37} height={37} spacing={7} />
              <h2 className="lh-base my-3 fw-medium">{data.content}</h2>
              <span className="text-secondary">
                {data.familyName}, {data.familyOccupation}
              </span>

              <div>
                <Button
                  className="btn"
                  style={{ marginTop: 32 }}
                  hasShadow
                  isPrimary
                  type="link"
                  href={`testimonial/${data._id}`}
                >
                  Read Their Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
