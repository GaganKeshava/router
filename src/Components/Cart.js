import {useNavigate} from 'react-router-dom'; 

function Cart() {
    const navigate = useNavigate()
  return (
    <>
        <div>Your Cart</div>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </>
    )
}

export default Cart