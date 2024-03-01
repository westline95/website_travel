import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((el, idx1) => {
    return (
      <section
        className="container"
        key={`cateogry-${idx1 + 1}`}
        style={{ marginTop: "5rem" }}
      >
        <Fade bottom>
          <h4 className="mb-4 fw-semibold text-black">{el.name}</h4>
          <div className="container-grid">
            {el.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property in this category.
                </div>
              </div>
            ) : (
              el.items.map((item, idx2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${idx1 + 1}-item-${idx2 + 1}`}
                  >
                    <Fade bottom delay={300 * idx2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag fs-5">
                            <span className="tag-label">Popular</span>
                            <span className="fw-normal"> Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 193 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/details/${item._id}`}
                            className="stretched-link d-blocktext-white text-decoration-none"
                          ></Button>
                          <h5 className="text-black fw-medium">{item.name}</h5>
                          <span className="text-secondary">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
