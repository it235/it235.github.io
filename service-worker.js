/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6cddf5ddcf98db6bbe9db39bfa244c28"
  },
  {
    "url": "assets/css/0.styles.d606c483.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922923.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7b234aa9.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.c11aa82a.js",
    "revision": "dc37edcddd78723e5e8852afd8badb13"
  },
  {
    "url": "assets/js/12.8efa05f2.js",
    "revision": "88b41cdeb0e5cc0f4684aa9c21c500ff"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.65fccb01.js",
    "revision": "a70ab1d3b6f8b1f3098fdd9a6b4a9937"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.8550f9f9.js",
    "revision": "373f14b9be1aa9a48128046bff34fae1"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.50e8c909.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.58c0ae37.js",
    "revision": "d2a0842fd33bb86abef9e31bb8e29134"
  },
  {
    "url": "assets/js/6.139f4253.js",
    "revision": "2a040f25d65412cf0e0ff391108c9896"
  },
  {
    "url": "assets/js/7.552da921.js",
    "revision": "17139daae679134f101d42a312ca4ee8"
  },
  {
    "url": "assets/js/8.c2467590.js",
    "revision": "423dc987dc2dfe89a5df9dcbef05cfaf"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.277cbd3d.js",
    "revision": "daea7a125b220a38056e84379c6e5a52"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "81426eedbf916c78d551a6be75a30712"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3b7129f1ab3fc080a021646a5a83e097"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0ec57dd7b12907216fc5725a88e5766d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "188beb601219b630eb766184de95491d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "70bf4c868ed3f293b78559b20f50a786"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e7fcf5493aab371f88a6ec9df1132e78"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c1c4b84dc74ae5d67caf1dccbe758b04"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6fd0576fb833bb3421d3007738eb4f4e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c9ae0f579d0bd8cb3540769d504e6424"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "921b990691aeef58d9905a77875c4845"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0b7ec23cc10041b9a991a26f50cf0999"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "04aa308678453da50344a2a7f84a8d21"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a95209312449ba507e176eecf42aeae1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6f8b6cc454a070d8013ef23897be087b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b8b94be8e281509048ca73647337c4c0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ef68ee098c2c610ea576ea9b141d622d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ca23e8c42981322ac2c5c3f97be53899"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "abfad7c3cc692695082e98878a4b20e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e08ee524dc99f0766f2a2f70bb6f39a"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f8b4a33e3ced46c2ebaa75c7ed03b04e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "cfde489abf31f4e5a7012fa6bde16c43"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0b2fdc161b5349393ec9114e3fd3eede"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ce3adac0cef715a656116074d5db9780"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4eb7bee1d79815979d020b33d8b73dc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
