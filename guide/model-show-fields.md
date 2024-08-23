# 详情组件

## 分隔线

如果要在字段之间添加一条分隔线：

```php
$show->divider();
```

## 修改显示内容

用下面的方法修改显示内容

```php
$show->title()->as(function ($title) {
    return "<{$title}>";
});

$show->contents()->as(function ($content) {
    return "<pre>{$content}</pre>";
});
```

下面是通过`as`方法内置实现的几个常用的显示样式.

## image

字段`avatar`的内容是图片的路径或者url，可以将它显示为图片：

```php
$show->avatar()->image();
```

## file

字段`document`的内容是文件的路径或者url，可以将它显示为文件：

```php
$show->avatar()->file();
```

## link

字段`homepage`的内容是url链接，可以将它显示为HTML链接：

```php
$show->homepage()->link();
```

## label

将字段`tag`的内容显示为label：

```php
$show->tag()->label();
```

## badge

将字段`rate`的内容显示为badge：

```php
$show->rate()->badge();
```

## json

将字段`extra`的内容显示为json格式输出：

```php
$show->extra()->json();
```

## using

如果字段`gender`的取值为`f`、`m`，分别需要用`女`、`男`来显示

```php
$show->gender()->using(['f' => '女', 'm' => '男']);
```

## 图片轮播

如果字段值为图片数组，可以用下面的调用显示为图片轮播组件

```php
$show->field('images')->carousel();

// 设置显示尺寸和图片服务器
$show->field('images')->carousel($width = 300, int $height = 200, $server);
```

## 显示文件尺寸

如果字段数据是表示文件大小的字节数，可以通过调用`filezise`方法来显示更有可读性的文字

```php
$show->field('file_size')->filesize();
```

这样数值`199812019`将会显示为`190.56 MB`
