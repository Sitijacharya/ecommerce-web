import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="container-fluid">
  <footer className="py-5">
    <div className="row">
      

      

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer