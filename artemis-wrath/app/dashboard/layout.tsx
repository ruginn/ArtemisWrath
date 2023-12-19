import SideBar from './_components/SideBar'

const layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className='flex'>
            <SideBar />
            {children}
        </div>
    )
}

export default layout