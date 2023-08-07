import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {
    const getWeatherData = async()=>{

        const res = await axios.get("https://visual-crossing-weather.p.rapidapi.com/history",{
            
                params: {
                    startDateTime: '2019-01-01T00:00:00',
                    aggregateHours: '24',
                    location: 'Ahmedabad,India',
                    endDateTime: '2019-01-03T00:00:00',
                    unitGroup: 'us',
                    dayStartTime: '8:00:00',
                    contentType: 'csv',
                    dayEndTime: '17:00:00',
                    shortColumnNames: '0'
                  },
            headers: {
                'X-RapidAPI-Key': '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
              }
        })
        console.log(res)
    }
  return (
    <div>

        <button onClick={()=>{getWeatherData()}}>Get Weather Data</button>

    </div>
  )
}
