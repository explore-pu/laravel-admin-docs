# 安装

::: danger 警告
不要在旧项目中使用此包！不要在旧项目中使用此包！不要在旧项目中使用此包！

此包只能在单个表中进行认证，并且仅适用于独立的管理后端。

- 现代应用基本上是前后分离的，易于部署
- 管理端和用户端分开部署更安全
:::

首先确保安装好了`laravel`，并且数据库连接设置正确。

```shell
composer require elegant-utils/laravel-admin
```

然后运行下面的命令来发布资源
```shell
php artisan vendor:publish --provider="Elegant\Utils\AdminServiceProvider"
```

::: tip 注意
在该命令会生成配置文件`config/elegant-utils/admin.php`，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。
:::

然后运行安装命令，完成安装
```shell
php artisan admin:install
```

在浏览器打开 `http://localhost/` ,使用用户名 `admin` 和密码 `admin`登录

::: tip 注意
记得注释掉 `routes/web.php` 中的默认路由
:::

## 生成的文件

安装完成之后,会在项目目录中生成以下目录和文件:

```shell
ROOT
├── app
│   ├── Admin
│   │   ├── Controllers
│   │   │   ├── AuthController.php                        # 认证控制器
│   │   │   ├── AuthMenuController.php                    # 菜单管理控制器
│   │   │   ├── AuthUserController.php                    # 认证用户控制器
│   │   │   ├── ExampleController.php                     # 示例控制器
│   │   │   └── HomeController.php                        # 首页控制器
│   │   ├── bootstrap.php                                 # 启动文件
│   │   └── routes.php                                    # 路由文件
│   └── Models
│       ├── AuthMenu.php                                  # 菜单模型
│       └── AuthUser.php                                  # 认证用户模型
├── config
│   └── elegant-utils
│       └── admin.php                                     # 配置文件
├── database
│   ├── migrations
│   │   └── 2024_01_01_000001_create_admin_tables.php     # 迁移文件
│   └── Seeders
│       └── AdminTablesSeeder.php                         # 数据填充文件
├── lang                                                  # 翻译文件
├── public
│   └── vendor
│       └── laravel-admin                                 # 前端资源文件
```
