# 模型树

可以通过`model-tree`来实现一个树状组件，可以用拖拽的方式实现数据的层级、排序等操作，下面是基本的用法.

## 表结构和模型

要使用`model-tree`，要遵守约定的表结构：

```sql
categories
    id          - integer
    parent_id   - integer
    order       - integer
    title       - string
```

上面的表格结构里面有三个必要的字段`parent_id`、`order`、`title`,其它字段没有要求。

对应的模型为`app/Models/Category.php`:

```php
<?php

namespace App\Models\Demo;

use Elegant\Utils\Traits\ModelTree;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use ModelTree;

    protected $table = 'categories';
}
```

表结构中的三个字段`parent_id`、`order`、`title`的字段名也是可以修改的：

```php
<?php

namespace App\Models\Demo;

use Elegant\Utils\Traits\ModelTree;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use ModelTree;

    protected $table = 'categories';

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setParentColumn('pid');
        $this->setOrderColumn('sort');
        $this->setTitleColumn('name');
    }
}
```

## 使用方法

然后就是在页面中使用`model-tree`了：

```php
<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Elegant\Utils\Tree;
use Elegant\Utils\Layout\Content;

class CategoryController extends Controller
{
    public function index(Content $content)
    {
        $tree = new Tree(new Category);

        return $content
            ->header('树状模型')
            ->body($tree);
    }
}
```

可以通过下面的方式来修改行数据的显示：

```php
$tree->branch(function ($branch) {
    $src = config('admin.upload.host') . '/' . $branch['logo'] ;
    $logo = "<img src='$src' style='max-width:30px;max-height:30px' class='img'/>";

    return "{$branch['id']} - {$branch['title']} $logo";
});
```

在回调函数中返回的字符串类型数据，就是在树状组件中的每一行的显示内容，`$branch`参数是当前行的数据数组。

如果要修改模型的查询，用下面的方式

```php
$tree->query(function ($model) {
    return $model->where('type', 1);
});
```
