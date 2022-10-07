import React from 'react';
import { observer } from 'mobx-react';
import { userStore } from '../stateManager/UsersStore';
import Style from '../style/userLibrary.module.css'
import User from './User';


const UserLibrary = () =>{
    return (
        <table className={Style.table}>
            <tbody>
                <tr>
                <th>User image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>UUID/ID</th>
                    <th></th>
                </tr>
            </tbody>
            {userStore.filteredUseres.map(user => <User key={user.userID+user.email} user={user} />)}
        </table>
    );
  }

export default observer(UserLibrary);
