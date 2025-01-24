import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OpenW from "../../assets/openweather.svg";
import BackAw from "../../assets/turn-back.png";
import axios from "axios";
import ProjectWrapper from "../wrapper/ProjectsWrapper";

type Condition = {
  main: { temp: number };
  name: string;
  weather: [{ icon: string }];
};
type Props = {
  onToggleProjectState: (value: boolean) => void;
};

const Weather = ({ onToggleProjectState }: Props) => {
  const [condition, setCondition] = useState<Condition | null>(null);
  const [city, setCity] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (!confirm) return;
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${confirm}&appid=ca5f5bc924cc214a4e3c01ee57b1799a&lang=pt-br&units=metric`
      )
      .then((response) => {
        setCondition(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [confirm]);

  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const confirmHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setConfirm(city);
  };

  return (
    <ProjectWrapper>
      <div className="flex items-center gap-20 m-6 ">
        <button
          onClick={() => {
            onToggleProjectState(true);
          }}
          className="w-6"
        >
          <img src={BackAw} alt="Back button" />
        </button>
        <img src={OpenW} alt="OpenWeatherIcon" className="mx-auto"/>
      </div>
      <div>
        <form className="flex flex-col md:flex-row gap-8 m-6 justify-around">
          <input
            type="text"
            onChange={cityHandler}
            className="bg-transparent border-b focus:border-accent outline-none placeholder:text-white"
            placeholder={t("pwtext")}
          />
          <button className="btn btn-lg font-bold m-5" onClick={confirmHandler}>
            {loading ? `${t("pwtext1")}` : `${t("pwtext2")}`}
          </button>
        </form>
      </div>
      <div>
        {error ? (
          <div>
            <p className="text-red-500 font-bold text-2xl text-center">
               {t("pwtext3")}
            </p>
          </div>
        ) : (
          condition && (
            <div className="flex items-center justify-center p-10">
              <div key={condition.name}>
                <h2>
                  {t("pwtext4")}
                  {condition.name}
                </h2>
                <span>
                  {t("pwtext5")}
                  {condition.main.temp}ºC
                </span>
              </div>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${condition.weather[0].icon}@2x.png`}
                  alt="Icon"
                />
              </div>
            </div>
          )
        )}
      </div>
    </ProjectWrapper>
  );
};

export default Weather;
