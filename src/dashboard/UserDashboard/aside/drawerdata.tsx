import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";


export type DrawerData = {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number }>;
    link: string;
}

export const userDrawerData: DrawerData[] = [
    
    {
        id: "booking",
        name: "booking",
        icon: FaTasks,
        link: "booking"
    },
     {
        id: "ticket",
        name: "ticket",
        icon: FaTasks,
        link: "ticket"
    },

    {
        id: "profile",
        name: "profile",
        icon: FaUserCheck,
        link: "profile"
    },
    {
        id: "UpdateProfile",
        name: "UpdateProfile",
        icon: TbBrandGoogleAnalytics,
        link: "UpdateProfile"
    }

]