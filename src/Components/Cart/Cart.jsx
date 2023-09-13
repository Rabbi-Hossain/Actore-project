import './Cart.css'
const Cart = ({selectActors,remaing,totalcost}) => {
    console.log(selectActors)
    return (
        <div>
            <h2>Total Actors: {selectActors.length}</h2> 
            <h3>Remaing: {remaing}</h3>
            <h3>Total Cost: {totalcost}</h3>
            <ul>
            {
            selectActors.map((actor)=>
                <li key={actor.id}>{actor.name}</li>
            )
            }
            </ul>      
        </div>
    );
};

export default Cart;