import { SIDEVARITEMS } from "@/styles/constants";

export const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out">
            <nav>
                {SIDEVARITEMS.map((item, index) => (
                    <a key={index} href={item.path || ""} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                        {item.title}
                    </a>
                ))}
            </nav>

        </div>

    );
};

export default Sidebar;