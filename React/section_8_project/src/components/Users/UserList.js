import React from "react";
import User from './User'

const UserList = (props) => {

    return (
        <ul>
            {props.items.map(user => (
                <User
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />
            ))
            }
        </ul>
    )
}

export default UserList