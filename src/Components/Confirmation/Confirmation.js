import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Confirmation() {
  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        const latestUserIndex = context.users.length - 1;
        console.log(context.users[latestUserIndex].user_name, "name");
        return (
          <div>
            <Nav />
            <section>
              <h3> {context.users[latestUserIndex].user_name}, </h3>
              <p>
                Your appoinment is set at {context.displayTime} on{" "}
                {context.displayDate}
              </p>
              {/* <h3>How To Prep For Your Appointment</h3>
              <h4>Massage</h4>
              <h4>Lash</h4>
              <h4>Nails</h4>
              <h4>Skin</h4> */}
            </section>
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
