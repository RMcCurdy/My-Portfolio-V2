const HomePageMessage = () => {
    return (
        <div className='home-title-container'>
            <div className='home-title-font title-text-fade-in'>
                Hey, I'm Robert.
            </div>
            <div
                style={{ marginTop: '0.5rem' }}
                className='home-title-font title-text-fade-in-secondary'>
                University Student and
            </div>
            <div className='home-title-font title-text-fade-in-secondary'>
                {' '}
                aspiring Web Developer.
            </div>
        </div>
    );
};

export default HomePageMessage;
