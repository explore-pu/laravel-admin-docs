# 详情扩展

这个功能用来扩展详情字段显示, 在内置的显示方法不满足需求的情况下，可以使用这个功能来实现

首先定义扩展类：

```php
<?php

namespace App\Admin\Extensions\Show;

use Elegant\Utils\Show\AbstractField;

class UnSerialize extends AbstractField
{
    public function render($arg = '')
    {
        // 返回任意可被渲染的内容
        return unserialize($this->value);
    }
}
```

然后在`app/Admin/bootstrap.php`中注册扩展类

```php
use Elegant\Utils\Show;
use App\Admin\Extensions\Show\UnSerialize;

Show::extend('unserialize', UnSerialize::class);
```

然后在控制器中使用这个扩展

```php
$show->column()->unserialize('xxx');
```

传入`unserialize()`方法的参数会按顺序传入`UnSerialize::render()`方法中。

在父类`Elegant\Utils\Show\AbstractField`中可以看到几个常用的属性

```php
    /**
     * Field value.
     *
     * @var  mixed
     */
    protected $value;

    /**
     * Current field model.
     *
     * @var  Model
     */
    protected $model;

    /**
     * If this field show with a border.
     *
     * @var  bool
     */
    public $border = true;

    /**
     * If this field show escaped contents.
     *
     * @var  bool
     */
    public $escape = true;
```

其中`$value`和`$model`分别是当前字段值和当前数据的模型，在`render()`方法中可以用来获取你想要的数据。

`$border`用来控制当前显示内容是否需要外边框，`$escape`分别用来设置当前显示内容要不要HTML转义。
