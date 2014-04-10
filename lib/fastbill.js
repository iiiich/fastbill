/*!
 * fastbill - node plugin
 *
 * Copyright(c) 2014 konexmedia, Hechingen, Germany
 *
 * Author:
 *     Robert Boeing <robert.boeing@konexmedia.com>
 *     give me a tweet if you like it @robertboeing
 *
 * MIT Licensed
 *
 */
'use strict';


var Client = require('node-rest-client').Client;
var _ = require('underscore');

//
// fastbill
//

var Fastbill = function (config) {
  var credentials = {
      user : config.user,
      password : config.password
  }

  this.config = {
      user : config.user,
      password : config.password,
      serviceUrl : "https://my.fastbill.com/api/1.0/api.php",
      headers: {"Content-Type": "application/json"} 
  };

  //authenticate and build our client
  this.client = new Client(credentials);
};

Fastbill.prototype = {

  //
  // get 
  //

  get: function (type, params, callback) {

    // build the fastbill styled Query
    params = {
      data: _.extend(params, {"SERVICE" : type + '.get'}),
      headers: this.config.headers
    };


    // use node-rest-client for communication
    this.client.post(this.config.serviceUrl, params, function(data, response){
      // parsed response body as js object
      var res = JSON.parse(data);

      // get first property of Response-OBJ and fire the callback!
      for (var props in res.RESPONSE) {

        //if there is only one, no Array
        if(res.RESPONSE[props].length == 1){

          callback(res.RESPONSE[props][0]);

        } else {

          var resAry = []

          res.RESPONSE[props].forEach(function(e){
            resAry.push(e);
          });

          callback(resAry);
        }
        //break after first element
        break;
      };

    });
  }

};
module.exports = Fastbill;