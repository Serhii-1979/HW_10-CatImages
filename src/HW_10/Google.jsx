import CatImage from './CatImage'
import './google.css'
import image1 from '../assets/Google.svg'
import image2 from '../assets/search.svg'
import image3 from '../assets/mic.svg'



function Google() {
    return(
        <div className='google'>
            <div className='google_logo'>
                <div className='google_logo-img'>
                    <img src={image1} alt="img" />
                    <div className='google_logo-account'>S</div>
                </div>
            </div>
            <div className='google_search'>
                <div className='google_img-search'>
                    <img src={image2} alt="img" />
                </div>
                <p className='google_search-text'>котики</p>
                <p className='google_search-p'>Х</p>
                <span></span>
                <div className='google_img-search-mic'>
                    <img src={image3} alt="img" />
                </div>
                <div></div>
            </div>
            <div className='google_list'>
                <ol className='google_list-ol'>
                    <li>Все</li>
                    <li className='google_list-li'>Картинки</li>
                    <li>Видео</li>
                    <li>Новости</li>
                    <li>Товары</li>
                </ol>
            </div>
            <div className='google_content'>
                <CatImage />
            </div>
        </div>
    )
}
export default Google;