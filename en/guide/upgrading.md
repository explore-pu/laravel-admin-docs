# 版本升级

## 查看当前版本

```shell
composer show elegant-utils/laravel-admin

// or 

php artisan admin
```

## 更新到最新版本

```shell
composer update elegant-utils/laravel-admin
```

## 更新到开发版本

```shell
composer require elegant-utils/laravel-admin:dev-master
```

## 更新指定版本

```shell
composer update elegant-utils/laravel-admin:1.0.3
```

::: tip 注意
由于每个版本的静态资源或者语言包都有可能会有更新，所以升级版本之后最好运行下面的命令
:::

```shell
// 强制发布静态资源文件
php artisan vendor:publish --tag=laravel-admin-assets --force

// 强制发布语言包文件
php artisan vendor:publish --tag=laravel-admin-lang --force

// 清理视图缓存
php artisan view:clear
```

最后不要忘记清理浏览器缓存
