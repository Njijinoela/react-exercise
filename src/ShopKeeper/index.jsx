import items from "./items"

//Create a Table row component

import "./index.css"

function ShopKeeperApp(){
    return <div>
        <table>
            <thead>
                <th>no</th>
                <th>Name</th>
                <th>unit_price</th>
                <th>qty</th>   
                <th>Total</th>         
            </thead>
            <tbody>
                {items.map((item, index)=>{
                    const totalcost = item.qty * item.unit_cost;
                    return <tr key = {index}>
                        <td>{index +1}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.unit_cost}</td>
                        <td>{totalcost}</td>
                        
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}


export default ShopKeeperApp