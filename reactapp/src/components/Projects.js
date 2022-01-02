import '../styles.css';
import BandwagonPreview from '../images/bandwagon.png';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-row-container'>
                <div className='project-item-container'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            style={{ width: '80%', marginTop: '1rem' }}
                            src={BandwagonPreview}
                            alt='bandwagon'
                        />
                    </div>
                </div>
                <div className='project-item-container'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            style={{ width: '80%', marginTop: '1rem' }}
                            src={BandwagonPreview}
                            alt='bandwagon'
                        />
                    </div>
                </div>
                <div className='project-item-container'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            style={{ width: '80%', marginTop: '1rem' }}
                            src={BandwagonPreview}
                            alt='bandwagon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
