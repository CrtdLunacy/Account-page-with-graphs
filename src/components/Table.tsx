import CrossIcon from "../Icons/CrossIcon";

export default function Table() {
  return (
    <div className="overflow-scroll w-5/6 mx-auto my-5 md:w-full">
        <div className="w-[500px] mx-auto grid grid-cols-10 grid-flow-row space-x-1 md:w-full">
            {/* tablehead */}
            <div className="col-span-4 md:col-span-6">
                <div className="bg-[#5D5FEF] rounded-tl-3xl py-1 px-5 text-white">Статистика с <br /> 01.12.22 по 08.12.22</div>
                <div className="table_cell justify-start bg-[#F5F5F5]">Уникальные визиты</div>
                <div className="table_cell justify-start bg-[#EDEDED]">Просмотров контактов</div>
                <div className="table_cell justify-start bg-[#F5F5F5]">Добавлений в избранное</div>
                <div className="table_cell justify-start bg-[#EDEDED] rounded-bl-3xl">Просмотров портфолио</div>
            </div>

            <div className="col-span-2 md:col-span-2">
                <div className="bg-[#5D5FEF] py-4 px-5 text-white text-center">Пользователи</div>
                <div className="table_cell bg-[#F5F5F5]">12</div>
                <div className="table_cell bg-[#EDEDED]">2</div>
                <div className="table_cell bg-[#F5F5F5]">3</div>
                <div className="table_cell bg-[#EDEDED]">22</div>
            </div>

            <div className="col-span-2 md:col-span-1">
                <div className="bg-[#5D5FEF] py-4 px-5 text-white">Анонимы</div>
                <div className="table_cell bg-[#F5F5F5]">33</div>
                <div className="table_cell bg-[#EDEDED]">
                    <CrossIcon />
                </div>
                <div className="table_cell bg-[#F5F5F5]">
                    <CrossIcon />
                </div>
                <div className="table_cell bg-[#EDEDED]">87</div>
            </div>

            <div className="col-span-2 md:col-span-1">
                <div className="bg-[#5D5FEF] rounded-tr-3xl py-4 px-5 text-white">Всего</div>
                <div className="table_cell bg-[#F5F5F5]">60</div>
                <div className="table_cell bg-[#EDEDED]">7</div>
                <div className="table_cell bg-[#F5F5F5]">13</div>
                <div className="table_cell bg-[#EDEDED] rounded-br-3xl">156</div>
            </div>
        </div>
    </div>
  )
}
