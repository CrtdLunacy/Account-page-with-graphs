import ProgressBar from "@ramonak/react-progress-bar";

const listOfOptions = [
    {
        color: '#A5A6F6',
        name: 'Профиль',
    },
    {
        color: '#F178B6',
        name: 'Портфолио',
    },
    {
        color: '#3AC49F',
        name: 'SR ФРЕШ',
    },
    {
        color: '#5D5FEF',
        name: 'SR ПРО',
    },
    {
        color: '#EF5DA8',
        name: 'SR ТОП',
    }
]

interface OptionsProps {
    color: string;
    name: string;
}

function FrameOptions({color, name}: OptionsProps) {
    return (
        <div className="flex items-center space-x-2 bg-white rounded-2xl py-2 px-5 w-3/5 mx-auto md:w-full md:py-5">
            <span className={`h-5 w-5 rounded-full inline-block`} style={{ backgroundColor: `${color}`}}></span>
            <p className="md:whitespace-nowrap">{name}</p>
        </div>
    )
}

export default function MainFrame() {
  return (
    <div className="flex flex-col w-5/6 md:w-full mx-auto bg-[#F0F0F0] py-4 rounded-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b-[1px] px-4 border-[#000000]/10 pb-5 md:py-4 md:px-5">
            <div className="flex items-center space-x-4">
                <img src="/Avatart.png" alt="Avatar" className="md:h-[71px] md:w-[71px]" />
                <h4 className="md:text-xl font-semibold">
                    Давид Аракелян
                </h4>
            </div>

            <p className="text-white bg-[#EF5DA8] rounded-[47px] px-2 py-1 text-[10px] font-semibold">
                ТОП
            </p>
        </div>

        {/* body  */}

        <div className="py-5 space-y-3 border-b-[1px] border-[#000000]/10 px-4 md:py-[30px]">
            <h4 className="flex flex-col w-5/6 mx-auto items-center md:w-full md:flex-row">
                SELFMADE RESPECT (SR)
                <span className="text-sm text-gray-400 md:ml-2">(Что это?)</span>
            </h4>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {listOfOptions.map(({color, name}) => (
                     <FrameOptions
                        key={name}
                        color={color}
                        name={name}
                     />
                ))}
            </div>
        </div>

        {/* foot */}

        <div className="flex flex-col items-center space-y-2 md:items-start md:px-5 md:py-5">
            <p className="font-semibold">
                Мой Диск
            </p>

            <div className="w-5/6 flex flex-col space-y-2 md:space-y-0 md:flex-row md:w-full md:space-x-4 md:items-center">
                <p className="text-center md:whitespace-nowrap">
                    Осталось
                    <span className="font-semibold ml-4">40/100 (mb)</span>
                </p>

                <div className="w-full">
                    <ProgressBar
                    completed={60}
                    customLabel='Добавить место'
                    bgColor={'#5D5FEF'}
                    labelAlignment={'left'}
                    baseBgColor={'#C7C8FF'}
                    labelSize='12px'
                    width='100%'
                    />
                </div>
             </div>
        </div>
    </div>
  )
}
