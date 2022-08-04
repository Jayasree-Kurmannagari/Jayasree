import React from "react";
import uuid from 'react-uuid';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "./Work.css"
import { work } from "../../portfolio";

const Work = () => {
    if (!work.length) return null;
    const exp = work.map( (w) => {
    // const mainTech = w.mainTech.map((technology) => (
    //         <Badge pill className="main-badge mr-2 mb-2" key={uuid()}>
    //             { technology }
    //         </Badge>
    //         )
    //         );
        const tech = w.technologies.map((technology) =>  (
                <Badge pill className="experience-badge mr-2 mb-2" key={uuid()}>
                { technology }
                </Badge>
            )
        );
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--exp"
            date={ w.years }
            iconStyle={{
              background: "#23283e",
              color: "#fff",
              textAlign: "center",
              zIndex: 100,
            }}
            icon={ <i className="fa fa-code work__icon experience-icon"/> }
            key={uuid()}
          >
            <div className="work__title" style={ { textAlign: "left", marginBottom: "4px" } }>
               { w.title }
            </div>

            <p
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              { w.description }
            </p>
            {/* <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              { w.company }
            </h4> */}
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    return (
      <section id="work" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h2 className="section__title">
              <span className="text-black" style={{ textAlign: "center" }}>
                Work
              </span>
            </h2>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            { exp }
            <VerticalTimelineElement
              iconStyle={{
                color: "#fff",
                textAlign: "center",
                zIndex: 1,
              }}
              icon={
                <i className="fas fa-hourglass-start work__icon mx-auto experience-icon"/>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
}

export default Work;
