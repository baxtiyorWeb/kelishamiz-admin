import React, { Dispatch, SetStateAction } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  

  type ContainerProps = {
    isClose: Dispatch<SetStateAction<boolean>>;
  };

const EditUser:React.FunctionComponent<ContainerProps> = ({isClose}) => {


 

    return(
     <></>
    )
    
}
  


export default EditUser