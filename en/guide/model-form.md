# 基于数据模型的表单

`Elegant\Utils\Form`类用于生成基于数据模型的表单，先来个例子，数据库中有`movies`表

```sql
movies
    id          - integer
    title       - string
    director    - integer
    describe    - string
    rate        - tinyint
    released    - enum(0, 1)
    release_at  - timestamp
    created_at  - timestamp
    updated_at  - timestamp
```

对应的数据模型为`App\Models\Movie`，下面的代码可以生成`movies`的数据表单：

```php
use App\Models\Movie;
use Elegant\Utils\Form;

$form = new Form(new Movie);

// 显示记录id
$form->display('id', 'ID');

// 添加text类型的input框
$form->text('title', '电影标题');

$directors = [
    1 => 'John',
    2 => 'Smith',
    3 => 'Kate' ,
];

$form->select('director', '导演')->options($directors);

// 添加describe的textarea输入框
$form->textarea('describe', '简介');

// 数字输入框
$form->number('rate', '打分');

// 添加开关操作
$form->switch('released', '发布？');

// 添加日期时间选择框
$form->dateTime('release_at', '发布时间');

// 两个时间显示
$form->display('created_at', '创建时间');
$form->display('updated_at', '修改时间');
```

## 自定义工具

表单右上角默认有返回和跳转列表两个按钮工具, 可以使用下面的方式修改它:

```php
$form->tools(function (Form\Tools $tools) {

    // 去掉`列表`按钮
    $tools->disableList();

    // 去掉`删除`按钮
    $tools->disableDelete();

    // 去掉`查看`按钮
    $tools->disableView();

    // 添加一个按钮, 参数可以是字符串, 或者实现了Renderable或Htmlable接口的对象实例
    $tools->add('<a class="btn btn-sm btn-danger"><i class="fa fa-trash"></i>&nbsp;&nbsp;delete</a>');
});
```

## 表单脚部

使用下面的方法去掉form脚部的元素

```php
$form->footer(function ($footer) {

    // 去掉`重置`按钮
    $footer->disableReset();

    // 去掉`提交`按钮
    $footer->disableSubmit();

    // 去掉`查看`checkbox
    $footer->disableViewCheck();

    // 去掉`继续编辑`checkbox
    $footer->disableEditingCheck();

    // 去掉`继续创建`checkbox
    $footer->disableCreatingCheck();

});
```

## 其它方法

去掉提交按钮:

```php
$form->disableSubmit();
```

去掉重置按钮:

```php
$form->disableReset();
```

忽略掉不需要保存的字段

```php
$form->ignore(['column1', 'column2', 'column3']);
```

设置宽度

```php
$form->setWidth(10, 2);
```

设置表单提交的action

```php
$form->setAction('admin/users');
```

判断当前表单页是创建页面还是更新页面

```php
$form->isCreating();

$form->isEditing();
```

提交确认

```php
$form->confirm('确定更新吗？', 'edit');

$form->confirm('确定创建吗？', 'create');

$form->confirm('确定提交吗？');
```
