# 快捷搜索

`快捷搜索`是除了`filter`之外的另一个表格数据搜索方式，用来快速过滤你想要的数据，开启方式如下：

```php
$table->quickSearch();
```

这样表头会出现一个搜索框:

![WX20190608-093334](https://user-images.githubusercontent.com/1479100/59140479-8e976480-89d0-11e9-8496-db958c012128.png)

通过给`quickSearch`方法传入不同的参数，来设置不同的搜索方式，有下面几种使用方法

## Like搜索

第一种方式，通过设置字段名称来进行简单的`like`查询

```php
$table->quickSearch('title');

// 提交后模型会执行下面的查询

$model->where('title', 'like', "%{$input}%");
```

或者对多个字段做`like`查询:

```php
$table->quickSearch('title', 'desc', 'content');

// 提交后模型会执行下面的查询

$model->where('title', 'like', "%{$input}%")
    ->orWhere('desc', 'like', "%{$input}%")
    ->orWhere('content', 'like', "%{$input}%");
```

## 自定义搜索

第二种方式可以让你更灵活的控制搜索条件

```php
$table->quickSearch(function ($model, $query) {
    $model->where('title', $query)->orWhere('desc', 'like', "%{$query}%");
});
```

其中闭包的参数`$query`为你填入搜索框中的内容，提交之后进行闭包中的查询。

## 快捷语法搜索

第三种方式参考了`Github`的搜索语法，来进行快捷搜索，调用方式：

```php
// 不传参数
$table->quickSearch();
```

填入搜索框的内容按照以下的语法，在提交之后会进行相应的查询 :

## 比较查询

```php
// title:foo
$model->where('title', 'foo');
// title:!foo
$model->where('title', '!=', 'foo');
// rate:>10
$model->where('rate', '>', 10);
// rate:<10
$model->where('rate', '<', 10);
// rate:>=10
$model->where('rate', '>=', 10);
// rate:<=10
$model->where('rate', '<=', 10);
```

## In、NotIn查询

```php
// status:(1,2,3,4)
$model->whereIn('status', [1,2,3,4]);
// status:!(1,2,3,4)
$model->whereNotIn('status', [1,2,3,4]);
```

## Between查询

```php
// score:[1,10]
$model->whereBetween('score', [1, 10]);
```

## 时间日期函数查询

```php
// created_at:date,2019-06-08
$model->whereDate('created_at', '2019-06-08');
// created_at:time,09:57:45
$model->whereTime('created_at', '09:57:45');
// created_at:day,08
$model->whereDay('created_at', '08');
// created_at:month,06
$model->whereMonth('created_at', '06');
// created_at:year,2019
$model->whereYear('created_at', '2019');
```

## Like查询

```php
// content:%Laudantium%
$model->where('content', 'like', 'Laudantium');
```

## 正则查询

```php
// username:/song/
$model->where('username', 'REGEXP', 'song');
```

> 这里请使用MYSQL正则语法

## 多条件组合搜索

用逗号隔开多个搜索语句就可以实现多个字段的AND查询，比如`username:%song% status:(1,2,3)`, 提交之后会运行下面的搜索

```php
$model->where('username', 'like', '%song%')->whereIn('status', [1, 2, 3]);
```

如果某一个条件是`OR`查询, 只需要在语句单元前增加一个`|`符号即可： `username:%song% |status:(1,2,3)`

```php
$model->where('username', 'like', '%song%')->orWhereIn('status', [1, 2, 3]);
```

如果填入的查询文字中包含空格，需要放在双引号里面：`updated_at:"2019-06-08 09:57:45"`

## Label作为查询字段名称

不方便得到字段名的情况下，可以直接使用`label`名称作为查询字段

```php
// 比如设置了`user_status`的表头列名为`用户状态`
$table->column('user_status', '用户状态');
```

那么可以填入`用户状态:(1,2,3)`来执行下面的查询

```php
$model->whereIn('user_status', [1, 2, 3]);
```
