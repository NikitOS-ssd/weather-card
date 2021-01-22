import React, {useEffect, useState} from 'react'
import './WeatherWidget.css'

const WeatherWidget = () => {

  const [temperature, setTemperature] = useState(0);
  const [isSnow, setSnow] = useState(false);
  const [isRain, setRain] = useState(false);
  const [isStrongWind, setStrongWind] = useState(false);

  useEffect(() => {
    console.log('Произошли изменения');
  }, [temperature,
    isSnow,
    isRain,
    isStrongWind,
  ]);

  return (
    <div className="weather-widget">
      <div className="weather-search">
        <input type="text" className="weather-serch_temperature" placeholder="Введите текующую температуру" value={temperature} onChange={event => setTemperature(event.target.value)} />
        <label>
          Идёт снег:
          <input type="checkbox" checked={isSnow} onChange={event => setSnow(event.target.checked)} />
        </label>
        <label>
          Идёт Дождь:
          <input type="checkbox" checked={isRain} onChange={event => setRain(event.target.checked)} />
        </label>
        <label>
          Сильный ветер:
          <input type="checkbox" checked={isStrongWind} onChange={event => setStrongWind(event.target.checked)} />
        </label>
      </div>
      
      <div className="weather-card">
        
      </div>

    </div>
  )
}

export default WeatherWidget;