import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  const handleGeneratePlan = () => {
    window.location.href = "https://form.typeform.com/to/FEfjs9eo"
  }

  return (
    <section className="about">
      <div className="container flex">
        {about.map((val, i) => (
          <React.Fragment key={i}>
            <div className="left" data-aos="fade-down-right">
              <img src={val.cover} alt="" />
            </div>
            <div className="right" data-aos="fade-down-left">
              <Heading title="About Me" />
              <p>{val.desc}</p>
              <p>{val.desc1}</p>
              <button className="primaryBtn" onClick={handleGeneratePlan}>
                Generate diet plan
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
