// Demonstrating use effect
import React, {useState, useEffect} from "react";

function UserList() {

  // array destructuring
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://api.github.com/users")
        .then((res) => res.json())
        .then(setData)
    }, [])

    if(data) {
        return (
            <div>
                <ul>
                    {data.map((item, i) => {
                        return <li key={i}>{item.login}</li>
                    })}
                </ul>
                <button onClick={() => setData([])}>Clear page</button>
            </div>
        );
    }
}

export default UserList;