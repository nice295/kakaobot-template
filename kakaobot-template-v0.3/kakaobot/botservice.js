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
    case "왕좌의 게임은 무엇인가?":
      callback(null, message.baseType("왕좌의 게임은 미국드라마입니다."));
      break;

    case "왕좌의 게임에서 다음에 죽을 사람은?":
      //callback(null, message.baseType("당신입니다."));
      callback(null, message.photoType("다음에 죽을 사람은?", "https://s-i.huffpost.com/gen/5643294/thumbs/o-THE-570.jpg?7", "스노우 입니다.", "https://www.huffingtonpost.kr/2018/01/04/story_n_18936424.html") );
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