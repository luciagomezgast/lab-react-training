function Rating({children}){

    let rate = Math.round(children);
    return(
        <div className="card-text ">
           {rate <= 1 &&<p>★☆☆☆☆</p>}
           {rate > 1 && rate <= 2 &&<p>★★☆☆☆</p>}
           {rate > 3 && rate <= 4 && <p>★★★☆☆</p>}
           {rate > 4 && rate <= 4 && <p>★★★★☆</p>}
           {rate >= 5 && <p>★★★★★</p>}
        </div>
    )
}

export default Rating;