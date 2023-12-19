import { Calendar, ArrowRightLeft, Shield, Swords, Settings, Layers, Library } from "lucide-react"

const SideBar = () => {

    return (
        <div className="w-64 h-[calc(100vh-80px)] border-4 border-red-200 fixed">
            <div className="flex flex-row items-center">
                <Calendar />
                <h3>Daily Pack</h3>
            </div>
            <div className="flex flex-row items-center">
                <Layers />
                <h3>Collection</h3>
            </div>
            <div className="flex flex-row items-center">
                <Library />
                <h3>Deck Builder</h3>
            </div>
            <div className="flex flex-row items-center">
                <ArrowRightLeft />
                <h3>Trade Center</h3>
            </div>
            <div className="flex flex-row items-center">
                <Shield />
                <h3>Guild</h3>
            </div>
            <div className="flex flex-row items-center">
                <Swords />
                <h3>Battle</h3>
            </div>
            <div className="flex flex-row items-center">
                <Settings />
                <h3>Settings</h3>
            </div>
        </div>
    )
}

export default SideBar