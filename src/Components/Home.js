import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  return (
    <>
        <div>Home</div>
        <button onClick={() => navigate('cart')}>Go to your Cart</button>
    </>    
  )
}

export default Home