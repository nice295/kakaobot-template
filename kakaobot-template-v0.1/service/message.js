/**
 * Created by cheese on 2017. 2. 10..
 */

let message = {};

message.buttons = [ "왕좌의 게임은 무엇인가?",
                    "왕좌의 게임에서 다음에 죽을 사람은?"];

message.buttonsType = () => {
    return {
        type: 'buttons',
        buttons: message.buttons
    }
};

message.baseType = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.baseTypeText = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'text',
        }
    }
};

message.photoType = (text, url_photo, label, url_button) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

message.messageButtonType = (text, label, url_button) => {
    return {
      message: {
        text: text,
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

module.exports = message;