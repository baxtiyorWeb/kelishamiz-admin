import React, {Dispatch, SetStateAction} from "react";
import { useToast } from '@chakra-ui/react'



interface IUser {
    deleteAnnouncement:Dispatch<SetStateAction<boolean>>
    announcementName:string
}

const AnnouncementDelete: React.FC<IUser> = ({deleteAnnouncement, announcementName}) => {

    const toast = useToast()

    return(
        <div onClick={() => deleteAnnouncement(false)}
             className=" flex items-center justify-center bg-transparent/50 w-full h-screen fixed
                 z-[9999] top-0 left-0 bg-black">
            <div className="w-[600px] h-[250px] rounded-xl bg-white flex justify-evenly items-center flex-col">
                <h2 className={"font-bold text-1xl text-center px-10"}>E&apos;lon <span className={"text-red-600"}>{announcementName}</span> O&apos;chirish</h2>
                <div className="w-full flex justify-center  gap-3">
                    <button className={"p-3 w-[100px] bg-green-600 text-white font-bold transition-all rounded-2xl hover:bg-green-500"}>Yo&apos;q
                    </button>
                    <button
                        onClick={() =>

                            toast({
                                title: "E'lon O'chirildi",
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

export {AnnouncementDelete}