import { useEffect, useState } from "react"
import OpenW from '../../assets/openweather.svg'
import axios from "axios"

type Condition = {
    main:{temp:number};
    name: string;
    weather:[{icon:string}]
}

const Weather = () => {
    const [condition,setCondition] = useState<Condition | null>(null)
    const [city,setCity] = useState('')
    const [confirm,setConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

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
    <div className="flex-col border rounded-2xl flex items-center justify-center w-11/12 h-[300px]">
        <div>
            <img src={OpenW} alt="OpenWeatherIcon" className="flex-1" />
        </div>
        <div>
            <form className="flex flex-1 gap-2  rounded-2xl p-6" >
                <input type="text" onChange={cityHandler} className="bg-transparent border-b focus:border-accent outline-none placeholder:text-white" placeholder="Sua cidade" />
                <button className="btn btn-lg font-bold" onClick={confirmHandler}>{loading ? 'Pesquisando...' : 'Pesquisar'}</button>
            </form>
        </div>
        <div>
            {error ? (
                <div>
                    <p className="text-red-500 font-bold text-2xl text-center">{error} Verifique a cidade e tente novamente.</p>
                </div>
            ) : (condition &&
                    <div className="flex  rounded-xl items-center">
                        <div key={condition.name}>
                        <h2>Cidade: {condition.name}</h2>
                        <span>Temperatura: {condition.main.temp}ºC</span>
                        </div>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${condition.weather[0].icon}@2x.png`} alt="Icone" />
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Weather