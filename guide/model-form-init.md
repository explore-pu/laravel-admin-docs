# 表单初始化

表单的初始化设置功能用来全局设置表单。

比如你需要在所有的表单中，禁用掉某些操作，可以在`app/Admin/bootstrap.php`加入下面的代码：

```php
Form::init(function (Form $form) {

    $form->disableEditingCheck();

    $form->disableCreatingCheck();

    $form->disableViewCheck();

    $form->tools(function (Form\Tools $tools) {
        $tools->disableDelete();
        $tools->disableView();
        $tools->disableList();
    });
});
```

如果全局设置后，要在其中某一个表单中开启设置，比如开启显示`继续编辑`的checkbox，在对应的实例上调用`$form->disableEditingCheck(false);`就可以了