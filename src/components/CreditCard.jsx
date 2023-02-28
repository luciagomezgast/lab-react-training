import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let style = { backgroundColor: bgColor  };
 let digitos = number.slice(-4)
 let month = Math.floor(Math.random() * (12 + 1)) + 1
 
  return (
    <div style={style} className= "card mb-3 w-25 " >
      <div style={style} className="card-body">
        {type === "Visa" ? <img className="w-25"src={visa}/> : <img className="w-25"src={master}/>}
        <p className="card-text">{type}</p>
         <p className="card-text">************{digitos}</p> 
         <p >Exp: {month}/{expirationYear}</p>
         <p>{bank}</p>
         <p>{owner}</p>

      </div>
    </div>
  );
}
export default CreditCard;
