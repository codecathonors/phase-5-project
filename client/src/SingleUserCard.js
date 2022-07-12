import { Link } from "react-router-dom";

function SingleUserCard( { user } ) {

  return (
    <div className="user-grid-item">
      <h1>{user.username}</h1>
      <Link to={`/users/${user.id}`}>View more</Link>
    </div>
  );
}

export default SingleUserCard;