import Rating from "./Rating";
function DriverCard({name, rating, img, car}){
    return(
        <div class="card w-25" >
        <img src={img} class="card-img-top w-100" alt="..."/>
        <div class="card-body">
          <p class="card-text">{name}</p>
          <p class="card-text"><Rating>{rating}</Rating></p>
          <p class="card-text">{car.model}</p>
          <p class="card-text">{car.licensePlate}</p>

        </div>
      </div>
    )
}
export default DriverCard;