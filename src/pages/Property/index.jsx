import './Property.scss';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Properties from '../../assets/data/logements';
import { useParams, Navigate } from 'react-router-dom';

export default function Property() {
    const { id } = useParams();
    
    const property = Properties.find((p) => p.id === id);
    if (!property) {
        return <Navigate to="/error" replace />;
    }
/* 
/ property = {
/   title,
/   description,
/   host { name, picture },   => host.name / host.picture
/   rating,
/   location,
/   equiments = [],
/   tags = []
/   }
*/
    return (
        <main className="property-main">
            <Slideshow id={id} />
            <div className='property'>
                <div className='p-title'>
                    <div className='p-title__title'>{property.title}</div>
                    <div className='p-title__subtitle'>{property.location}</div>
                </div>
                <div className='p-tags'>map</div>
            </div>
            <div className='p-host'>
                <div className='p-host__name'>{property.host.name}</div>
                <img src={property.host.picture} alt="" className='p-host__picture'/>
            </div>
            <div className='p-rate'>{property.rating}</div>
            <div className='p-details'>
                <div className='p-details__description'>map</div>
                <div className='p-details__equipments'>map</div>
            </div>
        </main>
    );
}
