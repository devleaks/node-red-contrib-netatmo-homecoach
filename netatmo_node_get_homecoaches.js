/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
mustache = require('mustache');
module.exports = function(RED) {
    "use strict";

    /***************************************************************/
    function NetatmoGetHealthyHomeCoachData(config) {

        RED.nodes.createNode(this,config);
        this.creds = RED.nodes.getNode(config.creds);
        var node = this;
        this.on('input', function(msg) {
            var netatmo = require('netatmo');

            var dateFormat = require('dateformat');

            var auth = {
                "client_id": this.creds.client_id,
                "client_secret": this.creds.client_secret,
                "username": this.creds.username,
                "password": this.creds.password
            };
            var api = new netatmo(auth);
            api.getHealthyHomeCoachData(function(err, devices) {
                console.log(dateFormat(new Date(), "dd mmm HH:MM:ss") + " - [info] [node-red-contrib-netatmo-healthyhomecoach] getHealthyHomeCoachData > OK");
                msg.payload = {devices:devices};
                node.send(msg);
            });

            api.on("error", function(error) {
                console.error(dateFormat(new Date(), "dd mmm HH:MM:ss") + ' - [error] [node-red-contrib-netatmo-healthyhomecoach] getHealthyHomeCoachData >' + error);
            });

            api.on("warning", function(warning) {
                console.error(dateFormat(new Date(), "dd mmm HH:MM:ss") + ' - [warning] [node-red-contrib-netatmo-healthyhomecoach] getHealthyHomeCoachData >' + warning);
            });

        });

    }
    RED.nodes.registerType("get home coaches data",NetatmoGetHealthyHomeCoachData);
};
