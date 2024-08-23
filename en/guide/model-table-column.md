# 列的基本使用

`model-table`内置了很多对于列的操作方法，可以通过这些方法很灵活的操作列数据。

## 列属性

列对象的`setAttributes()`方法用来给当前这一列的每一行添加HTML属性, 比较有用的一个场景是给当前列增加样式

```php
$table->column('title')->setAttributes(['style' => 'color:red;']);
```

基于`setAttributes()`方法封装了`style()`方法，直接添加样式，比如限制列的宽度：

```php
$table->column('desc')->style('max-width:200px;word-break:break-all;');
```

## 固定列

如果表格的字段比较多，挤压了列的显示，可以用过`fixColumns`方法来设置固定列

```php
$table->fixColumns(3, -2);
```

第一个参数表示固定从头开始的前三列，第二个参数表示固定从后往前数的两列，（第二个参数可不传，默认为-1）

## 设置列宽

```php
$table->column('title')->width(200);
```

## 设置列颜色

```php
$table->column('title')->color('#ffff00');
```

## 设置表头帮助信息

```php
$table->column('title')->help('这一列是...');
```

这一列的表头标题右边会出现一个问号问号icon，鼠标hover上去会弹出设置的help信息。

## 默认隐藏列

```php
$table->column('created_at')->hide();
```

这一列默认会被隐藏，可以在右上角的列选择器开启显示

## 列排序

使用`sortable()`方法把当前列设置为可排序列

```php
$table->column('created_at')->sortable();
```

这样列头部就会出现一个排序icon, 点击进行排序

## 字符串操作

如果当前里的输出数据为字符串，那么可以通过链式方法调用`Illuminate\Support\Str`的方法。

比如有如下一列，显示`title`字段的字符串值:

```php
$table->column('title');
```

在`title`列输出的字符串基础上调用`Str::limit()`方法

```php
$table->column('title')->limit(30);
```

调用方法之后输出的还是字符串，所以可以继续调用`Illuminate\Support\Str`的方法：

```php
$table->column('title')->limit(30)->ucfirst();

$table->column('title')->limit(30)->ucfirst()->substr(1, 10);
```

## 数组操作

如果当前列输出的是数组，可以直接链式调用`Illuminate\Support\Collection`方法。

比如`tags`列是从一对多关系取出来的数组数据：

```php
$table->column('tags');

array (
  0 =>
  array (
    'id' => '16',
    'name' => 'php',
    'created_at' => '2016-11-13 14:03:03',
    'updated_at' => '2016-12-25 04:29:35',
  ),
  1 =>
  array (
    'id' => '17',
    'name' => 'python',
    'created_at' => '2016-11-13 14:03:09',
    'updated_at' => '2016-12-25 04:30:27',
  ),
)
```

调用`Collection::pluck()`方法取出数组的中的`name`列

```php
$table->column('tags')->pluck('name');

array (
    0 => 'php',
    1 => 'python',
  ),
```

取出`name`列之后输出的还是数组，还能继续调用用`Illuminate\Support\Collection`的方法

```php
$table->column('tags')->pluck('name')->map('ucwords');

array (
    0 => 'Php',
    1 => 'Python',
  ),
```

将数组输出为字符串

```php
$table->column('tags')->pluck('name')->map('ucwords')->implode('-');

// "Php-Python"
```

## 混合使用

在上面两种类型的方法调用中，只要上一步输出的是确定类型的值，便可以调用类型对应的方法，所以可以很灵活的混合使用。

比如`images`字段是存储多图片地址数组的JSON格式字符串类型：

```php
$table->column('images');

"['foo.jpg', 'bar.png']"

// 链式方法调用来显示多图
$table->column('images')->display(function ($images) {

    return json_decode($images, true);

})->map(function ($path) {

    return 'http://localhost/images/'. $path;

})->image();
```

## 扩展列功能

可以通过两种方式扩展列功能，第一种是通过匿名函数的方式。

在`app/Admin/bootstrap.php`加入以下代码:

```php
use Elegant\Utils\Table\Column;

Column::extend('color', function ($value, $color) {
    return "<span style='color: $color'>$value</span>";
});
```

然后在`model-table`中使用这个扩展：

```php
$table->column('title')->color('#ccc');
```

如果列显示逻辑比较复杂，可以通过扩展类来实现。

扩展类`app/Admin/Extensions/Popover.php`:

```php
<?php

namespace App\Admin\Extensions;

use Elegant\Utils\Admin;
use Elegant\Utils\Table\Displayers\AbstractDisplayer;

class Popover extends AbstractDisplayer
{
    public function display($placement = 'left')
    {
        Admin::script("$('[data-toggle=\"popover\"]').popover()");

        return <<<EOT
<button type="button"
    class="btn btn-secondary"
    title="popover"
    data-container="body"
    data-toggle="popover"
    data-placement="$placement"
    data-content="{$this->value}"
    >
  弹出提示
</button>

EOT;

    }
}
```

然后在`app/Admin/bootstrap.php`注册扩展类：

```php
use Elegant\Utils\Table\Column;
use App\Admin\Extensions\Popover;

Column::extend('popover', Popover::class);
```

然后就能在`model-table`中使用了：

```php
$table->desciption()->popover('right');
```
