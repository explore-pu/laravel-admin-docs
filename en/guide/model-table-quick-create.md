# 快捷创建

在表格中开启这个功能之后，会在表格头部增加一个form表单来创建数据，对于一些简单的表格页面，可以方便快速创建数据，不用跳转到创建页面操作

![WX20190722-004700@2x](https://user-images.githubusercontent.com/1479100/61594099-4b105700-ac1a-11e9-864a-6c5ee2312b78.png)

开启方式：

```php
$table->quickCreate(function (Table\Tools\QuickCreate $create) {
    $create->text('name', '名称');
    $create->email('email', '邮箱');
});
```

> 需要注意的是，快捷创建表单中的每一项，在form表单页面要设置相同类型的表单项。

表单支持的表单项有下面的几种类型

## 文本输入框

文本输入框

```php
$create->text('column_name', 'placeholder...');
```

## 邮箱输入框

邮箱输入框

```php
$create->email('column_name', 'placeholder...');
```

## IP输入框

ip地址输入框

```php
$create->ip('column_name', 'placeholder...');
```

## URL输入框

url输入框

```php
$create->url('column_name', 'placeholder...');
```

## 密码输入框

密码输入框

```php
$create->password('column_name', 'placeholder...');
```

## 手机号输入框

手机号输入框

```php
$create->mobile('column_name', 'placeholder...');
```

## 整数输入框

整形数字输入框

```php
$create->integer('column_name', 'placeholder...');
```

## 单选框

单选框

```php
$create->select('column_name', 'placeholder...')->options([
    1 => 'foo',
    2 => 'bar',
]);
```

## 多选框

多选框

```php
$create->multipleSelect('column_name', 'placeholder...')->options([
    1 => 'foo',
    2 => 'bar',
]);
```

## 日期时间选择

时间日期输入框

```php
$create->datetime('column_name', 'placeholder...');
```

## 时间选择

时间输入框

```php
$create->time('column_name', 'placeholder...');
```

## 日期选择

```php
$create->date('column_name', 'placeholder...');
```
