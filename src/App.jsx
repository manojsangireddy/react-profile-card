import { useState } from "react";
import "./App.css";
import UserDetails from "./UserDetails";

let data = [
  {
    id: 1,
    avatar: "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
    first_name: "Chrisse",
    last_name: "Duddy",
    address: "4018 Sachs Trail",
    karma: 79073,
    followers: 66868,
    posts: 1841,
    is_following: true,
  },
  {
    id: 2,
    avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
    first_name: "Jason",
    last_name: "Beck",
    address: "43766 Mallory Place",
    karma: 57005,
    followers: 97350,
    posts: 930,
    is_following: false,
  },
  {
    id: 3,
    avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
    first_name: "Lottie",
    last_name: "Pieters",
    address: "564 Messerschmidt Court",
    karma: 9058,
    followers: 18272,
    posts: 597,
    is_following: true,
  },
  {
    id: 4,
    avatar: "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
    first_name: "Gray",
    last_name: "Burker",
    address: "50 Schiller Point",
    karma: 67311,
    followers: 66348,
    posts: 876,
    is_following: true,
  },
  {
    id: 5,
    avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
    first_name: "Ellis",
    last_name: "Breslauer",
    address: "917 Old Shore Plaza",
    karma: 96034,
    followers: 32423,
    posts: 243,
    is_following: true,
  },
];

function App() {
  const [uploads, setUploads] = useState(data);

  return (
    <>
      {uploads.map((element) => {
        return (
          <UserDetails
            key={element.id}
            avatar={element.avatar}
            first_name={element.first_name}
            last_name={element.last_name}
            address={element.address}
            karma={element.karma}
            followers={element.followers}
            posts={element.posts}
            is_following={element.is_following}
          />
        );
      })}
    </>
  );
}

export default App;
