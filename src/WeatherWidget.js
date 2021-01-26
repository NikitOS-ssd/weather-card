import React, {useEffect, useState} from 'react'
import './WeatherWidget.css'

const WeatherWidget = () => {
  const [temperature, setTemperature] = useState(0);
  const [isSun, setSun] = useState(true);
  const [isCloud, setCloud] = useState(false);
  const [isRain, setRain] = useState(false);
  const [isStrongRain, setStrongRain] = useState(false);
  const [iconClasses, setClasses] = useState(['weather-icon', 'cloud', 'rain', 'strong']);

  useEffect(() => {
    isSun === true && setClasses(['weather-icon', 'sun'])
    isCloud === true && setClasses(['weather-icon', 'cloud'])
    isRain === true && setClasses(['weather-icon', 'cloud', 'rain'])
    isStrongRain === true && setClasses(['weather-icon', 'cloud', 'rain', 'strong'])
    
  }, [temperature,
    isSun,
    isCloud,
    isRain,
    isStrongRain,
  ]);

  return (
    <div className="weather-widget">
      <div className="weather-search">
        <input type="text" className="weather-serch_temperature" placeholder="Введите текующую температуру" value={temperature} onChange={event => {setTemperature(event.target.value)}} />
        <label>
          Солнечно:
          <input type="checkbox" checked={isSun} onChange={event => {
              setCloud(false)
              setRain(false)
              setStrongRain(false)
              setSun(event.target.checked)}
            } />
        </label>
        <label>
          Идёт облачно:
          <input type="checkbox" checked={isCloud} onChange={event => {
              setSun(false)
              setCloud(event.target.checked)}
            } />
        </label>
        <label>
          Идёт дождь:
          <input type="checkbox" checked={isRain} onChange={event => setRain(event.target.checked)} />
        </label>
        <label>
          Идёт сильный дождь:
          <input type="checkbox" checked={isStrongRain} onChange={event => setStrongRain(event.target.checked)} />
        </label>
      </div>
      
      <div className="weather-card">
        <div className={iconClasses.join(' ')}></div>

        <h1 className="temperature">{temperature}°</h1>
        <p className="city">Moscow</p>
      </div>

    </div>
  )
}

export default WeatherWidget;