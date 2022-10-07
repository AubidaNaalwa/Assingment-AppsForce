import React from 'react';
import { userStore } from '../stateManager/UsersStore';
import { Input } from '../styled-componets/StyledComponents';

const SearchFilters = () =>{
    return (
        <>
            <Input type="id" placeholder='filter By id' onChange={(event) => userStore.filterBy('userID', event.target.value)}/>
            <Input type="name" placeholder='filter By name' onChange={(event) => userStore.filterBy('name', event.target.value)}/>
            <Input type="email" placeholder='filter By email' onChange={(event) => userStore.filterBy('email', event.target.value)}/>
            <Input type="Location" placeholder='filter By Location' onChange={(event) => userStore.filterBy('location', event.target.value)}/>
        </>
    );
  }
     

export default SearchFilters;
