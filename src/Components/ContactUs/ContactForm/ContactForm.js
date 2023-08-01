import React from "react";
import { BsHouseDoor } from 'react-icons/bs'
import  ReCAPTCHA  from "react-google-recaptcha";
import { useEffect } from "react";
import { useState } from "react";
import Loader from '../../Shared/Loader/Loader'



const ContactForm = () => {
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  function onChange(value) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }

  return (
   
      <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* another items card */}
    <div className="text-center w-1/2 lg:text-left">
      <h4 className="text-2xl font-bold">Quick Contact</h4>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>

    {/* contact address card */}
    <div className="text-center w-1/2 lg:text-left">
      <h4 className="text-2xl font-bold">Quick Contact</h4>
      <p className="py-3">If you have any questions simply use the following contact details.</p>
      <div className="grid grid-cols-1 gap-y-5">
          <div className="flex">
            <div className="address-icon">
              <BsHouseDoor className="text-5xl text-primary border-2 rounded p-2"/>
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-bold">Address</h4>
              <small className="text-sm">123 West Street, Melbourne Victoria 3000 Australia</small>
            </div>
          </div>
          <div className="flex">
            <div className="address-icon">
              <BsHouseDoor className="text-5xl text-primary border-2 rounded p-2"/>
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-bold">Email</h4>
              <small className="text-sm">laizuakram98@gmail.com</small>
            </div>
          </div>
          <div className="flex">
            <div className="address-icon">
              <BsHouseDoor className="text-5xl text-primary border-2 rounded p-2"/>
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-bold">Phone</h4>
              <small className="text-sm">+880 1770888</small>
            </div>
          </div>
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h5 className="text-2xl font-bold">Message us</h5>
        <div className="form-control">
        <input type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-2" />
        </div>
        <div className="form-control">
        <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs mb-2" />
        </div>
        <div className="form-control">
        <textarea className="textarea textarea-success" placeholder="Message"></textarea>
        </div>
        <ReCAPTCHA
          sitekey="6LeNf3EnAAAAAFMwefqpicB9Mh7gNe8ZFEuySZOI"
          onChange={onChange}
          />
        <div className="form-control mt-6">
          <button disabled={!isCaptchaSuccessful} className="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
       
    
    
  );
};

export default ContactForm;
