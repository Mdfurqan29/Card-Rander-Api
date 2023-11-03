import './App.css'

const Button = ({lable,onClick})=>{
return(<div className='div'>
   <button onClick={onClick}>{lable ? lable : "Free"}</button>
</div>

)
}

export default Button;