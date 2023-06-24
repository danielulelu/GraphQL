import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <FaExclamationTriangle className="text-danger" />
        <h1 className="text-danger">404</h1>
        <p className="text-danger">Page not found</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
    </div>
  )
}
