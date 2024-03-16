import { motion } from "framer-motion";
import React from "react";
import { socialIcons } from "../constants";
import { Helmet } from "react-helmet";
import { useState } from 'react'
import axios from 'axios'
import '../assets/css/Model.css'

const Contact = ({ active, setActive }) => {

  const [form, setForm] = useState(true)
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [succes, setSucces] = useState();
  const FEED_FORM_API = "https://docs.google.com/forms/d/e/1FAIpQLScrIWz3l0pwnLaakhQBWM5u-lKADnSLZ1XBge0khY_3FEcIYw/formResponse"
  const FEED_NAME_API = "entry.848042929"
  const FEED_EMAIL_API = "entry.976722153"
  const FEED_MESSAGE_API = "entry.1336343275"
  const validateForm2 = () => {
    const errors = {};
    if (!formData[FEED_NAME_API]) {
      errors[FEED_NAME_API] = 'Enter your name';
    }
    if (!formData[FEED_EMAIL_API]) {
      errors[FEED_EMAIL_API] = 'Enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData[FEED_EMAIL_API])) {
      errors[FEED_EMAIL_API] = 'Invalid email address format';
    }
    if (!formData[FEED_MESSAGE_API]) {
      errors[FEED_MESSAGE_API] = 'Enter your message';
    }
    return errors;
  }
  const feedSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm2();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formUrl = FEED_FORM_API;
    const formDataUrlEncoded = new URLSearchParams(formData).toString();
    setSucces('Data transferred')
    setFormData({});
    setErrors({});
    setTimeout(() => {
      setSucces('')
      setActive(false)
    }, 2000);
    await axios.post(formUrl, formDataUrlEncoded)


  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>Contact Me -Dheeraj Maske</title>
        <meta
          name="description"
          content="Get in touch with Dheeraj Maske. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />
        <meta property="og:title" content="Contact Me - Dheeraj Maske" />
        <meta
          property="og:description"
          content="Get in touch with Dheeraj Maske. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />
        {/* <meta property="og:image" content="https://rajaryan.work/banner.png" /> */}
        {/* <meta property="og:url" content="https://rajaryan.work/contact" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Me - Dheeraj Maske" />
        <meta
          name="twitter:description"
          content="Get in touch with Dheeraj Maske. Schedule a meeting, send a message, or reach out through various social media channels. Feel free to write an email directly to hi@rajaryan.work"
        />
        {/* <meta name="twitter:image" content="https://rajaryan.work/banner.png" /> */}
      </Helmet>

      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold font-sans-serif md:mb-5 mb-10">
          Contact Me:
        </h1>

        <div className="flex flex-col-reverse md:flex-row justify-around mt-10 w-[100%]">
          <div className="md:w-[50%] w-[100%]  my-16">
            <div className="text-white mb-16">
              <h1 className="text-bold text-2xl font-semibold">Need a chat?</h1>
              <a href="/call">
                <p className="my-5 text-center underline underline-offset-8 font-sans-serif text-xl w-fit mx-auto p-1 tracking-widest hover:bg-[#ef4444]/10 transition rounded-sm	">
                  Schedule a meeting
                </p>
              </a>
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">
              Send A Message
            </h2>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e => e.stopPropagation())}>
              {succes ? <div className='succes'>{succes}</div> : null}
              <div className='ccc'>TO WRITE A MESSAGE</div>
              <form
                className="form"
                onSubmit={feedSubmit}
              >
                {errors[FEED_NAME_API] && <div className='error'>{errors[FEED_NAME_API]}</div>}
                <input
                  type="text"
                  name={FEED_NAME_API}
                  placeholder='your name'
                  value={formData[FEED_NAME_API] || ''}
                  onChange={handleChange}
                />
                {errors[FEED_EMAIL_API] && <div className='error'>{errors[FEED_EMAIL_API]}</div>}
                <input
                  type="email"
                  name={FEED_EMAIL_API}
                  placeholder='Your mail'
                  value={formData[FEED_EMAIL_API] || ''}
                  onChange={handleChange}
                />
                {errors[FEED_MESSAGE_API] && <div className='error'>{errors[FEED_MESSAGE_API]}</div>}
                <textarea
                  type="text"
                  name={FEED_MESSAGE_API}
                  placeholder='Message'
                  value={formData[FEED_MESSAGE_API] || ''}
                  onChange={handleChange}
                />
                <div className="take-consultation__callback">
                  <div className="take-consultation"  onClick={() => { setForm(true); setErrors({}); setFormData({}); }}>Submit</div>
                  <input
                    type="submit"
                    value="Send"
                    className="callback"
                  />
                </div>
              </form>
            </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-evenly md:my-10 my-5">
            {socialIcons.map((item) => (
              <a href={item.link} key={item.name} target="_blank">
                <div className="flex flex-row items-center justify-between w-fit">
                  <div className=" grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444] ">
                    <i className={`${item.class} text-white`}></i>
                  </div>
                  <h2 className="text-white/50 text-lg ">{item.text}</h2>
                </div>
              </a>
            ))}
          </div>

          <div className="text-white">
            <h1 className="text-bold text-2xl font-semibold">
              Or you can write a mail directly to
            </h1>
            <a href="mailto:dheerajmaske2001@gmail.com">
              <p className="my-5 text-center underline underline-offset-8 font-sans-serif text-xl tracking-widest	">
                dheerajmaske2001@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.div >
  );
};

export default Contact;
