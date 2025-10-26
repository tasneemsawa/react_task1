import style from './portfolio.module.css'
import cabin from '../../assets/portfolio/cabin.webp'
import cake from '../../assets/portfolio/cake.webp'
import circus from '../../assets/portfolio/circus.webp'
import game from '../../assets/portfolio/game.webp'
import safe from '../../assets/portfolio/safe.webp'
import submarine from '../../assets/portfolio/submarine.webp'

function Portfolio() {
  return (
    <section
      className={`container portfolio d-flex flex-column align-items-center justify-content-center text-center  ${style.portfolio} `}>

      <h2 className={`fw-bold  color-mainColor fs48 text-uppercase`}>Portfolio</h2>
      <div className="d-flex align-items-center justify-content-center mt-2 text-white">
        <hr className={style.portfolioHr} />
        <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 640 640" >
          <path fill="rgb(44 62 80)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
        </svg>
        <hr className={` ${style.portfolioHr}`} />
      </div>

      <div className='row justify-content-center mt-5'>
        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={cabin} alt="cabin"></img>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={cake} alt="cake"></img>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={circus} alt="circus"></img>
        </div>


        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={game} alt="circus"></img>
        </div>

        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={safe} alt="circus"></img>
        </div>

        <div className='col-md-6 col-lg-4 mb-5'>
          <img className="img-fluid rounded-3" src={submarine} alt="circus"></img>
        </div>
      </div>
    </section>

  )
}

export default Portfolio