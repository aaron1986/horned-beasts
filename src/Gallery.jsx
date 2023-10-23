import Header from './Header.jsx'

export default function Gallery({ title, imageUrl, description }) {
    return (
            <div className='grid'>
                <img src={imageUrl} alt={title} />
                    <h2>{title}</h2>
                 <p>{description}</p>
            </div>
    );
}