import './Property.scss';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Properties from '../../assets/data/logements';
import { useParams } from 'react-router-dom';

export default function Property() {
    const { id } = useParams();
    return (
        <main className='property-main'>
            <Slideshow id={id} />
        </main>
    );
}
