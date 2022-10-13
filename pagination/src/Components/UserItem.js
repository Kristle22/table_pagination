const UserItem = ({ data }) => {

  return (
    <div className="flex">
      {
        data.map(user =>
          <div key={user.id} className='user'>
            <h1>{user.name}</h1>
            <h2>Username: {user.username}</h2>
            <p>Email: <u>{user.email}</u></p>
            <p>City: <i>{user.address.city}</i></p>
            <p>Company: <b>{user.company.name}</b></p>
          </div>)
      }
    </div>
  );
}

export default UserItem;
