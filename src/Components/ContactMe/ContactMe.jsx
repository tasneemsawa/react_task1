import style from './contactMe.module.css'

function ContactMe() {
  return (
    <section
      className={`container contact d-flex flex-column align-items-center justify-content-center text-center  ${style.contactMe} `}>

      <h2 className={`fw-bold  color-mainColor fs48 text-uppercase`}>Contact Me</h2>
      <div className="d-flex align-items-center justify-content-center mt-2 text-white">
        <hr className={style.contactMeHr} />
        <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 640 640" >
          <path fill="rgb(44 62 80)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        <hr className={` ${style.contactMeHr}`} />
      </div>

      <form id="contactForm" className='row w-50  mt-5'>
        <div className="form-floating mb-5">
          <input type="text" className={`form-control border-0 border-bottom rounded-0 fs-4  shadow-none ${style.formInput}`} id="name" placeholder="Enter your name..." />
          <label className='fs-4 fw-medium' htmlFor="name">Full name</label>
        </div>
        <div className="form-floating mb-5">
          <input className={`form-control border-0 border-bottom rounded-0 fs-4    shadow-none ${style.formInput}`} id="email" type="email" placeholder="name@example.com" />
          <label className='fs-4 fw-medium' htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-5">
          <input className={`form-control border-0 border-bottom rounded-0 fs-4    shadow-none ${style.formInput}`} id="phone" type="tel" placeholder="(123) 456-7890" />
          <label className='fs-4 fw-medium' htmlFor="phone">Phone number</label>
        </div>
        <div className="form-floating mb-5">
          <textarea rows="4" className={`form-control border-0 border-bottom rounded-0 fs-4   shadow-none ${style.formInput}`} id="message" type="text" placeholder="Enter your message here..."  >
          </textarea>
          <label className='fs-4 fw-medium' htmlFor="message">Message</label>
        </div>


        <button
          type="submit"
          className={`btn text-white  fs-5 px-3  bg-secondaryColor rounded-2 align-self-start ${style.formBtn} `}
          disabled
        >
          Send
        </button>

      </form>


    </section>

  )
}

export default ContactMe