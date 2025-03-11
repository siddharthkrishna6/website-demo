import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  const handleGeneratePlan = () => {
    window.location.href = "https://form.typeform.com/to/FEfjs9eo"
  }

  return (
    <section className="hero">
      {home.map((val, i) => (
        <div key={i} className="heroContent">
          <h3 className="fontSize" data-aos="fade-right">
            {val.text}
          </h3>
          <h1>
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p data-aos="fade-left">{val.desc}</p>
          <button
            className="primaryBtn"
            data-aos="fade-up-right"
            onClick={handleGeneratePlan}
          >
            Generate diet plan
          </button>
        </div>
      ))}
    </section>
  )
}
