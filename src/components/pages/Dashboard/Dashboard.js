import React, { useState, Fragment, Suspense, Await } from "react";
import {
  faUserFriends,
  faFile,
  faNetworkWired,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Dashboard.scss";

import { BasicExample } from "./BasicExample";
import CustomHooks from "../CustomHooks/CustomHooks";

const Dashboard = () => {
  const [title, setTitle] = useState("Dashborad");

  return (
    <Fragment>
      <div className="dashboard">
        <h1>{title}</h1>
        <section className="card-container">
          <div className="item">
            <div className="flex-item">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <div className="flex-item">
              <p>Visitors</p>
              <p>1500</p>
            </div>
          </div>
          <div className="item">
            <div className="flex-item">
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
            <div className="flex-item">
              <p>Shares</p>
              <p>12500</p>
            </div>
          </div>
          <div className="item">
            <div className="flex-item">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <div className="flex-item">
              <p>Network</p>
              <p>620</p>
            </div>
          </div>
          <div className="item">
            <div className="flex-item">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="flex-item">
              <p>Files</p>
              <p>676</p>
            </div>
          </div>
        </section>
        <section className="grid">
          <div className="grid-item item1">
            <Card
              title="Simple Card 1"
              style={{ width: "100%", height: "100%" }}
            >
              For more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following: For
              more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following: For
              more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following:
            </Card>
          </div>
          <div className="grid-item item2">
            <Card
              title="Simple Card 2"
              style={{ width: "100%", height: "100%" }}
            >
              For more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following:
            </Card>
          </div>
          <div className="grid-item item3">
            <Card
              title="Simple Card 3"
              style={{ width: "100%", height: "100%" }}
            >
              For more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following:
            </Card>
          </div>
          <div className="grid-item item4">
            <Card
              title="Simple Card 4"
              style={{ width: "100%", height: "100%" }}
            >
              <h2>Custom Hooks Example</h2>
              <CustomHooks />
            </Card>
          </div>
          <div className="grid-item item5">
            <Card
              title="Simple Card 5"
              style={{ width: "100%", height: "100%" }}
            >
              For more straightforward sizing in CSS, we switch the global
              box-sizing value from content-box to border-box. This ensures
              padding does not affect the final computed width of an element,
              but it can cause problems with some third party software like
              Google Maps and Google Custom Search Engine. On the rare occasion
              you need to override it, use something like the following:For more
              straightforward sizing in CSS, we switch the global box-sizing
              value from content-box to border-box. This ensures padding does
              not affect the final computed width of an element, but it can
              cause problems with some third party software like Google Maps and
              Google Custom Search Engine. On the rare occasion you need to
              override it, use something like the following:
            </Card>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
