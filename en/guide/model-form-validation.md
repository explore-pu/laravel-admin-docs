# 表单验证

`model-form`使用`Laravel`的验证规则来验证表单提交的数据：

```php
$form->text('title')->rules('required|min:3');

// 复杂的验证规则可以在回调里面实现
$form->text('title')->rules(function ($form) {
    // 如果不是编辑状态，则添加字段唯一验证
    if (!$id = $form->model()->id) {
        return 'unique:users,email_address';
    }
});
```

也可以给验证规则自定义错误提示消息：

```php
$form->text('code')->rules('required|regex:/^\d+$/|min:10', [
    'regex' => 'code必须全部为数字',
    'min'   => 'code不能少于10个字符',
]);
```

如果要允许字段为空，首先要在数据库的表里面对该字段设置为`NULL`，然后

```php
$form->text('title')->rules('nullable');
```

更多规则请参考[Validation](https://laravel.com/docs/8.x/validation).

## 创建页面规则

只在创建表单提交时生效

```php
$form->text('title')->creationRules('required|min:3');
```

## 更新页面规则

只在更新表单提交时生效

```php
$form->text('title')->updateRules('required|min:3');
```

## 数据库unique检查

一个比较常见的场景是提交表单是检查数据是否已经存在，可以使用下面的方式：

```php
$form->text('username')
    ->creationRules(['required', "unique:user_table"])
    ->updateRules(['required', "unique:user_table,username,{{id}}"]);
```
