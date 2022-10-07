import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { userStore } from '../stateManager/UsersStore';
import AddingUserPopUp from './AddingUserPopUp';
import { Button } from '../styled-componets/StyledComponents';


const EditFields = () =>{
    const [isNewUserEnabled, setIsNewUserEnabled] = useState<boolean>(false)

    return (
        <>
            <Button onClick={() => setIsNewUserEnabled(!isNewUserEnabled)}>Add New User</Button>
            {isNewUserEnabled && <AddingUserPopUp closePopUp={()=>setIsNewUserEnabled(false)}/>}
        </>
    );
  }

export default observer(EditFields);
