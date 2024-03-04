import React from 'react'
import {
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure, useToast
} from "@chakra-ui/react";
import {useUser} from "@@/store/useUser";
import {Input} from "@nextui-org/react";


const EditUser =  ({onClose}:any) => {
    const {user} = useUser(state => state.user)
    const toast = useToast()

    const [firstName, setFirstName] = React.useState(user.firstName)
    const [lastName, setLastName] = React.useState(user.lastName)
    const [userName, setUserName] = React.useState(user.username)
    const [email, setEmail] = React.useState(user.email)
    const [password, setPassword] = React.useState(user.password)
    const [phone, setPhone] = React.useState(user.phone)
    const [region, setRegion] = React.useState(user.addressForm.address)

    const UpdateUser = () => {
        onClose()
        toast({
            title: "Foydalanuvchi Yangilandi",
            description: "",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

    }

    return(



        <div className={""}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader className={"text-center font-bold text-2xl border-b-2"}>{`${user.firstName} ${user.lastName}`}</DrawerHeader>
                <DrawerBody>
                    <form className={"flex flex-col gap-3"}>
                        <Input type="text" label="FirstName" value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                        <Input type="text" label="LastName" value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                        <Input type="text" label="UserName" value={userName}
                               onChange={(e) => setUserName(e.target.value)}/>
                        <Input type="password" label="Password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input type="tel" label="Telefon no'mer" value={phone}
                               onChange={(e) => setPhone(e.target.value)}/>
                        <Input type="text" label="Region" value={region} onChange={(e) => setRegion(e.target.value)}/>


                    </form>
                    <div className={"flex p-4 gap-3 justify-end"}>
                        <button onClick={() => UpdateUser()} className={"bg-green-500 p-4 w-[200px] rounded-xl text-white font-bold"}>Update</button>
                        <button onClick={onClose} className={"bg-red-500 p-4 w-[200px] rounded-xl text-white font-bold"}>Cancle</button>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </div>
    )
}


export default EditUser