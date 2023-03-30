import { E } from '@/library';
import { appHome } from '@/components';
const date = new Date();
export const weatherCard = (info) => {
  const weatherCard = E({
    tag: 'div',
    id: 'weatherCard',
    className:
      'bg-white mt-10 shadow-2xl shadow-purple-200 rounded-3xl dark:bg-slate-800 dark:text-white flex flex-col items-center overflow-hidden',
    child: [
      E({
        tag: 'img',
        // className:'shadow',
        src: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
      }),
      E({
        tag: 'div',
        className: 'flex w-full ',
        child: [
          E({
            tag: 'div',
            className: 'flex flex-1 py-4 bg-black w-full text-white items-center justify-evenly',
            child: [
              E({
                tag: 'p',
                className: 'text-center text-3xl font-semibold pl-10 ',
                child: Math.trunc(info.main.temp - 273.15) + '°C',
              }),
              E({
                tag: 'div',
                className: 'text-center px-12',
                child: [
                  E({
                    tag: 'p',
                    className: 'font-bold',
                    child: info.weather[0].main,
                  }),
                  E({
                    tag: 'div',
                    className: 'flex gap-1',
                    child: [
                      E({
                        tag: 'p',
                        className: '',
                        child: info.name,
                      }),
                      E({
                        tag: 'p',
                        className: '',
                        child: info.sys.country,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }), E({
            tag: 'p',
            className:'px-4 bg-cyan-500 grid place-items-center',
            child: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
          })
        ],
      }),
    ],
  });
  return weatherCard;
};
// [
//   E({
//   tag: 'div',
//   className: 'flex-1',
//   child: [E({
//     tag: 'p',
//     className:'text-sm pt-5',
//     child:info.sys.country
//   })
//   ,
//   E({
//     tag: 'p',
//     className:'font-bold text-2xl mb-6',
//       child:info.name
//     })
//   ,
//   E({
//     tag: 'p',
//     child:info.weather[0].main
//     })
//   ]
// }),
// E({
//   tag: 'div',
//   child: [
//     E({
//       tag: 'img',
//       src:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
//     }),
//     E({
//       tag: 'p',
//       className:'text-center font-semibold',
//       child:Math.trunc(info.main.temp-273.15) + '°C'
//       })
//   ]
// })
// ]
