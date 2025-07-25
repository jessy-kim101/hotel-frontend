
import { FaTasks } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
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
        id: "users",
        name: "Users",
        icon: FaUserCheck,
        link: "users"
    },

      {
        id: "profile",
        name: "Profile",
        icon: FaUserCheck,
        link: "profile"
    },
    {
        id: "updateProfile",
        name: "updateProfile",
        icon: TbBrandGoogleAnalytics,
        link: "updateProfile"
    },
 

]