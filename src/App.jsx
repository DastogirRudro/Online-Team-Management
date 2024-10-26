import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header/Header'
import { Banner } from './Header/Banner'
import { Footer } from './Footer/Footer'
import { Fullelement } from './Element/Fullelement'
import { Selected } from './Selected/Selected'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

// This is for coin
function App() {
  const[select,setselectProduct] =useState([])
  const [coin, setCoin] = useState(0)
  const [currentView, setCurrentView] = useState('fullelement');
  const handleCoin = ()=>{
    setCoin(coin+7000)
    toast("Credit Added to your Acount", {
      autoClose: 1000,
    })
  }

   //This is price section
   const pricedelete =(id)=>{
    console.log(id)
    // const taka = select.find((p)=>p.player.id==id)
    if(coin<=id){
      alert('Insufficient value')
    }else{
      setCoin(coin-id) 
    }
  }

 //That is all here
  
  const reduceCoin=(product) =>{
     const isexist =select.find((p)=>p.player.id==product.player.id)
     
     if(select.length==6) {
       alert('You have already selected six player')
     }else if(isexist){
      toast("Player have already exist", {
        autoClose: 2000,
      })
     } else if(coin<= product.player.price){
      toast("Not Enough money to buy this player.Claim some Credit", {
        autoClose: 2000,})
     }
     else{     
      const newselect = [...select,product]
      setselectProduct(newselect)
      pricedelete(product.player.price)
      toast(`Congress ${product.player.name} is now on you squad`, {
        autoClose: 2000,
      })
     }    
  }
   
  // this is delete function
  const handleDelete =(id)=>{
    const newproduct = select.filter((p)=>p.player.id!=id)
    setselectProduct(newproduct)
    toast("Player removed", {
      autoClose: 2000,
    }) 
  }
  const showavailablebutton = () => setCurrentView('fullelement');
  const showhereselectedbutton = () => setCurrentView ('selected');

  return (
    <>
      <div className='max-w-6xl mx-auto'>
         <div>
          <Header coin={coin}></Header>
          <Banner handleCoin={handleCoin}></Banner>
         </div>
         <div className='flex justify-end mt-12 sticky rounded-md  p-2'>
           <button onClick={showavailablebutton} className='font-semibold border-2 border-r-0 rounded-sm px-4 py-3'>Available</button>
           <button onClick={showhereselectedbutton} className='font-semibold border-2 border-l-0 rounded-sm py-3 px-4'>Select ({select.length})</button>
         </div>
           
        {currentView === 'fullelement' ? (
          <Fullelement reduceCoin={reduceCoin}></Fullelement>
        ) : (
          <Selected showAvailable={showavailablebutton} select={select} handleDelete={handleDelete}></Selected>
        )}
         {/* <Fullelement reduceCoin={reduceCoin}></Fullelement>
         <Selected select={select} handleDelete={handleDelete}></Selected> */}
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
