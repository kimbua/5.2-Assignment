
const Button = ({handleAdd, value}) => {
  console.log(handleAdd)
  return (
    <div>
      <button onClick={()=>handleAdd(value)}>
        {value < 0? value : `+${value}`}
        </button>
     
    </div>
  )
};
export default Button;