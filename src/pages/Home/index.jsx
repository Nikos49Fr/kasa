import Banner from '../../components/Banner';
import Properties from '../../assets/data/logements';
import Card from '../../components/Card';
import HomeBanner from '../../assets/images/home-banner.png';
import './Home.scss';

const isLoading = false;

export default function Home() {
    const bannerText = 'Chez vous, partout et ailleurs';

    return (
        <main className="home-main">
            <Banner img={HomeBanner} text={bannerText} variant="home" />
            {isLoading ? (
                <section className="card-wrapper">
                    <span>Loading...</span>
                    <div className="is-loading"></div>
                </section>
            ) : (
                <section className="card-wrapper">
                    {Properties.map((l, index) => (
                        <Card
                            key={`${l.id}-${index}`}
                            id={l.id}
                            title={l.title}
                            picture={l.cover}
                        />
                    ))}
                </section>
            )}
        </main>
    );
}
