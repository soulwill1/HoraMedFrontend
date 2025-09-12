import MobileNav from "./mobile_nav"

const Nav = () => {
  return (
    <div className='h-20'>
        <div className='px-8 py-2 m-auto'>
            <div className='flex justify-between items-center max-w-7xl m-auto border border-gray-200 p-2 rounded-xl shadow-sm'>
                <div className=''> 
                    HoraMed
                </div>
                <div className='flex max-sm:hidden'>
                    MENU | MENU | MENU | MENU
                </div>
                <MobileNav />
                <div className='flex items-center max-sm:hidden'>
                    <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Cadastre-se
                        </span>
                    </button>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-md px-5 py-2.5 text-center">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav