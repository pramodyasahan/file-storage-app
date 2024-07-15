import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";
import {FaGoogleDrive} from "react-icons/fa";


export function Header() {
    return (<div className="border-b py-4 bg-gray-100">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <FaGoogleDrive className="inline-block mr-1"/>
                FileDrive
            </div>
            <div className="flex gap-2">
                <OrganizationSwitcher/>
                <UserButton/>
            </div>
        </div>
    </div>)
}