/**
 * Created by cheese on 2017. 2. 9..
 */

const
  request = require('request'),
  cheerio = require('cheerio'),
  async = require('async'),
  message = require('../service/message'),
  Bot = {};

//const getApiai = require('../service/getApiai');
//const cache = require('memory-cache');

Bot.choseMenu = (req, content, callback) => {

  switch (content) {
    case "왕좌의 게임은 무엇인가?":
      callback(null, message.baseType("왕좌의 게임은 미국드라마입니다."));
      break;

    case "왕좌의 게임에서 다음에 죽을 사람은?":
      callback(null, message.baseType("당신입니다."));
      break;

    default:
      getApiai(content, function (data) {
        callback(null, message.baseTypeText(data));
      });
      break;
  }
};

module.exports = Bot;