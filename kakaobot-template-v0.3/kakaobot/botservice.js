/**
 * Created by cheese on 2017. 2. 9..
 */

const
  request = require('request'),
  cheerio = require('cheerio'),
  async = require('async'),
  message = require('../kakaobot/message'),
  Bot = {};

//const getApiai = require('../service/getApiai');
//const cache = require('memory-cache');

Bot.choseMenu = (req, content, callback) => {

  switch (content) {
    /* top */
    case "Text":
      callback(null, message.baseType("This is text."));
      break;

    case "Photo":
      //callback(null, message.baseType("당신입니다."));
      callback(null, message.photoTypeWithButtons("This is text", "https://placekitten.com/720/630", "This is label", "http://www.samsung.com/sec/", message.buttonsPhoto));
      break;

    /* Photo */
    case "Sub text":
      callback(null, message.baseTypeWithButtons("This is sub text.", message.buttonsPhoto));
      break;
      
    case "Go up":
      callback(null, message.baseType("This is home."));
      break;
      
    default:
      callback(null, message.baseType("알 수 없는 명령입니다."));
      /*
      getApiai(content, function (data) {
        callback(null, message.baseTypeText(data));
      });
      */
      break;
  }
};

module.exports = Bot;