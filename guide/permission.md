# 权限控制

`laravel-admin`内置了自动基于路由配置的`RBAC`权限控制模块，在用户、角色中可以进行相关操作，权限控制的使用如下：

> 下面以用户 `复制` 操作为例

## 设置路由

```php
$router->post('users/{user}/replicate', 'UserController@replicate')
    ->name('admin.users.replicate');
```

::: tip 重点
权限控制的重点是在路由中设置路由名称 `->name()`， 并且加上 `admin.`

`users` 是分组

`replicate` 是操作

解释：给用户复制操作加权限控制
:::

是的，就是这么简单，现在去用户、角色的控制面板看看效果吧，对了，记得设置翻译哦

## 设置方法

```php
namespace App\Admin\Controllers;
use Elegant\Utils\Controllers\AdminController;
use App\Models\User;

class UserController  extends AdminController
{
  public function replicate($id)
  {
      // 方法一，在这里执行逻辑（推荐使用，安全性高）
      try {
          $model = User::find($id);
          DB::transaction(function () use ($model) {
              $model->replicate()->save();
          });
      } catch (\Exception $exception) {
          return $this->response()->error("复制失败: {$exception->getMessage()}")->send();
      }

      return $this->response()->success('复制成功')->refresh()->send();

      // 方法二，去操作类中执行逻辑（存在安全风险，可未授权执行）
      return $this->handleAction();
  }
}
```

这样就完成了一个页面的权限控制。

## 设置操作类

```php
namespace App\Admin\Actions;
    
use Elegant\Utils\Actions\RowAction;
//use Elegant\Utils\Actions\TreeAction;// 模型树操作请继承此类
//use Elegant\Utils\Actions\NavAction;// 头部导航条操作请继承此类
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
    
class Replicate extends RowAction
{
    /**
     * @var string
     */
    protected $method = 'POST';

    /**
     * @return array|null|string
     */
    public function name()
    {
        return '复制';
    }

    /**
     * 如果是模型树和头部导航条操作，需要此方法
     * @return string
     */
    //protected function icon()
    //{
    //    return 'fa-bars';
    //}

    /**
     * 如果没有此方法，将不会有权限的控制
     * @return string
     */
    public function getHandleRoute()
    {
        // 这里配置路由的路径
        return "{$this->getResource()}/{$this->getKey()}/replicate";
    }

    /**
     * 这是方法二的逻辑
     * @param Model $model
     *
     * @return \Elegant\Utils\Actions\Response
     */
    //public function handle(Model $model)
    //{
    //    try {
    //        DB::transaction(function () use ($model) {
    //            $model->replicate()->save();
    //        });
    //    } catch (\Exception $exception) {
    //        return $this->response()->error("复制失败: {$exception->getMessage()}");
    //    }
    //
    //    return $this->response()->success("复制成功")->refresh();
    //}

    /**
     * @return void
     */
    public function dialog()
    {
        $this->question('确认复制？', '', ['confirmButtonColor' => '#d33']);
    }
}
```

## 相关方法

获取当前用户对象

```php
Admin::user();
```

获取当前用户id

```php
Admin::user()->id;
```

获取用户角色

```php
Admin::user()->roles;
```

获取用户的权限

```php
Admin::user()->permissions;
```

用户是否某个角色

```php
Admin::user()->isRole('developer');
```

是否有某个权限

```php
Admin::user()->can('create-post');
```

是否没有某个权限

```php
Admin::user()->cannot('delete-post');
```

是否是超级管理员

```php
Admin::user()->isAdministrator();
```

是否是其中的角色

```php
Admin::user()->inRoles(['editor', 'developer']);
```

## 权限中间件

可以在路由配置上结合权限中间件来控制路由的权限

```php
// 允许administrator、editor两个角色访问group里面的路由
Route::group([
    'middleware' => 'admin.permission:allow,administrator,editor',
], function ($router) {

    $router->resource('users', UserController::class);
    ...

});

// 禁止developer、operator两个角色访问group里面的路由
Route::group([
    'middleware' => 'admin.permission:deny,developer,operator',
], function ($router) {

    $router->resource('users', UserController::class);
    ...

});

// 有edit-post、create-post、delete-post三个权限的用户可以访问group里面的路由
Route::group([
    'middleware' => 'admin.permission:check,edit-post,create-post,delete-post',
], function ($router) {

    $router->resource('posts', PostController::class);
    ...

});
```

权限中间件和其它中间件使用方法一致。
