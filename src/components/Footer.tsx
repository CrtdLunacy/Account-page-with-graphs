import LogoIcon from "../Icons/LogoIcon";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-[#5D5FEF]">
        <div className="w-5/6 mx-auto">
            <div className="py-12 flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 items-center">
                <h4>
                    <LogoIcon colorIcon='#FFFFFF' />
                </h4>

                <div className="space-x-5">
                    <SocialIcon url="https://telegram.com/test" bgColor='white' style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://instagramm.com/test"  bgColor='white' style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://vk.com/test"  bgColor='white' style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://facebook.com/test"  bgColor='white' style={{ height: 30, width: 30 }} />
                </div>
            </div>

            <div className="text-white font-light pb-12 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between">
                <a href="https://selfmade.com/test">Как работает сервис?</a>
                <a href="https://selfmade.com/test">Советы от SELFMADE</a>
                <a href="https://selfmade.com/test">Пользовательское соглашение</a>
                <a href="https://selfmade.com/test">Почему SELFMADE</a>
                <a href="https://selfmade.com/test">Помощь и поддержка</a>
            </div>
        </div>
        <div className="py-7 bg-[#5556D3]">
            <div className="w-5/6 flex flex-col md:flex-row items-center space-y-3 md:space-y-0  justify-between mx-auto text-white">
                <div className="font-light">© SELFMADE.TEAM 2022</div>
                <div className="font-thin text-center">ИНН 431207720494 / ОГРНИП 320508100324371</div>
                <div className="text-[#B6B6B6]">Политика конфиденциальности</div>
            </div>
        </div>
    </footer>
  )
}
