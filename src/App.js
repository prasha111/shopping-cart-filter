import logo from './logo.svg';
import './App.css';
import { Axios } from 'axios';
import axios from "axios";
import { useState, createContext, useContext, useEffect} from 'react';
import { Provider } from './context';

function App() {
const UserContext = createContext();

const user = useContext(UserContext);
var newprodcutlist


const [productlist , setproductlist] = useState([]);
//const [orgiganl , setorignal] = useState([]);

const [post, setPostArray] = useState([]);
var arra =[];

function decending(arra){
   arra.sort((a,b)=>{
    if(a.price < b.price){
      return 1;
    }
    if(a.price > b.price){
      return -1;
    }
    return 0;
   })
  
  // return resultarray;
  console.log("decending")
  //setproductlist(arra);
  setPostArray([...arra]);
}

function ascending(arra){
  arra.sort((a,b)=>{
    if(a.price > b.price){
      return 1;
    }
    if(a.price < b.price){
      return -1;
    }
    return 0;
   })
  // return resultarray; 
  console.log("ascending")
  //setproductlist(arra);
  setPostArray([...arra])
}
function Orignal(arra){
  setPostArray([...arra])
}


useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  
    //setPostArray(json) ;
    //console.log(post, "This is the post")
})


axios({
  method: 'get',
  url: 'https://fakestoreapi.com/products',
  responseType: 'json'
})
  .then(function (response) {
    console.log(response.data,"response")
    setPostArray(response.data);
    setproductlist(response.data);
 

    console.log(post, "This is the post")


  })
  //  setPostArray([{name: 'a'}, {name: 'b'},{name: 'c'}])
},[]);
 const contextvalue = {
   dataa:productlist
   
 }
  

  return (
    <div>
      <Provider value={contextvalue}>
      <div className='bg-red-200 w-[screen] text-center space-x-20 py-4'>Header 
      Sort by-  
      <button onClick={()=>{Orignal(productlist)}}  className='text-white bg-green-800 rounded-md px-4 py-2 ml-8'>
        Orignal
      </button>
      <button onClick={()=>{ascending(post)}} className='text-white bg-green-800 rounded-md px-4 py-2'>
        Low-to-high
      </button>
      <button onClick={()=>{decending(post)}} className='text-white bg-green-800 rounded-md px-4 py-2 '>
        High-to-Low
      </button>

</div>


   
    <div className="App flex flex-wrap space-y-8 space-x-4 justify-center">
      {console.log(productlist, "product")}
      {post.map((item)=>{
        return(
          <div key={item.id}>
            <div className='border border-4 space-y-4 space-x-28 px-2 py-2 space-evenly w-[400px]'>
            <div className='text-center text-xl font-bold'>            {item.title}
                </div>

                <div className='item-center px-0 py-0 mx-0 my-0'><img src={item.image} className="w-[200px] h-[40] py-0 px-0 mx-0 my-0 rounded-md border-solid border-2"/>
               
                


                  </div>
                  <div className='text-center mt-0'>
                    <a className='font-semibold text-red-600 bg-gray-200 px-4 py-1 rounded-xl '>Price {item.price}</a>
                  <br/>
                  <p className='flex flex-row space-x-8 mt-2 pb-0 mb-0 bg-gray-400 py-2 px-4 rounded-xl'>
                    <a>
                   {item.category}
                   </a> 
                   <a>
                  Rating:{item.rating.rate}
                  </a>
                  </p>
                  <br/>
                  Count:{item.rating.count}
                    </div>
                    <div className='text-left
                    
                    mt-0'>Description
                      :- {item.description}
                      </div>
                     
                     

              </div>
             

          
          </div>
        )

      })}
      
   
    </div>
    </Provider>
    </div>
  );
}

export default App;
