import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div className="home-page-container">
            <h1>Welcome to Routino</h1>
            <div className="img-btn-container">
                <img className='home-img' src="https://res.cloudinary.com/dwutylewo/image/upload/v1717680640/routino-bgc_cyztgo.jpg" alt="routino-background" />
                <button onClick={() => navigate('/activities')} className='btn'>Go To Routino <NavigateNextIcon /></button>
            </div>
        </div>
    )
}

export default HomePage