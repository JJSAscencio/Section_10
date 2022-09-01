import React, { useState } from "react";
import Card from '../UI/Card'
import styles from './UserForm.module.css'

//this prop is set because we are passsing info to paren with onSaveUserData
const UserForm = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const userData = {
            name: enteredName,
            age: enteredAge
        }
        props.onSaveUserData(userData)
        setEnteredName('')
        setEnteredAge('')
    }


    return (
        <Card className=''>
            <form onSubmit={submitHandler}>
                <div className={styles['new-user__controls']}>
                    <div className={styles['new-user__control']}>
                        <label>UserName</label>
                        <input
                            type="text"
                            value={enteredName}
                            onChange={nameChangeHandler} />
                    </div>
                    <div className={styles['new-user__control']}>
                        <label>Age Years</label>
                        <input
                            type="number"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles['new-user__actions']} >
                        <button type="submit">Add User</button>
                    </div>
                </div>
            </form >

        </Card >


    )

}

export default UserForm