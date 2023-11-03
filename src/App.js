import Header from "./Componants/Header/Header.jsx";
import Button from "./Componants/Button/Button.jsx";
import CardMain from "./Componants/CardMain/CardMain.jsx";
import LoadingAnimation from "./Componants/Loading/Loading.jsx";
import CardsImg from "./Componants/CardsImg/cardsImg.jsx";
import Category from "./Componants/category/category.jsx";
import Title from "./Componants/Title/Title.jsx";
import Cards from "./Componants/Cards/Cards.jsx";

import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
   let [data, setData] = useState([])
   let [Loading, setLoading] = useState(true)
   let [addCard , setAddCard] = useState(0)

   const getData = () => {
      axios.get('https://fakestoreapi.com/products/').then((success) => {
         setData(success.data)
         setLoading(false)
      }).catch(() => {
         alert("loading faild")
         setLoading(false)
      })
   }
   useEffect(() => {
      getData()
   }, [])
const addCards = ()=>{
setAddCard(pre=>pre+1)
}
   return (
      <div className="App">
         {Loading ? "" : <Header lable={addCard}/>}
         <CardMain className="CardMain" lable={Loading ? <LoadingAnimation/> :
            data.map((e, i) => {
               return <Cards key={i} lable={<>
               <CardsImg lable={e.image} className='cardsImg'/>
                  <Category lable={e.category}/>
                  <Title lable={e.title}/>
                  <Button lable={"$" + e.price} onClick={addCards}/>
               </>}/>
            })} />
      </div>)}

export default App;