import { useState } from 'react'
import AccountIcon from '../Icons/AccountIcon'
import AchiveIcon from '../Icons/AchiveIcon';
import ChatIcon from '../Icons/ChatIcon';
import CrownIcon from '../Icons/CrownIcon';
import EngineIcon from '../Icons/EngineIcon';
import ExitIcon from '../Icons/ExitIcon';
import HeartIcon from '../Icons/HeartIcon';
import LevelIcon from '../Icons/LevelIcon';
import PortfolioIcon from '../Icons/PortfolioIcon';

export default function Menu() {
  const [showMenu, setShowMenu] = useState('hidden');

  const handleShowMenu = () => {
    (showMenu === 'hidden') ? setShowMenu('flex') : setShowMenu('hidden')
  }

  return (
    <div>
        <div
        className='cursor-pointer md:hidden mx-auto my-5 bg-[#5D5FEF] active:bg-[#5D5FEF]/40 transition text-white uppercase font-semibold rounded-xl py-2 px-4 w-2/4'
        onClick={handleShowMenu}
        >
            Меню профиля
        </div>
        <div className={`${showMenu} md:flex w-full mx-auto px-5 py-10 md:px-4 md:py-4 bg-[#F0F0F0] rounded-2xl`}>
            <div className='w-1/2 md:w-full flex flex-col mx-auto space-y-2'>
                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <AccountIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Управление</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <PortfolioIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Портфолио</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <AchiveIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Награды</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <HeartIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Избранное</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <EngineIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Аккаунт</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <LevelIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Уровень</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <CrownIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF] group-active:bg-white">Премиум</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <ChatIcon />

                    <h3 className="group-active:text-[#EF5DA8] group-hover:text-[#5D5FEF]">Поддержка</h3>
                </div>

                <div className='flex space-x-4 lg:px-[38px] lg:py-[20px] group active:bg-white rounded-lg p-4'>
                    <ExitIcon />
                    <button className='flex space-x-4'>
                        Выйти
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}
