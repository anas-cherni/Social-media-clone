import Image from "next/image"
import fb_logo from "./assets/logo.png"
import HeaderIcon from "./HeaderIcon"

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,

} from "@heroicons/react/outline"

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/*left */}
            <div className="flex items-center">
                <Image
                    src={fb_logo}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="flex ml-2 items-center bg-transparent
                     outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />

                </div>

            </div>
            {/*center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:sace-x-2">
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>

            </div>
        </div>
    )
}

export default Header;
