import React, {Dispatch, SetStateAction} from "react";
import { useToast } from '@chakra-ui/react'
import {useUser} from "@@/store/useUser";



interface IUser {
    deleteUser:Dispatch<SetStateAction<boolean>>

}

const DeleteUser: React.FC<IUser> = ({deleteUser}) => {
    const {user} = useUser(state => state.user)
    const toast = useToast()

    return(
        <div onClick={() => deleteUser(false)}
             className=" flex items-center justify-center bg-transparent/50 w-full h-screen fixed
                 z-[9999] top-0 left-0 bg-black">
            <div className="w-[600px] h-[250px] rounded-xl bg-white flex justify-evenly items-center flex-col">
                <h2 className={"font-bold text-2xl"}>Foydalanuvchi <span className={"text-red-600"}>{user.firstName +" "+ user.lastName}</span> O&apos;chirish</h2>
                <div className="w-full flex justify-center  gap-3">
                    <button className={"p-3 w-[100px] bg-green-600 text-white font-bold transition-all rounded-2xl hover:bg-green-500"}>Yo&apos;q
                    </button>
                    <button
                        onClick={() =>

                            toast({
                                title: "Foydalanuvchi O'chirildi",
                                description: "",
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            })
                        }
                        className={"p-3 w-[100px] bg-red-600 text-white font-bold rounded-2xl transition-all hover:bg-red-500"}>O&apos;chirish
                    </button>
                </div>
            </div>
        </div>
    )

}

export {DeleteUser}