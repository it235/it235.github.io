import{_ as a,o as e,c as p,a as n,b as s}from"./app.75b474e0.js";const t={},o=n(`<p>\u5728 <code>vuepress-theme-reco@2.x</code> \u4E2D\uFF0C<code>\u5DE6\u4FA7\u8FB9\u680F\uFF08sideBar\uFF09</code> \u88AB\u66F4\u6539\u4E3A <code>\u7CFB\u5217\uFF08series\uFF09</code>\uFF0C\u7531\u4E24\u90E8\u5206\u539F\u56E0\uFF1A</p><ol><li>\u5728 <code>vuepress-theme-reco@1.x</code> \u4E2D\uFF0C\u4FA7\u8FB9\u680F\u88AB\u62C6\u5206\u4E3A\u4E86 <code>\u5DE6\u4FA7\u8FB9\u680F\uFF08sidebar\uFF09</code> \u548C <code>\u53F3\u4FA7\u8FB9\u680F\uFF08subSidebar\uFF09</code>\uFF0C\u591A\u4E2A\u6587\u6863\u53EF\u4EE5\u901A\u8FC7\u5DE6\u4FA7\u8FB9\u680F\u6765\u805A\u5408\u5728\u4E00\u8D77\uFF0C\u8868\u8FBE\u5B83\u4EEC\u4E4B\u95F4\u7684\u8054\u7CFB\uFF0C\u53F3\u4FA7\u8FB9\u680F\u5C55\u793A\u7684\u5219\u662F\u5F53\u524D\u9875\u9762\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u56E0\u4E3A\u8003\u8651\u5230 <code>vuepress</code> \u9ED8\u8BA4\u4E3B\u9898\u5C06\u4ED6\u4EEC\u90FD\u653E\u5728\u5DE6\u4FA7\u4FA7\u8FB9\u680F\u4F1A\u5C06\u5176\u8868\u73B0\u7684\u6CA1\u6709\u91CD\u70B9\uFF0C\u4F46\u662F\u901A\u8FC7 <code>sidebar</code> \u548C <code>subSidebar</code> \u6765\u8868\u793A <code>\u5DE6\u4FA7\u8FB9\u680F</code> \u548C <code>\u53F3\u4FA7\u8FB9\u680F</code>\uFF0C\u8BED\u610F\u5316\u53C8\u4E0D\u592A\u597D\uFF1B</li><li>\u8003\u8651\u5230\u9700\u8981\u653E\u5728\u4E00\u8D77\u7684\u6587\u6863\u4E00\u5B9A\u662F\u4E00\u4E2A \u201C\u7CFB\u5217\u201D \u6587\u6863\uFF0C\u6BD4\u5982\u6559\u7A0B\u3001\u6587\u96C6\u7B49\uFF0C\u6545\u91C7\u7528\u4E86 <code>series</code>\u3002</li></ol><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p><strong>\u666E\u901A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5206\u7EC4</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u57FA\u7840&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9AD8\u7EA7&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;series&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;comments&#39;</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5F02\u5E38</strong></p>`,8),c=s("div",{class:"custom-container warning"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8v4"}),s("path",{d:"M12 16h.01"})])]),s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"\u5982\u679C\u5DE6\u4FA7\u51FA\u73B0\u6587\u7AE0\u7684\u540D\u79F0\u663E\u793A\u6210\u4E86\u6587\u6863\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u628A children \u53D8\u4E3A\u5B8C\u6574\u6A21\u5F0F\u3002")],-1),i=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7701\u7565\u6A21\u5F0F</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B8C\u6574\u6A21\u5F0F</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;/vuepress-theme-reco/introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/vuepress-theme-reco/usage&#39;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[o,c,i];function l(u,d){return e(),p("div",null,r)}const k=a(t,[["render",l],["__file","series.html.vue"]]);export{k as default};