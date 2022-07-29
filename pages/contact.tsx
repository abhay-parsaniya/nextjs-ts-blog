import React from 'react'
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>My Products</h1>
        <p className="intro">Abhay's own Products</p>

        <style jsx>
          {`
            h1 {
              color: red;
            }

            .intro {
              color: blue;
            }
          `}
        </style>
      </div>
    </>
  )
}

export default contact