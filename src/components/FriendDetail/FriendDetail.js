import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  // const params = useParams();
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);

  return (
    <div>
      {/* <h2>This is detail of a Dosto : {params.friendId}</h2> */}
      <h2>This is detail of a Dosto : {friendId}</h2>
      <h2>Name : {friend.name}</h2>
      <h3>Username : {friend.username}</h3>
      <h4>Website : {friend.website}</h4>
      <h5>City : {friend.address?.city}</h5>
      <p>Geo :{friend.address?.geo.lat} </p>
      
    </div>
  );
};

export default FriendDetail;
