function Greetings({lang, children}){
    return(
<div className="card text-bg-dark mb-3 w-25" >
  <div className="card-header">{lang}</div>
  <div className="card-body">
    {lang === "en" && <p>{children}</p>}
    {lang === "fr" && <p>{children}</p>}
    {lang === "de" && <p>{children}</p>}
    {lang === "es" && <p>{children}</p>}
    <p className="card-text"></p>
  </div>
</div>
    )
}
export default Greetings;