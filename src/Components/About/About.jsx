import style from './about.module.css'

function About() {
  return (
    <section
      className={` portfolio d-flex flex-column align-items-center justify-content-center text-center bg-secondaryColor ${style.about} `}>

      <h2 className={`fw-bold  text-white fs48 text-uppercase`}>About</h2>
      <div className="d-flex align-items-center justify-content-center mt-2 text-white">
        <hr className={style.aboutHr} />
        <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 640 640" >
          <path fill="white" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        <hr className={` ${style.aboutHr}`} />
      </div>

      <div className='container'>
        <div className=' row justify-content-center mt-5'>
          <div className='col-md-6 col-lg-4 mb-5 text-start'>
            <p className='fs-5 ff-secondaryFont text-white'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className='col-md-6 col-lg-4 mb-5 text-start'>
            <p className='fs-5 ff-secondaryFont text-white '>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>

        </div>
        <div class="text-center">
          <a class={`btn btn-xl btn-outline-light py-3 px-4 border-2 ${style.btnsvg}`} href="https://startbootstrap.com/theme/freelancer/">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 640 640" className={`${style.btnSvg}`} >
              <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z" /></svg>
            <span className={`${style.btnText} ms-2 text-center`}> Free Download!</span>

          </a>
        </div>
      </div>
    </section>

  )
}

export default About