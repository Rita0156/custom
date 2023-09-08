//import PropTypes from "prop-types"
const Input=({length})=>{
    return (
        <div>
           {new Array(length).fill(1).map((_,index)=>{
            return <input key={index}/>
           })}
        </div>
    )
}
  export default Input
// Input.PropTypes={
//     length:PropTypes.number
// }