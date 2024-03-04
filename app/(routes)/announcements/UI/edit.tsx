import React, { useState } from "react";

// @ts-ignore
import {useAnnoncuments} from "@@/store/useAnnouncement";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

    useDisclosure,
} from '@chakra-ui/react'


const Edit = () => {
    const {announcements} = useAnnoncuments(state => state.annoncuments)
    const [formInput, setFormInput] = useState(""); // You can add your "data" as default value



    return (
    <>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{`E'lon ${announcements.name}`}</DrawerHeader>
        <DrawerBody>
            <div className="App" aria-hidden="true">
                <h1>Hello CodeSandbox</h1>
                <h2>formInput Value {announcements.name}</h2>
                <input
                    className={"w-[300px] p-4 border"}
                    type="text"
                    value={""}
                    onChange={(e) => setFormInput(e.target.value)} // You need to set the state with the onchange value from the input
                />
            </div>
        </DrawerBody>
    </DrawerContent>
    </>
)

};

export default Edit;