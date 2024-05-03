//adegard @2024
//https://github.com/adegard/Chrome_extension_Weather_gmail

/*
Code Description
0 Clear sky
1, 2, 3 Mainly clear, partly cloudy, and overcast
45, 48 Fog and depositing rime fog
51, 53, 55 Drizzle: Light, moderate, and dense intensity
56, 57 Freezing Drizzle: Light and dense intensity
61, 63, 65 Rain: Slight, moderate and heavy intensity
66, 67 Freezing Rain: Light and heavy intensity
71, 73, 75 Snow fall: Slight, moderate, and heavy intensity
77 Snow grains
80, 81, 82 Rain showers: Slight, moderate, and violent
85, 86 Snow showers slight and heavy
95 * Thunderstorm: Slight or moderate
96, 99 * Thunderstorm with slight and heavy hail
*/

//insert image in DOM
function AddImage(imageurl, selector){
    if ( document.body.innerHTML.indexOf(imageurl) > -1) {
      console.log('Image exists. ');
      } else {
        console.log('Image does not exists.')
        waitForElementToExist(selector).then(element => {
	  console.log('The element exists', element);
		const image = document.createElement('img')
		image.src = imageurl;
		image.style.height = '50px';
		document.querySelector(selector).prepend(image)	  
	});

    }
}
//check if image exist (for future updates)
function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

//personalize with own Lat and Lon Geo coordinates:
let url ='https://api.open-meteo.com/v1/forecast?latitude=45.5959&longitude=9.0757&daily=weather_code&timezone=Europe%2FBerlin&forecast_days=1'

async function fetchData() {
  try {
    // Make an asynchronous request using fetch()
    const response = await fetch(url);
// Parse the response data as JSON
    const data = await response.json();
    // Log the retrieved data
    console.log(data);
    const ww = data.daily.weather_code;
	ww[0];

	  //list of weather codes vs icons (to be comleted):
	let dataww = {
	 "list": [
	   {"ww":"0","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/summer_sunny_sun_weather_forecast_sky_bright_icon_253959.png"},
	   {"ww":"1","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/cloud_weather_forecast_cloudy_sun_clouds_sky_summer_sunny_icon_253961.png"},
	   {"ww":"80","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/clouds_weather_forecast_rain_raindrop_rainy_cloudy_overcast_grey_icon_253974.png"},
	   {"ww":"95","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/grey_overcast_thunderstorm_lightning_raindrop_rainyy_rain_forecast_weather_icon_253976.png"},	   
	   {"ww":"61","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/cloud_weather_forecast_cloudy_sun_clouds_sky_summer_sunny_icon_253961.png"},
	   {"ww":"96","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/storm_thunderstorm_stormy_forecast_power_electricity_thunder_lightning_weather_icon_253971.png"},
	   {"ww":"99","urlico":"https://cdn.icon-icons.com/icons2/3993/PNG/512/storm_thunderstorm_stormy_forecast_power_electricity_thunder_lightning_weather_icon_253971.png"}
	]}

	let iconurl = dataww.list.find( record => record.ww === String(ww[0]))
	console.log(iconurl.urlico);
	// 👇️ using the function

	AddImage(iconurl.urlico,'.z0');
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
}
// Call the fetchData() function to initiate the asynchronous request
fetchData();





