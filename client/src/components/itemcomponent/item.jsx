/*hatha item bich naffichih fil page mta3 il user ily chrahom*/

import './item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Item({item}){
    return(
        <>
          <div className="ItemCard" >
                <div className="card-body">
                    <h1 className="card-title">{item.name}</h1>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price}</p>
                </div>
            </div>
        </>
    );
}
export default Item;