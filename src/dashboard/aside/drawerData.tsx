
import { FaTasks } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";


export type DrawerData = {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number }>;
    link: string;
}

export const adminDrawerData: DrawerData[] = [

    {
        id: "booking",
        name: "Booking",
        icon: FaTasks,
        link: "booking"
    },
    {
        id: "room",
        name: "Room",
        icon: FaTasks,
        link: "room"
    },

    {
        id: "hotel",
        name: "Hotel",
        icon: FaTasks,
        link: "hotel"
    },

    {
        id: "ticket",
        name: "ticket",
        icon: FaTasks,
        link: "ticket"
    },
    {
        id: "user",
        name: "User",
        icon: FaUserCheck,
        link: "user"
    },
     {
        id: "profile",
        name: "profile",
        icon: FaUserCheck,
        link: "profile"
    },

    
 

]