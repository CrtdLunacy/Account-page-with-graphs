import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RingProgress() {
  const [value, setValue] = useState({firstCirlde: 0, secondCircle: 0, thirdCircle: 0});

  useEffect(() => {
    const timer = setTimeout(() => {
        setValue({
            firstCirlde: 10,
            secondCircle: 50,
            thirdCircle: 100,
        })
    }, 1000)

    return () => clearTimeout(timer);
  }, [])


  return (
    <div className='bg-[#F0F0F0] rounded-3xl p-4 flex flex-col items-center justify-between w-5/6 mx-auto md:w-full'>
        <h4 className='text-2xl text-center'>
            Ваш SR
        </h4>

        <CircularProgressbarWithChildren
        value={value.firstCirlde}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: "#EF5DA8",
          trailColor: "#DDDDDD",
          rotation: 1 / 2,
          pathTransitionDuration: 5,
        })}
      >
        {/*
          Width here needs to be (100 - 2 * strokeWidth)%
          in order to fit exactly inside the outer progressbar.
        */}
        <div style={{ width: "84%" }}>
          <CircularProgressbarWithChildren
            value={value.thirdCircle}
            styles={buildStyles({
                pathColor: "#5D5FEF",
                trailColor: "#DDDDDD",
                pathTransitionDuration: 5,
            })}
            >
            <div style={{ width: '84%'}}>
                <CircularProgressbarWithChildren
                value={value.thirdCircle}
                styles={buildStyles({
                    pathColor: "#3AC49F",
                    trailColor: "#DDDDDD",
                    pathTransitionDuration: 5,
                })}
                >

                <div style={{ width: '84%'}}>
                    <CircularProgressbarWithChildren
                    value={value.secondCircle}
                    strokeWidth={8}
                    styles={buildStyles({
                        pathColor: "#F178B6",
                        trailColor: "#DDDDDD",
                        rotation: 1 / 2,
                        pathTransitionDuration: 5,
                    })}
                    >
                     <div style={{ width: '84%'}}>
                        <CircularProgressbarWithChildren
                        value={value.thirdCircle}
                        styles={buildStyles({
                            pathColor: "#A5A6F6",
                            trailColor: "#DDDDDD",
                            pathTransitionDuration: 5,
                        })}
                        >
                            <div className='flex flex-col items-center'>
                                <span className='text-[#EF5DA8]'>+10</span>
                                <span className='text-3xl text-[#5D5FEF] font-bold'>935</span>
                                <span className='text-lg text-[#717171]'>17849</span>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    </CircularProgressbarWithChildren>
                </div>

                </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>

      <div className='flex items-center space-x-1 text-[#717171]'>
        <span className='text-[#5D5FEF] text-lg'>74</span>/<span>134</span>
      </div>
    </div>
  )
}
