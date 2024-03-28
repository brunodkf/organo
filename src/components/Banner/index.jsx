import './banner.css'
import bannerImg from '../../assets/Header@2x.png';

export const Banner = () => {
    return (
        <>
            <header className="banner">
                <img src={bannerImg} alt="Imagem do Banner" />
            </header>
        </>

    )
}