import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  )
}

// Add default export to fix the error
export default ErrorPage