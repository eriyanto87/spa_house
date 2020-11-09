import React from "react";
import { Link } from "react-router-dom";

export default function Massage(props) {
  return (
    <div>
      <section>
        <h3>Massage</h3>
        <div className="services">
          <h4>Relaxation</h4>
          <p>
            Long, gliding, flowing strokes to calm the mind and body, increase
            circulation, and promote deep relaxation.
          </p>
          <Link to={{ pathname: `/pricing/massage` }}>
            <button>Pricing/Book</button>
          </Link>{" "}
        </div>
        <div className="services">
          <h4>Deep Tissue</h4>
          <p>
            Targeted, firm pressure to reach the deepest layers of muscle,
            fascia, and tendons.
          </p>
          <Link to={{ pathname: `/pricing/massage` }}>
            <button>Pricing</button>
          </Link>{" "}
          <Link to={{ pathname: "/cart" }}>
            <button>Add To Cart</button>
          </Link>
        </div>
        <div className="services">
          <h4>Thai</h4>
          <p>
            Traditional healing system combining acupressure and assisted
            stretching. The recipient wears loose, comfortable clothing. The
            service will be done on a firm mat.{" "}
          </p>
          <Link to={{ pathname: `/pricing/massage` }}>
            <button>Pricing</button>
          </Link>
          <Link to={{ pathname: "/cart" }}>
            <button>Add To Cart</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
