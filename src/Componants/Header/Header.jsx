import './App.css'

const Header = ({lable})=>{
    return(<div className='main'>
          <div className='HeaderMain'><h1 className='h1'>All Products</h1>
          <div className='ic'>
          <h2 className='addcards'><i class="fa-solid fa-cart-shopping"></i>{lable}</h2>
          </div> 
          </div> 
          


    </div>)

}
export default Header;



