# Run MM using display output (default)

`./start.sh`

# Run MM as webserver

`./start server`

A web server should now be available on localhost:8080

# Secret format

To use MMM-Vasttrafik-PublicTransport the following environment variables needs to be set:
```
# When config.js is generated from config.js.template, this
# string is converted into a js array using Array.from()
VASTTRAFIK_STOP_ID="[ \"<stop id 0>\", \"<stop id 1>\" ]"
VASTTRAFIK_APP_KEY=<api key>
VASTTRAFIK_APP_SEC=<api secret>
```
