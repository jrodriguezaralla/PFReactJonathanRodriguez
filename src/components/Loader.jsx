import Spinner from 'react-bootstrap/Spinner';
import '../index.css'

const Loader = () => {
    return (
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center Spinner--Size'>
            <Spinner animation="border" variant="danger" role="status" > 
            </Spinner>
        </div>
    )
}

export default Loader