// import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
const Home = () => {

    const [firstData, setFirstData] = useState([]);
    const [selectActors, setSelectActors] = useState([]);
    const [remaing, setRemaing] = useState(0)
    const[totalcost, setTotalcost] = useState(0)

    useEffect(()=>{
        fetch('Cart.json')
        .then(res=>res.json())
        .then(data=>setFirstData(data))
    },[])

    const handelSelactor=(actor)=>{
        const isExesting = selectActors.find((item)=>item.id == actor.id)

        let count = actor.salary;
        if(isExesting){
            return alert('alrady selected')
        } else{
            selectActors.forEach((item) => {
                count = count + item.salary;
            })

            const totalRemaing = 20000 - count;

            if(count > 20000){
                return alert('taka shash taka nai')
            }else{

                setRemaing(totalRemaing)
            setTotalcost(count)
            // console.log(count)
            setSelectActors([...selectActors,actor])
            }

            
        }
    }
    // console.log(selectActors)

    return (
        <div>
            <div className="Container">
              <div className='home-container'>
               <div className="card-container">
               {
                firstData.map((actor)=>{
                    return (<div key={actor.id} className='card'>
                    <div className='card-img'>
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, sunt.</small></p>
                    <div className='info'>
                        <p>{actor.salary} $</p>
                        <p>{actor.role}</p>
                    </div>
                    <button  onClick={()=>handelSelactor(actor)} className='card-btn'>Selected</button>
                </div>)
                })
               }
               </div>
                <div className="cart">
                    <Cart totalcost={totalcost} remaing={remaing}  selectActors={selectActors}></Cart>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Home;
