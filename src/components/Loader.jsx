import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" role="status">
                
            </Spinner>
            <span >Cargando...</span>
        </div>
    )
}

export default Loader