var localConfig = require('dotenv').config();

var config = {
	address: "0.0.0.0",
	port: 8080,
	ipWhitelist: [],

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	serverOnly:  true,

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "bottom_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-Vasttrafik-PublicTransport",
			position: "top_left",
			header: "Västtrafik",
			config: {
			     stopIds: [process.env.VASTTRAFIK_STOP_ID],
			     appKey: process.env.VASTTRAFIK_APP_KEY,
			     appSecret: process.env.VASTTRAFIK_APP_SEC,
			     debug: false,
			     sortBy: "track",
			     refreshRate: "20000",
			     trafficSituations: true,
			     board: {
				destination: {
				    maxPxWidth: 150
				}, 
			    },
			    showTrackNumbers: true,
			    showStopHeader: true,
			    showDestinationName: true, 
			    filterAttr: "track",
			    filterKey: "A",
			    enableDepartureTimeColors: false,
			}
		},
		{
      // TODO Change to google calendar sync
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "MMM-Weather-SMHI-Hourly",
			position: "top_right",
			header: "Väder",
			config: {
			lon: "11.96679",
			lat: "57.707161",
			hours: 12
			}
		},
    // TODO Add chaning background images at a fixed interval
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

