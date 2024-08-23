import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.C61Lbh9p.js";const g=JSON.parse('{"title":"版本升级","description":"","frontmatter":{},"headers":[],"relativePath":"guide/upgrading.md","filePath":"guide/upgrading.md"}'),l={name:"guide/upgrading.md"},n=e(`<h1 id="版本升级" tabindex="-1">版本升级 <a class="header-anchor" href="#版本升级" aria-label="Permalink to &quot;版本升级&quot;">​</a></h1><h2 id="查看当前版本" tabindex="-1">查看当前版本 <a class="header-anchor" href="#查看当前版本" aria-label="Permalink to &quot;查看当前版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils/laravel-admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span></span></code></pre></div><h2 id="更新到最新版本" tabindex="-1">更新到最新版本 <a class="header-anchor" href="#更新到最新版本" aria-label="Permalink to &quot;更新到最新版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils/laravel-admin</span></span></code></pre></div><h2 id="更新到开发版本" tabindex="-1">更新到开发版本 <a class="header-anchor" href="#更新到开发版本" aria-label="Permalink to &quot;更新到开发版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils/laravel-admin:dev-master</span></span></code></pre></div><h2 id="更新指定版本" tabindex="-1">更新指定版本 <a class="header-anchor" href="#更新指定版本" aria-label="Permalink to &quot;更新指定版本&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils/laravel-admin:1.0.3</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>由于每个版本的静态资源或者语言包都有可能会有更新，所以升级版本之后最好运行下面的命令</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 强制发布静态资源文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tag=laravel-admin-assets</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 强制发布语言包文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tag=laravel-admin-lang</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 清理视图缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view:clear</span></span></code></pre></div><p>最后不要忘记清理浏览器缓存</p>`,12),t=[n];function h(p,k,d,r,o,c){return i(),a("div",null,t)}const u=s(l,[["render",h]]);export{g as __pageData,u as default};
