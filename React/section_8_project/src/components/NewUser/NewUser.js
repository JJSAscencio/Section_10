import React from "react";
import UserForm from "./UserForm";
import styles from './UserForm.module.css'

const NewUser = (props) => {

    //parameter expected enteredUserData <-- userData
    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(userData)
    }

    return (
        <div className={styles['new-user']} >
            <UserForm onSaveUserData={saveUserDataHandler} />
        </div >
        //passing info from userForm with onSaveUserData 
    )
}

export default NewUser