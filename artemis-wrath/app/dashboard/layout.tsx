import SideBar from './_components/SideBar'

const layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className='flex'>
            <SideBar />
            <div className='ml-64'>
                {children}
            </div>            
        </div>
    )
}

export default layout