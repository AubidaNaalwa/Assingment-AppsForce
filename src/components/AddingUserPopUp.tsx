import React, { useState } from 'react';
import { observer } from 'mobx-react';
import style from '../style/AddingUserPopUp.module.css'
import { userStore } from '../stateManager/UsersStore';
import { Button, GridContainer, Input, Label, Modal } from '../styled-componets/StyledComponents';

type Props = { 
    closePopUp: () => void;
}
const AddingUserPopUp = ({closePopUp}: Props) =>{
    const [name, setName] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [userID, setUserID] = useState<string>('')
    const [userImage, setUserImage] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const onAddingNewUser = (event: { preventDefault: () => void; }) =>{ 
        event.preventDefault();
        userStore.addNewUser({name, location, userID, userImage, email})
        closePopUp()
    }

    return (
        <Modal>
            
            <GridContainer>
                <Label>Adding new User</Label>
                <Input type="text" placeholder='name' value={name} onChange= {(e)=>setName(e.target.value)} required/>
                <Input type="text" placeholder='location' value={location} onChange= {(e)=>setLocation(e.target.value)} required />
                <Input type="text" placeholder='ID' value={userID} onChange= {(e)=>setUserID(e.target.value)} required />
                <Input type="text" placeholder='Image Url'value={userImage} onChange= {(e)=>setUserImage(e.target.value)} required/>
                <Input type="email" placeholder='email'value={email} onChange= {(e)=>setEmail(e.target.value)} required/>
                <div className={style.buttonContainer}>
                    <Button onClick={onAddingNewUser}>AddNewUser</Button>
                    <Button onClick={closePopUp}>Close</Button>
                </div>
            </ GridContainer>
        </Modal> 
    );
  }

export default observer(AddingUserPopUp);
