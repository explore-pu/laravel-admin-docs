import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.C61Lbh9p.js";const y=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md"}'),l={name:"guide/install.md"},h=n(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">警告</p><p>不要在旧项目中使用此包！不要在旧项目中使用此包！不要在旧项目中使用此包！</p><p>此包只能在单个表中进行认证，并且仅适用于独立的管理后端。</p><ul><li>现代应用基本上是前后分离的，易于部署</li><li>管理端和用户端分开部署更安全</li></ul></div><p>首先确保安装好了<code>laravel</code>，并且数据库连接设置正确。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils/laravel-admin</span></span></code></pre></div><p>然后运行下面的命令来发布资源</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor:publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --provider=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Elegant\\Utils\\AdminServiceProvider&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>在该命令会生成配置文件<code>config/elegant-utils/admin.php</code>，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。</p></div><p>然后运行安装命令，完成安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin:install</span></span></code></pre></div><p>在浏览器打开 <code>http://localhost/</code> ,使用用户名 <code>admin</code> 和密码 <code>admin</code>登录</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>记得注释掉 <code>routes/web.php</code> 中的默认路由</p></div><h2 id="生成的文件" tabindex="-1">生成的文件 <a class="header-anchor" href="#生成的文件" aria-label="Permalink to &quot;生成的文件&quot;">​</a></h2><p>安装完成之后,会在项目目录中生成以下目录和文件:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ROOT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Admin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Controllers</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AuthController.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 认证控制器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AuthMenuController.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 菜单管理控制器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AuthUserController.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 认证用户控制器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ExampleController.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 示例控制器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HomeController.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 首页控制器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bootstrap.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                 # 启动文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> routes.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                    # 路由文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Models</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AuthMenu.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                  # 菜单模型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AuthUser.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                  # 认证用户模型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> elegant-utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                     # 配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2024_01_01_000001_create_admin_tables.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 迁移文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Seeders</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AdminTablesSeeder.php</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 数据填充文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lang</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                                  # 翻译文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vendor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel-admin</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                 # 前端资源文件</span></span></code></pre></div>`,14),p=[h];function t(k,e,F,d,r,g){return a(),i("div",null,p)}const o=s(l,[["render",t]]);export{y as __pageData,o as default};
