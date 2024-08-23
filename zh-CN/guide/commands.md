# 控制台命令

`laravel-admin`内置了几个控制台命令来帮助开发，安装好laravel-admin之后，就可以直接使用它们了

## artisan admin

使用`php artisan admin`命令可以显示当前`laravel-admin`的版本，以及列出所有可用的admin命令

```shell
$ php artisan admin
laravel-admin version v1.0.5

Available commands:
 admin:make              Make admin controller
 admin:controller        Make admin controller from giving model
 admin:menu              Show the admin menu
 admin:install           Install the admin package
 admin:publish           re-publish laravel-admin's assets, configuration, language and migration files. If you want overwrite the existing files, you can add the `--force` option
 admin:uninstall         Uninstall the admin package
 admin:import            Import a laravel-admin extension
 admin:create-user       Create a admin user
 admin:reset-password    Reset password for a specific admin user
 admin:extend            Build a laravel-admin extension
 admin:export-seed       Export seed a laravel-admin database tables menu, roles and permissions
 admin:minify            Minify the CSS and JS
 admin:form              Make admin form widget
 admin:permissions       generate admin permission base on table name
 admin:action            Make a admin action
 admin:generate-menu     Generate menu items based on registered routes.
 admin:config            Compare the difference between the admin config file and the original
```

## artisan admin:make

这个命令用来创建admin控制器，传入一个model，它会根据model对应表的字段，默认构建出所需的table，form和show三个页面的代码，

```shell
$ php artisan admin:make PostController --model=App\\Models\\Post

// 在windows系统中
$ php artisan admin:make PostController --model=App\Models\Post

App\Admin\Controllers\PostController created successfully.
```

然后打开`app/Admin/Controllers/PostController.php`, 就可以看到这个命令生成的代码了.

如果加上参数`--output`或者`-O`, 将会打印出代码，而不会创建控制器文件

## artisan admin:form

用来生成一个表单类

```shell
$ php artisan admin:form UserSetting --title=用户设置

App\Admin\Forms\UserSetting created successfully.
```

## artisan admin:install & artisan admin:uninstall

这两个命令分别用来安装和卸载laravel-admin包

## artisan admin:create-user

这个命令用来创建一个admin用户，用交互式的方式填写用户名和密码、并且选择角色之后，会创建一个可登录的用户

```shell
php artisan admin:create-user

Please enter a username to login:
>
```

## artisan admin:reset-password

这个命令用来给指定用户重置密码，根据命令的提示来操作

```shell
php artisan admin:reset-password

Please enter a username who needs to reset his password:
>
```

## artisan admin:import

这个命令用来在安装一个laravel-admin扩展之后，导入相关配置，具体的用法正在各个扩展的文档里面

## artisan admin:menu

这是个没什么卵用的命令，用来以json的格式列出左侧菜单数据
