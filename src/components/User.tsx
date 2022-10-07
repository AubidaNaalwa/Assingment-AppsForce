import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { userStore } from '../stateManager/UsersStore';
import Style from '../style/userLibrary.module.css'
import { Button } from '../styled-componets/StyledComponents';

export type user = { 
    name: string; 
    email: string
    location: string;
    userImage: string;
    userID: string;
}

type Props = { 
    user: user;
}



const UserLibrary = ({user}: Props) =>{
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const onDeleteClick = () => { 
        if(window?.confirm('Are you sure you want to delete this person from table?')) { 
            userStore.deleteUser(user)
        }
    }

    const onInputChange = (user: user) => {
        userStore.updateUser(user)
    }

    return (
        <tbody>
            <tr>
                <td><img src={user.userImage} alt="user Image" /></td>
                <td><input readOnly = {readOnly} value={user.name} onChange={(e) => onInputChange({...user, name: e.target.value})}/></td>
                <td><input readOnly = {readOnly} value={user.email} onChange={(e) => onInputChange({...user, email: e.target.value})}/></td>
                <td><input readOnly = {readOnly} value={user.location} onChange={(e) => onInputChange({...user, location: e.target.value})}  /></td>
                <td>{user.userID}</td>
                <td><Button onClick={onDeleteClick}>Delete</Button></td>
                <td><Button onClick={()=>setReadOnly(!readOnly)}>{readOnly ? 'Edit': 'Save'  }</Button></td>
            </tr>
        </tbody>

    );
  }
     

export default  observer(UserLibrary);
