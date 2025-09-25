import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import AboutBanner from '../../assets/images/about-banner.png';
import './About.scss';

const values = [
    {
        value: 'Fiabilité',
        valueContentText: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`,
    },
    {
        value: 'Respect',
        valueContentText: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
    },
    {
        value: 'Service',
        valueContentText: `La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.`,
    },
    {
        value: 'Sécurité',
        valueContentText: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
    },
];

export default function About() {
    return (
        <main className="about-main">
            <Banner img={AboutBanner} variant="about" />
            <section className="about-values">
                {values.map((v, index) => (
                    <Collapse
                        key={`${v.value}-${index}`}
                        title={v.value}
                        content={v.valueContentText}
                    />
                ))}
            </section>
        </main>
    );
}
