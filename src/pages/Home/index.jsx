import Banner from '../../components/Banner';
import PROPERTIES from '../../assets/data/logements';
import Card from '../../components/Card';
import HomeBanner from '../../assets/images/home-banner.png';
import './home.scss';

export default function Home() {
    const bannerText = 'Chez vous, partout et ailleurs';

    return (
        <main className="home-main">
            <Banner img={HomeBanner} text={bannerText} variant="home" />
            <section className="card-wrapper">
                {PROPERTIES.map((l, index) => (
                    <Card
                        key={`${l.id}-${index}`}
                        id={l.id}
                        title={l.title}
                        picture={l.cover}
                    />
                ))}
            </section>
        </main>
    );
}
