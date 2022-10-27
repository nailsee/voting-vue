// 判断是否微信环境

export const isWXBrowser = (() => {

    const ua = window.navigator.userAgent.toLowerCase()

    return /(micromessenger|webbrowser)/g.test(ua)

    })()


    import axios from 'axios'
    // 判断是否为微信环境
    export const isWechat = () => {
      return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
    }
    export const getUrlCode = () => {
      // 截取url中的code方法
      var url = location.search;
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
      }
      return theRequest;
    }
    export const getWechatCode = () => {
        if (isWechat) { //    wx9ac3136b83da4dc4
          let appid = "wx1b8a3e3ffa15e39d"; //微信APPid
          let code = getUrlCode().code; //是否存在code
          let local = window.location.href;
          // let local = 'https://********';
          if (code == null || code === "") {
            //不存在就打开上面的地址进行授权
            window.location.href =
              "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
              appid +
              "&redirect_uri=" +
              encodeURIComponent(local) +
              "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          } else {
              localStorage.setItem('code', code)
              // localStorage.code = code
                console.log('获取到的用户code')
                console.log(code)
            // 拿到code之后就要范湖给后台 让后台返回对应的account_token和openid,尽量使用account_token 这个的刷新时间是两个小时，openid暴露出来不太好,拿到token之后就处理相关的业务逻辑
          }
        }
    //   })
    };
