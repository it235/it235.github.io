import{_ as e,o as a,c as t,a as s,b as n,f as o}from"./app.75b474e0.js";const i={},c=s(`<p>\u4E3A\u4E86\u8282\u7EA6\u7528\u6237\u7684\u65F6\u95F4\u6210\u672C\uFF0C\u4E3B\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u4E3A markdown \u6587\u4EF6\u8BBE\u7F6E\u5206\u7C7B\uFF0C\u4E5F\u5C31\u662F\u5C06\u8BE5\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u7684\u540D\u79F0\u8BBE\u7F6E\u4E3A\u8BE5\u6587\u4EF6\u7684 frontmatter \u7684 categories \u7684\u503C\uFF0C\u4F46\u662F\u4EC5\u5BF9\u6587\u6863\u6839\u76EE\u5F55\u4E0B\u7684 blogs \u548C docs \u6587\u4EF6\u5939\u91CC\u7684 markdown \u6587\u4EF6\u6709\u6548\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u2514\u2500 .vuepress
\u2514\u2500 blogs
  \u2514\u2500 \u5206\u7C7B1
  \u2514\u2500 \u5206\u7C7B2
\u2514\u2500 docs
  \u2514\u2500 \u5206\u7C7B1
  \u2514\u2500 \u5206\u7C7B4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2>`,3),l=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[n("code",null,"autoAddCategoryToNavbar"),o(" API \u540E\u671F\u4F1A\u505A\u8C03\u6574\uFF0C\u4F46\u4E0D\u4F1A\u5E9F\u5F03\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\u3002")])],-1),r=s(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    autoSetBlogCategories<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// \u81EA\u52A8\u8BBE\u7F6E\u5206\u7C7B</span>
    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// \u81EA\u52A8\u5C06\u9996\u9875\u3001\u5206\u7C7B\u548C\u6807\u7B7E\u6DFB\u52A0\u81F3\u5934\u90E8\u5BFC\u822A\u6761</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[c,l,r];function d(u,v){return a(),t("div",null,p)}const k=e(i,[["render",d],["__file","auto-set-category.html.vue"]]);export{k as default};
