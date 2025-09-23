import './Property.scss';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Properties from '../../assets/data/logements';
import { useParams, Navigate } from 'react-router-dom';

export default function Property() {
    const { id } = useParams();
    const existsId = Properties.find((p) => p.id === id);
    if (!existsId) {
        return <Navigate to="/error" replace />;
    }

    return (
        <main className="property-main">
            <Slideshow id={id} />
        </main>
    );
}
