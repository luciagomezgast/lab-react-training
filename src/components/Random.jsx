function Random({min, max}){

    return(
        <div className="card">
        <div className="card-body">
        Random value between {min} and {max} = {Math.floor(Math.random() * (max + min)) + {min}}
        </div>
      </div>
    )
}
export default Random;