# node-red-contrib-netatmo-healthyhomecoach
A Netatmo healthy home coach node for Node-Red

This project is more than inspired by the one from @[ssadams11](https://github.com/ssadams11): [ssadams11/node-red-contrib-netatmo](https://github.com/ssadams11/node-red-contrib-netatmo). Thank a lot for the help.


# Installation

The installation is classical, using ```npm```:

```npm i node-red-contrib-netatmo-homecoach```

Restart then you ```node-red``` server.

# Installed nodes

## Get home coaches data

Once you provided the appropriate credentials, this node will send you back in the payload your home coaches data, as described in the Netatmo documentation: 

https://dev.netatmo.com/dev/resources/technical/reference/healthyhomecoach/gethomecoachsdata

### Result sample
```
{
    "body": {
        "devices": [
            {
                "_id": "70:ee:50:XX:XX:XX",
                "cipher_id": "enc:16:LONGSTRINGHERE",
                "last_status_store": 1487337735,
                "modules": [],
                "place": {
                    "city": "Somewhere",
                    "country": "XX",
                    "timezone": "Continent/City",
                    "location": [
                        0.0,
                        0.0
                    ]
                },
                "type": "NHC",
                "dashboard_data": {
                    "AbsolutePressure": 1022.5,
                    "time_utc": 1487337735,
                    "health_idx": 0,
                    "Noise": 37,
                    "Temperature": 18.5,
                    "temp_trend": "up",
                    "Humidity": 49,
                    "Pressure": 1022.5,
                    "pressure_trend": "stable",
                    "CO2": 367,
                    "date_max_temp": 1487337735,
                    "date_min_temp": 1487293688,
                    "min_temp": 14.4,
                    "max_temp": 18.5
                },
                "data_type": [
                    "Temperature",
                    "CO2",
                    "Humidity",
                    "Noise",
                    "Pressure",
                    "health_idx"
                ],
                "co2_calibrating": false,
                "date_setup": 1481469041,
                "last_setup": 1481469041,
                "firmware": 36,
                "last_upgrade": 1484658269,
                "wifi_status": 57,
                "name": "Home Coached Room"
            }
        ],
        "user": {
            "mail": "someone@womewhere.com",
            "administrative": {
                "reg_locale": "fr-BE",
                "lang": "fr-FR",
                "unit": 0,
                "windunit": 0,
                "pressureunit": 0,
                "feel_like_algo": 0
            }
        }
    },
    "status": "ok",
    "time_exec": 0.038679122924805,
    "time_server": 1487337795
}```
