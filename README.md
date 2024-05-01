# Chrome_extension_template_modify_DOM

This Chrome extension inserts an icon of weather for the current day, inside gmail page.
The icon changes based on weather code, given by a free API call.

![alt text](https://github.com/adegard/Chrome_extension_template_modify_DOM/blob/main/Screenshot.png?raw=true)


Builder API from Open Meteo:
https://open-meteo.com/en/docs#latitude=45.5959&longitude=9.0757&hourly=weather_code&timezone=Europe%2FBerlin&forecast_days=1

weather icons
https://icon-icons.com/pack/Weather/3993

WMO Weather interpretation codes (WW)
Code 	Description
0 	Clear sky
1, 2, 3 	Mainly clear, partly cloudy, and overcast
45, 48 	Fog and depositing rime fog
51, 53, 55 	Drizzle: Light, moderate, and dense intensity
56, 57 	Freezing Drizzle: Light and dense intensity
61, 63, 65 	Rain: Slight, moderate and heavy intensity
66, 67 	Freezing Rain: Light and heavy intensity
71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
77 	Snow grains
80, 81, 82 	Rain showers: Slight, moderate, and violent
85, 86 	Snow showers slight and heavy
95 * 	Thunderstorm: Slight or moderate
96, 99 * 	Thunderstorm with slight and heavy hail
