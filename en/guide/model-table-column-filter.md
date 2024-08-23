# 列过滤器

这个功能在表头给相应的列设置一个过滤器，可以更方便的根据这一列进行数据表格过滤操作

![WX20190623-190256](https://user-images.githubusercontent.com/1479100/59975300-843cb380-95e9-11e9-9479-bf3f7329cffb.png)

过滤器有下面三类形式：

## 字符串比较查询

```php
$table->column('code')->filter();
```

上面的调用可以给`code`这一列的头部加上一个`input`类型的过滤器，点击过滤器icon展开过滤器，输入查询提交后，会对这一列执行`等于`查询。

如果需要like查询:

```php
$table->column('title')->filter('like');
```

![WX20190623-192038](https://user-images.githubusercontent.com/1479100/59975592-3ecdb580-95ec-11e9-94f5-a6d5a33fb889.png)

如果字段是时间、日期相关的字段，可以使用下面的方法

```php
$table->column('date')->filter('date');

$table->column('time')->filter('time');

$table->column('datetime')->filter('datetime');
```

## 多选查询

假设需要在表格数据中通过`status`字段过滤一个或者多个状态的数据，使用`多选过滤`可以非常方便的实现

```php
$table->column('status', '状态')->filter([
    0 => '未知',
    1 => '已下单',
    2 => '已付款',
    3 => '已取消',
]);
```

![WX20190623-192234](https://user-images.githubusercontent.com/1479100/59975605-79cfe900-95ec-11e9-8d29-c4d169d9dcff.png)

## 范围查询

假设需要通过`price`字段过滤出某个价格范围内的数据

```php
$table->column('price', '价格')->filter('range');
```

![WX20190623-192707](https://user-images.githubusercontent.com/1479100/59975636-de8b4380-95ec-11e9-82f9-ddd45d05152f.png)

或者是时间、日期范围的过滤

```php
$table->column('date')->filter('range', 'date');

$table->column('time')->filter('range', 'time');

$table->column('datetime')->filter('range', 'datetime');
```

![WX20190623-192109](https://user-images.githubusercontent.com/1479100/59975593-3ecdb580-95ec-11e9-9cfc-32dbe27a175a.png)
