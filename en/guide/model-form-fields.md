# 表单组件

在`model-form`中内置了大量的form组件来帮助你快速的构建form表单

## 基础方法

#### 设置保存值

```php
$form->text('title')->value('text...');
```

#### 设置默认值

```php
$form->text('title')->default('text...');
```

#### 设置help信息

```php
$form->text('title')->help('help...');
```

#### 设置属性

```php
$form->text('title')->attribute(['data-title' => 'title...']);

$form->text('title')->attribute('data-title', 'title...');
```

#### 设置placeholder

```php
$form->text('title')->placeholder('请输入。。。');
```

#### 设置必填

```php
$form->text('title')->required();
```

#### 设置pattern

```php
$form->text('title')->pattern('[A-z]{3}');
```

#### 设置readonly

```php
$form->text('title')->readonly();
```

#### 设置disable

```php
$form->text('title')->disable();
```

#### 设置autofocus

```php
$form->text('title')->autofocus();
```

#### 标签页表单

如果表单元素太多,会导致form页面太长, 这种情况下可以使用tab来分隔form:

```php
$form->tab('Basic info', function ($form) {

    $form->text('username');
    $form->email('email');

})->tab('Profile', function ($form) {

   $form->image('avatar');
   $form->text('address');
   $form->mobile('phone');

})->tab('Jobs', function ($form) {
     $form->hasMany('jobs', function ($form) {
         $form->text('company');
         $form->date('start_date');
         $form->date('end_date');
     });
  });
```

#### 设置表单项组合

用来将表单项分组显示

```php
$form->fieldset('用户信息', function (Form $form) {
    $form->text('username');
    $form->email('email');
});
```

## 文本输入

![text](https://user-images.githubusercontent.com/1479100/82288328-d3938b80-99d4-11ea-91ec-4915d48d6057.png)

```php
$form->text($column, [$label]);

// 添加提交验证规则
$form->text($column, [$label])->rules('required|min:10');

// 设置FontAwesome图标
$form->text($column, [$label])->icon('fa-pencil');

// 设置datalist
$form->text($column, [$label])->datalist(['key' => 'value']);

// 设置inputmask, see https://github.com/RobinHerbots/Inputmask
$form->text('code')->inputmask(['mask' => '99-9999999']);
```

## Textarea输入

![textarea](https://user-images.githubusercontent.com/1479100/82288329-d3938b80-99d4-11ea-9066-41e163824995.png)

```php
$form->textarea($column[, $label])->rows(10);
```

## Radio选择

![radio](https://user-images.githubusercontent.com/1479100/82288325-d1c9c800-99d4-11ea-8403-90b0b73526bf.png)

```php
$form->radio($column[, $label])->options(['m' => 'Female', 'f'=> 'Male'])->default('m');

// 竖排
$form->radio($column[, $label])->options(['m' => 'Female', 'f'=> 'Male'])->stacked();
```

`Radio`组件有两个派生组件`RadioButton`和`RadioCard`, 以单选按钮和单选卡片的形式显示，使用方式和`Radio`组件完全一致：

```php
$form->radioButton($column[, $label])->options(['m' => 'Female', 'f'=> 'Male'])->default('m');

$form->radioCard($column[, $label])->options(['m' => 'Female', 'f'=> 'Male'])->default('m');
```

## Checkbox选择

![checkbox](https://user-images.githubusercontent.com/1479100/82288312-cd051400-99d4-11ea-86cb-dc1f36c1f1a5.png)

`checkbox`能处理两种数据存储情况，参考[多选](/zh-CN/guide/model-form-fields.md#多选)

`options()`方法用来设置选择项:

```php
$form->checkbox($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);

// 竖排
$form->checkbox($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name'])->stacked();

// 通过闭包设置options
$form->checkbox($column[, $label])->options(function () {
    return [1 => 'foo', 2 => 'bar', 'val' => 'Option name'];
});

// 如果选项太多的话，可以在上面增加一个全选checkbox
$form->checkbox($column[, $label])->options([])->canCheckAll();
```

`Checkbox`组件有两个派生组件`CheckboxButton`和`CheckboxCard`, 以多选按钮和多选卡片的形式显示，使用方式和`Checkbox`组件完全一致：

```php
$form->checkboxButton($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);

$form->checkboxCard($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);
```

## Select单选

![select](https://user-images.githubusercontent.com/1479100/82288327-d2faf500-99d4-11ea-9b34-68386b1ebaf6.png)

```php
$form->select($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);
```

或者从api中获取选项列表：

```php
$form->select($column[, $label])->options('/api/users');
```

其中api接口的格式必须为下面格式：

```json
[
    {
        "id": 9,
        "text": "xxx"
    },
    {
        "id": 21,
        "text": "xxx"
    },
    ...
]
```

如果选项过多，可通过ajax方式动态分页载入选项：

```php
$form->select('user_id')->options(function ($id) {
    $user = User::find($id);

    if ($user) {
        return [$user->id => $user->name];
    }
})->ajax('/admin/api/users');
```

API `/admin/api/users`接口的代码：

```php
public function users(Request $request)
{
    $q = $request->get('q');

    return User::where('name', 'like', "%$q%")->paginate(null, ['id', 'name as text']);
}
```

接口返回的数据结构为

```json
{
    "total": 4,
    "per_page": 15,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 3,
    "data": [
        {
            "id": 9,
            "text": "xxx"
        },
        {
            "id": 21,
            "text": "xxx"
        },
        {
            "id": 42,
            "text": "xxx"
        },
        {
            "id": 48,
            "text": "xxx"
        }
    ]
}
```

## Select联动

`select`组件支持父子关系的单向联动：

```php
$form->select('province')->options(...)->load('city', '/api/city');

$form->select('city');
```

其中`load('city', '/api/city');`的意思是，在当前select的选项切换之后，会把当前选项的值通过参数`q`, 调用接口`/api/city`，并把api返回的数据填充为city选择的选项，其中api`/api/city`返回的数据格式必须符合:

```json
[
    {
        "id": 9,
        "text": "xxx"
    },
    {
        "id": 21,
        "text": "xxx"
    },
    ...
]
```

控制器action的代码示例如下：

```php
public function city(Request $request)
{
    $provinceId = $request->get('q');

    return ChinaArea::city()->where('parent_id', $provinceId)->get(['id', DB::raw('name as text')]);
}
```

## Select多选

![mselect](https://user-images.githubusercontent.com/1479100/82288323-d1313180-99d4-11ea-83f3-16c192e30ec2.png)

```php
$form->multipleSelect($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);
```

多选可以处理两种情况，第一种是`ManyToMany`的关系。

```php
class Post extends Models
{
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}

$form->multipleSelect('tags')->options(Tag::all()->pluck('name', 'id'));
```

第二种是将选项数组存储到单字段中，如果字段是字符串类型，那就需要在模型里面为该字段定义[访问器和修改器](https://laravel.com/docs/11.x/eloquent-mutators)来存储和读取了。

比如字段`tags`以字符串的形式存储，并且以逗号`,`分隔，那么像下面一样定义它的访问器和修改器：

```php
class Post extends Model
{
    public function getTagsAttribute($value)
    {
        return explode(',', $value);
    }

    public function setTagsAttribute($value)
    {
        $this->attributes['tags'] = implode(',', $value);
    }
}
```

如果选项过多，可通过ajax方式动态分页载入选项：

```php
$form->multipleSelect('friends')->options(function ($ids) {
    return User::find($ids)->pluck('name', 'id');
})->ajax('/admin/api/users');
```

API `/admin/api/users`接口的代码：

```php
public function users(Request $request)
{
    $q = $request->get('q');

    return User::where('name', 'like', "%$q%")->paginate(null, ['id', 'name as text']);
}
```

接口返回的数据结构为

```json
{
    "total": 4,
    "per_page": 15,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 3,
    "data": [
        {
            "id": 9,
            "text": "xxx"
        },
        {
            "id": 21,
            "text": "xxx"
        },
        {
            "id": 42,
            "text": "xxx"
        },
        {
            "id": 48,
            "text": "xxx"
        }
    ]
}
```

## 穿梭多选

![QQ20200519-130525](https://user-images.githubusercontent.com/1479100/82287107-f8d2ca80-99d1-11ea-90a2-8efa9c5ff224.png)

使用方法和`multipleSelect`类似

```php
$form->listbox($column[, $label])->options([1 => 'foo', 2 => 'bar', 'val' => 'Option name']);

// 设置高度
$form->listbox($column[, $label])->height(200);
```

## 邮箱输入

```php
$form->email($column[, $label]);
```

## 密码输入

![password](https://user-images.githubusercontent.com/1479100/82288324-d1c9c800-99d4-11ea-9085-c510ab007a20.png)

```php
$form->password($column[, $label]);
```

## URL输入

![URL](https://user-images.githubusercontent.com/1479100/82288331-d42c2200-99d4-11ea-9e68-39eb6341afdc.png)

```php
$form->url($column[, $label]);
```

## IP输入

![ip](https://user-images.githubusercontent.com/1479100/82288319-d0000480-99d4-11ea-96d8-92d8c7e7f1fe.png)

```php
$form->ip($column[, $label]);
```

## 电话号码输入

![mobile](https://user-images.githubusercontent.com/1479100/82288321-d0989b00-99d4-11ea-847a-818ce7d419db.png)

```php
$form->mobile($column[, $label]);

// 自定义格式
$form->mobile($column[, $label])->options(['mask' => '999 9999 9999']);
```

## 颜色选择

![color](https://user-images.githubusercontent.com/1479100/82288314-ce364100-99d4-11ea-9fd6-f31991f013ad.png)

```php
$form->color($column[, $label])->default('#ccc');
```

## 时间输入

```php
$form->time($column[, $label]);

// 设置时间格式，更多格式参考http://momentjs.com/docs/#/displaying/format/
$form->time($column[, $label])->format('HH:mm:ss');
```

## 日期输入

![datetime](https://user-images.githubusercontent.com/1479100/82288315-ceced780-99d4-11ea-98cc-cb332016137d.png)

```php
$form->date($column[, $label]);

// 设置日期格式，更多格式参考http://momentjs.com/docs/#/displaying/format/
$form->date($column[, $label])->format('YYYY-MM-DD');
```

## 日期时间输入

```php
$form->datetime($column[, $label]);

// 设置日期格式，更多格式参考http://momentjs.com/docs/#/displaying/format/
$form->datetime($column[, $label])->format('YYYY-MM-DD HH:mm:ss');
```

## 时间范围选择

`$startTime`、`$endTime`为开始和结束时间字段:

```php
$form->timeRange($startTime, $endTime, 'Time Range');
```

## 日期范围选

`$startDate`、`$endDate`为开始和结束日期字段:

```php
$form->dateRange($startDate, $endDate, 'Date Range');
```

## 时间日期范围选择

`$startDateTime`、`$endDateTime`为开始和结束时间日期:

```php
$form->datetimeRange($startDateTime, $endDateTime, 'DateTime Range');
```

## 货币输入

```php
$form->currency($column[, $label]);

// 设置单位符号
$form->currency($column[, $label])->symbol('￥');
```

## 数字输入

```php
$form->number($column[, $label]);

// 设置最大值
$form->number($column[, $label])->max(100);

// 设置最小值
$form->number($column[, $label])->min(10);
```

## 比例输入

```php
$form->rate($column[, $label]);
```

## 滑动选择

可以用来数字类型字段的选择，比如年龄：

```php
$form->slider($column[, $label])->options([
    'max'       => 100,
    'min'       => 1,
    'step'      => 1,
    'postfix'   => 'years old'
]);
```

更多`options`请参考:https://github.com/IonDen/ion.rangeSlider#settings

## 富文本编辑

选择使用下面的富文本编辑器扩展：

| 扩展        | URL                                                     |
| ----------- | ------------------------------------------------------- |
| wangEditor  | https://github.com/laravel-admin-utils/wangEditor  |
| wangEditor2 | https://github.com/laravel-admin-utils/wangEditor2 |
| UEditor     | https://github.com/laravel-admin-utils/UEditor     |
| Summernote  | https://github.com/laravel-admin-utils/summernote  |
| Quill       | https://github.com/laravel-admin-utils/quill       |
| CKEditor    | https://github.com/laravel-admin-utils/ckeditor    |
| Simditor    | https://github.com/laravel-admin-utils/simditor    |

## 隐藏域

```php
$form->hidden($column);
```

## 开关

`on`和`off`对用开关的两个值`1`和`0`:

```php
$states = [
    'on'  => ['value' => 1, 'text' => '打开', 'color' => 'success'],
    'off' => ['value' => 0, 'text' => '关闭', 'color' => 'danger'],
];

$form->switch($column[, $label])->states($states);
```

## 经纬度选择

使用[经纬度选择器插件](https://github.com/laravel-admin-utils/latlong)

## 纯显示

只显示字段，不做任何操作：

```php
$form->display($column[, $label]);

//更复杂的显示
$form->display($column[, $label])->with(function ($value) {
    return "<img src="$value" />";
});
```

## 分割线

```php
$form->divider();

// OR

$form->divider('Title');
```

## HTML显示

插入html内容，参数可以是实现了`Htmlable`、`Renderable`或者实现了`__toString()`方法的类

```php
$form->html('你的html内容'[, $label]);
```

## 标签输入

插入逗号(,)隔开的字符串`tags`

```php
$form->tags('keywords'[, $label]);
```

## 图标选择

![icon](https://user-images.githubusercontent.com/1479100/82288317-cf676e00-99d4-11ea-92c5-a393bd4dfb64.png)

选择`font-awesome`图标

```php
$form->icon('icon'[, $label]);
```

## 时区选择

```php
$form->timezone('timezone'[, $label]);
```
