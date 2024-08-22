# 语言本地化

laravel-admin安装完成之后，如果界面显示的文字还是英文，说明你的框架语言设置为英文，需要在`config/app.php`里面修改为中文：

```php
    'locale' => 'zh-CN',
```

## 表单验证错误本地化

如果表单验证错误文字显示的是英文，你需要安装校验语言包，可以参考[Laravel-lang](https://github.com/caouecs/Laravel-lang)中的文档安装。

## 控制器字段label

运行`admin:make`创建控制器之后，表格和表单的的label默认使用`__('Column name')`，如下：

```php
    $table->column('id', __('ID'));
    $table->column('name', __('Name'));
    $table->column('email', __('Email'));
    $table->column('created_at', __('Created at'));
    $table->column('updated_at', __('Updated at'));
```

你可以直接修改第二个参数为中文的字段label，但是最好的办法是去设置`字符串翻译`，到`lang`目录下新建`lang/zh-CN/admin.php`，增加对应的翻译：

```json
{
    "ID": "ID",
    "Created at":"创建时间",
    "Updated at":"更新时间",
    "name":"名字",
    "email":"邮箱"
}
```

这样的话，其它控制器也能复用这里的翻译。
