# 快速开始

用`Laravel`自带的`users`表举例,表结构为：

```sql
users
    id          - integer
    name        - string
    email       - string
    password    - string
    created_at  - timestamp
    updated_at  - timestamp
```

对应的数据模型为文件 `App\User.php`

使用`laravel-admin`可以通过使用以下几步来快速生成`users`表的`CURD`操作页面：

## 创建控制器

使用下面的命令来创建一个`App\Models\User`模型对应的控制器

```shell
// Mac or Linux
php artisan admin:make UserController --model=App\\Models\\User

// Windows
php artisan admin:make UserController --model=App\Models\User
```

也可以使用`admin:controller`命令创建控制器：

```shell
php artisan admin:controller --model=App\Models\User
```

上面的命令会创建控制器文件`app/Admin/Controllers/UserController.php`.

## 添加路由

在路由配置文件`app/Admin/routes.php`里添加一行：

```php
Route::resource('users', 'UserController')->names('users');
```

## 添加菜单栏入口

打开菜单管理页 `http://localhost/auth/menus` 添加对应的menu, 然后就能在后台管理页面的左侧边栏看到用户管理页面的链接入口了。

> 如果要添加外部链接，只要填写完整的url即可，比如`https://laravel.com/`.

## 编写CURD页面逻辑

通过`admin:make`命令创建的控制器`app/Admin/Controllers/UserController.php`如下：

```php
<?php

namespace App\Admin\Controllers;

use App\Models\User;
use Elegant\Utils\Controllers\AdminController;
use Elegant\Utils\Form;
use Elegant\Utils\Table;
use Elegant\Utils\Show;

class UserController extends AdminController
{
    protected $title = 'Users';

    protected $model = User::class;

    protected function table()
    {
        $table = new Table(new $this->model());

        $table->column('id', __('Id'));
        $table->column('name', __('Name'));
        $table->column('email', __('Email'));
        $table->column('password', __('Password'));
        $table->column('created_at', __('Created at'));
        $table->column('updated_at', __('Updated at'));

        return $table;
    }

    protected function detail($id)
    {
        $show = new Show($this->model::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('email', __('Email'));
        $show->field('password', __('Password'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    protected function form()
    {
        $form = new Form(new $this->model());

        $form->textarea('name', __('Name'));
        $form->textarea('email', __('Email'));
        $form->textarea('password', __('Password'));

        return $form;
    }
}
```

`$title`属性用来设置这个CURD模块的标题，可以将它修改为任何其它的字符串。

`table`方法对应数据的`列表`页，参考[model-table 文档](/zh-CN/guide/model-table.md)来实现列表页的相关功能逻辑。

`detail`方法对应数据的`详情`页，在列表页操作列的`详情显示`按钮点击进入，参考[model-show 文档](/zh-CN/guide/model-show.md)来实现详情页的相关功能逻辑。

`form`方法对应数据的`创建`和`编辑`页，参考[model-form 文档](/zh-CN/guide/model-form.md)来实现数据创建和编辑页的相关功能逻辑。
