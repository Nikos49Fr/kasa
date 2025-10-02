import './property.scss';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import PROPERTIES from '../../assets/data/logements';
import { useParams, Navigate } from 'react-router-dom';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';

export default function Property() {
    const { id } = useParams();

    const property = PROPERTIES.find((p) => p.id === id);
    if (!property) {
        return <Navigate to="/error" replace />;
    }

    return (
        <main className="property">
            <Slideshow id={id} />
            <section className="property__summary">
                <header className="property__intro">
                    <h1 className="property__intro-title">{property.title}</h1>
                    <p className="property__intro-location">
                        {property.location}
                    </p>
                    <ul className="property__intro-tags">
                        {property.tags.map((t) => (
                            <Tag key={t} tag={t} />
                        ))}
                    </ul>
                </header>
                <aside className="property__sidebar">
                    <div className="property__host">
                        <p className="property__host-name">
                            {property.host.name}
                        </p>
                        <img
                            src={property.host.picture}
                            alt={property.host.name}
                            className="property__host-picture"
                        />
                    </div>
                    <Rating rating={property.rating} />
                </aside>
            </section>
            <section className="property__details">
                <Collapse title="Description" content={property.description} />
                <Collapse title="Equipements" content={property.equipments} />
            </section>
        </main>
    );
}
