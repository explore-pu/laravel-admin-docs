import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.C61Lbh9p.js";const F=JSON.parse('{"title":"CSS / JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/frontend.md","filePath":"zh-CN/guide/frontend.md"}'),t={name:"zh-CN/guide/frontend.md"},e=n(`<h1 id="css-javascript" tabindex="-1">CSS / JavaScript <a class="header-anchor" href="#css-javascript" aria-label="Permalink to &quot;CSS / JavaScript&quot;">​</a></h1><h2 id="设置网站favicon" tabindex="-1">设置网站favicon <a class="header-anchor" href="#设置网站favicon" aria-label="Permalink to &quot;设置网站favicon&quot;">​</a></h2><p>在<code>app/Admin/bootstrap.php</code>加入下面的代码来设置网站的favicon：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Elegant\\Utils\\Admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">favicon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/your/favicon/path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="引入css和javascript文件" tabindex="-1">引入CSS和JavaScript文件 <a class="header-anchor" href="#引入css和javascript文件" aria-label="Permalink to &quot;引入CSS和JavaScript文件&quot;">​</a></h2><p>如果你需要引入CSS或者JavaScript文件，可以在<code>app/Admin/bootstrap.php</code>加入下面的代码：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">css</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/your/css/path/style.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/your/javascript/path/js.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>其中文件的路径为相对与<code>public</code>目录的路径，也支持引入外部文件：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://cdn.bootcss.com/vue/2.6.10/vue.min.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="页面插入js脚本代码" tabindex="-1">页面插入JS脚本代码 <a class="header-anchor" href="#页面插入js脚本代码" aria-label="Permalink to &quot;页面插入JS脚本代码&quot;">​</a></h2><p>如果你要在当前的页面加入一段JS脚本代码，可以使用<code>Admin::script()</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Elegant\\Utils\\Admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;console.log(&quot;hello world&quot;);&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这段代码可以在插入当前请求所运行到的代码文件的任何地方，比如表单项之间的一些联动效果，可以用插入JS脚本代码的方式来实现。</p><h2 id="页面插入css样式" tabindex="-1">页面插入CSS样式 <a class="header-anchor" href="#页面插入css样式" aria-label="Permalink to &quot;页面插入CSS样式&quot;">​</a></h2><p>如果你要在当前的页面加入一段CSS代码，可以使用<code>Admin::style()</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Elegant\\Utils\\Admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.form-control {margin-top: 10px;}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这段代码可以在插入当前请求所运行到的代码文件的任何地方。</p><h2 id="页面插入html代码" tabindex="-1">页面插入HTML代码 <a class="header-anchor" href="#页面插入html代码" aria-label="Permalink to &quot;页面插入HTML代码&quot;">​</a></h2><p>如果你要在当前的页面加入一段HTML代码，可以使用<code>Admin::html()</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Elegant\\Utils\\Admin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Admin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;template&gt;...&lt;/template&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这段代码可以在插入当前请求所运行到的代码文件的任何地方, 比如要在当前页面加入一些隐藏的HTML代码的时候，可以使用这个方法来实现。</p><h2 id="压缩css和javascript" tabindex="-1">压缩CSS和JavaScript <a class="header-anchor" href="#压缩css和javascript" aria-label="Permalink to &quot;压缩CSS和JavaScript&quot;">​</a></h2><p>这个功能用来将后台引入的本地CSS和JS压缩，以加快后台的页面访问速度。</p><blockquote><h5 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h5><p>这个功能依赖[<a href="https://github.com/matthiasmullie/minify" target="_blank" rel="noreferrer">matthiasmullie/minify]</a>作为压缩库，使用之前需要先安装好它：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matthiasmullie/minify</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div></blockquote><h2 id="压缩" tabindex="-1">压缩 <a class="header-anchor" href="#压缩" aria-label="Permalink to &quot;压缩&quot;">​</a></h2><p>然后在项目根目录运行命令<code>php artisan admin:minify</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin:minify</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CSS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minified:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/laravel-admin.min.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/laravel-admin.min.css</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Manifest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generated:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/minify-manifest.json</span></span></code></pre></div><p>这个命令会生成三个文件，查看后台页面源码就可以看到效果了。</p><h2 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to &quot;清理&quot;">​</a></h2><p>运行命令<code>php artisan admin:minify --clear</code>来清理掉上面生成的压缩文件，回到压缩之前的状态。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin:minify</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --clear</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cleared:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/laravel-admin.min.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/laravel-admin.min.css</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  vendor/laravel-admin/minify-manifest.json</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>对于从低版本更新上来的用户，需要在<code>config/admin.php</code>增加一项配置:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;minify_assets&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div>`,34),l=[e];function p(h,k,d,r,c,o){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{F as __pageData,y as default};
