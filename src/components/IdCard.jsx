
function IdCard({ lastName, firstName, gender, height, birth, picture }) {

  return (
    <div className="card w-25">
      <img src={picture} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {firstName} {lastName}
        </h5>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text"> Height:{height}</p>
        <p className="card-text"> Birth:{birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
