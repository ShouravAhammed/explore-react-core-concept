export default function Friend({friend}){
    console.log(friend);
    const {name, email, username, id, address} = friend;

    return(
        <div className="box">
            <h4>id: {id}</h4>
            <p>UserName: {username}</p>
            <h4>Name: {name}</h4>
            <p>Email: {email} </p>
            <p>Email: {address?.city} </p>
            
        </div>
    )
}