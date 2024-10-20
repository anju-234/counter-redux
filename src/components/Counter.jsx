import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount} from './redux/Counterslice'


function Counter() {

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counterReducer.count)
  const[amount,setAmount]=useState("")

   const handleIncrement=()=>{
     if(amount==""){
      alert("please provide proper values")
     }
     else{
     // update values to the store
     dispatch(incrementByAmount(Number(amount)))
     setAmount("")
     }
   }
   

  return (
    <>
        <h1 className='text-center text-danger fw-bolder mt-5'>Counter-Application <img width={"50px"} src="https://weblium.com/blog/wp-content/uploads/2017/09/counter.gif" alt="" /></h1>
      <div className="container mt-5 border border-rounded w-50 p-5">
        <h1 style={{fontSize:'40px'}} className='text-center'>{count}</h1>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center w-100 mt-5">
          <button className='btn btn-success mb-3 mb-md-0' onClick={()=>dispatch(increment())}>Increment</button>
          <button className='btn btn-danger mb-3 mb-md-0'onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-warning mb-3 mb-md-0'onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex flex-column flex-md-row mt-5 justify-content-center">
            <input type="text" className='form-control w-100 w-md-50 mb-3 mb-md-0 text-center' placeholder='Enter amount ' onChange={e=>setAmount(e.target.value)} />
            <button className='btn btn-primary ms-0 ms-md-3 w-75 w-md-auto ms-3' onClick={handleIncrement}>Increment Amount</button>
        </div>
      </div>
    </>
  )
}

export default Counter
