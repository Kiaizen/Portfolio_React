import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import OpenW from '../../assets/openweather.svg'
import BackAw from '../../assets/turn-back.png'
import axios from "axios"

type Condition = {
    main:{temp:number};
    name: string;
    weather:[{icon:string}]
}
type onSelectFunction = () => void;

const Weather = ({onSelect}: {onSelect: onSelectFunction }) => {
    const [condition,setCondition] = useState<Condition | null>(null)
    const [city,setCity] = useState('')
    const [confirm,setConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const { t } = useTranslation();

    useEffect(()=> {
        if(!confirm) return;
        setLoading(true);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${confirm}&appid=ca5f5bc924cc214a4e3c01ee57b1799a&lang=pt-br&units=metric`)
        .then((response) => {
            setCondition(response.data);
            setError(null);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    },[confirm])

    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    const confirmHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setConfirm(city)
    }

  return (
    <div className="flex-col border rounded-xl flex  w-11/12 h-72" >
        <div className="flex items-center justify-start gap-40">
            <button onClick={onSelect} className=" w-6 ml-5">
                <img src={BackAw} alt="Back button" />
            </button>
            <img src={OpenW} alt="OpenWeatherIcon" className="" />
        </div>
        <div>
            <form className="flex gap-2  rounded-2xl p-6 justify-center" >
                <input type="text" onChange={cityHandler} className="bg-transparent border-b focus:border-accent outline-none placeholder:text-white" placeholder={t('pwtext')} />
                <button className="btn btn-lg font-bold" onClick={confirmHandler}>{loading ? `${t('pwtext1')}` : `${t('pwtext2')}`}</button>
            </form>
        </div>
        <div>
            {error ? (
                <div>
                    <p className="text-red-500 font-bold text-2xl text-center">{error} {t('pwtext3')}</p>
                </div>
            ) : (condition &&
                    <div className="flex  rounded-xl items-center justify-center">
                        <div key={condition.name}>
                        <h2>{t('pwtext4')}{condition.name}</h2>
                        <span>{t('pwtext5')}{condition.main.temp}ºC</span>
                        </div>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${condition.weather[0].icon}@2x.png`} alt="Icon" />
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Weather