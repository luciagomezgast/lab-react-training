function BoxColor({r,g,b}){


    let divStyle= {backgroundColor : `rgb(${r},${g},${b})`}
    
    return(
        <div className="card" style={divStyle} >
        <div className="card-body" >
        rgb({r},{g},{b})
        </div>
      </div>
    )
}
export default BoxColor;