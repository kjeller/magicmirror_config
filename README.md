# Run MM using display output (default)

`./start.sh`

# Run MM as webserver

`./start.sh server`

A web server should now be available on localhost:8080

# Module configurations

[comment]: # (Table needs to be flattened for code block to work)
<table>
<tbody>
<tr>
<th>Moule name</th>
<th>Config details</th>
</tr>
<tr>
<td>MMM-Vasttrafik-PublicTransport</td>
<td>
The following environment variables needs to be set for this module to work. 

```bash
# When config.js is generated from config.js.template
# this string is converted into a js array using Array.from()
VASTTRAFIK_STOP_ID="[ \"<stop id 0>\", \"<stop id 1>\" ]"
VASTTRAFIK_APP_KEY="<api key>"
VASTTRAFIK_APP_SEC="<api secret>"
```

</td>
</tr>
<tr>
<td>MMM-Weather-SMHI-Hourly</td>
<td>

Set latitude and longitude:

```js
config: {
    lon: "XX.XXXXXX",
    lat: "YY.YYYYYY",
}
```

</td>
</tbody>
</table>

