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
    "revision": "9be77a15f0b4de6f13240a2228bc47dd"
  },
  {
    "url": "assets/css/0.styles.d606c483.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
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
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
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
    "url": "assets/js/app.ff79a4f0.js",
    "revision": "4e8661b417ab66802516b8c9fc561236"
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
    "revision": "926208d7c8235434c41586320eef17bc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cf0db1b704f284f1d0cc8c8a106a1cc0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7cb46897e68a7848085d54a25837e319"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fa67b8b55dfced8828bfa45b8c247415"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8a624ea49e2bcecd639545c90138123c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "90b46303a2f90c075d3b90f44c201b3d"
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
    "revision": "2dbd504f5ccbbe4fb6571852f97e3cac"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e5d1a86c847c86a984b5576db3310086"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ed03de8a9b23378d50a1e325d049c85f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cb75e8dce98b4a74e12f191b2082e983"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b4cd757c2088ab16411f0e933763d68c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9e451b089f23a480422b9092b96362e9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7d3e689ab761c3bdbf29576e4fdc122b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fcefec03d9103e2e64512336f12a2a5e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "80ea3566aefc88e1d0c71f3c36c47df6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b773198baab7aae81a86732488a820ff"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "568c6ca253740268b922dd5580eb4f85"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fce946341000a21e6268cbc4e5754e09"
  },
  {
    "url": "timeline/index.html",
    "revision": "c98eb2088c99e7a1ec803c2753c084c9"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c4dfec29531695f5395b71183c1ac4b8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7939300086bf5b6a9876de13192f0af3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0b7e97f4350e87f3d7d8dc9beeddf975"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2d8de1b7185d37a1137f301d1303b80d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "84a7e7f09c465f5a2f4454f2b89c7ce9"
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
