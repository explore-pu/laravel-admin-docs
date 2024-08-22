# 文件/图片上传

使用图片上传功能之前需要先完成上传配置，请先阅读本页文档的配置部分.

## 图片上传

使用本地上传，图片上传目录在文件`config/admin.php`中的`upload.image`中配置，如果目录不存在，需要创建该目录并开放写权限。

可以使用压缩、裁切、添加水印等各种方法,需要先安装[intervention/image](http://image.intervention.io/getting_started/installation).

更多使用方法请参考[[Intervention](http://image.intervention.io/getting_started/introduction)]：

```php
$form->image($column[, $label]);

// 修改图片上传路径和文件名
$form->image($column[, $label])->move($dir, $name);

// 剪裁图片
$form->image($column[, $label])->crop(int $width, int $height, [int $x, int $y]);

// 加水印
$form->image($column[, $label])->insert($watermark, 'center');

// 添加图片删除按钮
$form->image($column[, $label])->removable();

// 删除数据时保留图片
$form->image($column[, $label])->retainable();

// 增加一个下载按钮，可点击下载
$form->image($column[, $label])->downloadable();
```

上传图片之后生成缩略图

```php
// 上传图片的同时生成缩略图
$form->image($column[, $label])->thumbnail('small', $width = 300, $height = 300);

// 或者多张缩略图
$form->image($column[, $label])->thumbnail([
    'small' => [100, 100],
    'small' => [200, 200],
    'small' => [300, 300],
]);
```

在模型中使用缩略图

```php
class Photo extends Model
{
    use \Elegant\Utils\Traits\Resizable;
}

// To access thumbnail
$photo->thumbnail('small', 'photo_column');
```

## 文件上传

使用本地上传，文件上传目录在文件`config/admin.php`中的`upload.file`中配置，如果目录不存在，需要创建该目录并开放写权限。

```php
$form->file($column[, $label]);

// 修改文件上传路径和文件名
$form->file($column[, $label])->move($dir, $name);

// 并设置上传文件类型
$form->file($column[, $label])->rules('mimes:doc,docx,xlsx');

// 添加文件删除按钮
$form->file($column[, $label])->removable();

// 删除数据时保留文件
$form->file($column[, $label])->retainable();

// 增加一个下载按钮，可点击下载
$form->file($column[, $label])->downloadable();
```

## 多图/文件上传

```php
// 多图
$form->multipleImage($column[, $label]);

// 添加删除按钮
$form->multipleImage($column[, $label])->removable();

// 多文件
$form->multipleFile($column[, $label]);

// 添加删除按钮
$form->multipleFile($column[, $label])->removable();

// 可拖动排序
$form->multipleImage('pictures')->sortable();
```

多图/文件上传的时候提交的数据为文件路径数组，可以直接用mysql的`JSON`类型字段存储，

如果用mongodb的话也能直接存储，但是如果用字符串类型来存储的话，就需要指定数据的存储格式了，

比如，如果要用json字符串来存储文件数据，就需要在模型中定义字段的修改器和访问器，比如字段名为`pictures`：

```php
public function setPicturesAttribute($pictures)
{
    if (is_array($pictures)) {
        $this->attributes['pictures'] = json_encode($pictures);
    }
}

public function getPicturesAttribute($pictures)
{
    return json_decode($pictures, true);
}
```

当然你也可以指定其它任何格式.

## 一对多关系处理

假设文章表(articles)中的每个文章有多个附件，附件存储在附件表(attatchments)的`path`字段中, 那么可以按照下面的方式来处理

```php
articles
    id      - integer
    title   - string

attachments
    id      - integer
    path    - string
```

模型为：

```php
class Article extends Model
{
    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}

class Attachment extends Model
{
}
```

在表单中使用：

```php
$form->multipleFile('attachments', '附件')->pathColumn('path')->removable();
```

`multipleFile`方法的第一个参数使用关系名`attachments`，使用方法`pathColumn`来指定文件的上传路径存储在关联表的`path`字段。

## 存储路径/文件名

```php
// 修改上传目录
$form->image('picture')->move('public/upload/image1/');

// 使用随机生成文件名 (md5(uniqid()).extension)
$form->image('picture')->uniqueName();

// 自定义文件名
$form->image('picture')->name(function ($file) {
    return 'test.'.$file->guessExtension();
});
```

## 上传配置

在使用文件上传之前，必须先完成必要的配置，按照你的情况配置本地上传和云端上传

## 本地上传

先添加存储配置，`config/filesystems.php` 添加一项`disk`:

```php
'disks' => [
    ... ,

    'admin' => [
        'driver' => 'local',
        'root' => public_path('uploads'),
        'visibility' => 'public',
        'url' => env('APP_URL').'/uploads',
    ],
],
```

设置上传的路径为`public/uploads`(public_path('uploads'))。

然后选择上传的`disk`，打开`config/admin.php`找到：

```php
'upload'  => [

    'disk' => 'admin',

    'directory'  => [
        'image'  => 'images',
        'file'   => 'files',
    ]
],
```

将`disk`设置为上面添加的`admin`，`directory.image`和`directory.file`分别为用`$form->image($column)`和`$form->file($column)`上传的图片和文件的上传目录。

## 云端上传

如果需要上传到云存储，需要安装对应`laravel storage`的适配器，拿七牛云存储举例

首先安装 [zgldh/qiniu-laravel-storage](https://github.com/zgldh/qiniu-laravel-storage)

同样配置好disk，在`config/filesystems.php` 添加一项:

```php
'disks' => [
    ... ,
    'qiniu' => [
        'driver'  => 'qiniu',
        'domains' => [
            'default'   => 'xxxxx.com1.z0.glb.clouddn.com', //你的七牛域名
            'https'     => 'dn-yourdomain.qbox.me',         //你的HTTPS域名
            'custom'    => 'static.abc.com',                //你的自定义域名
         ],
        'access_key'=> '',  //AccessKey
        'secret_key'=> '',  //SecretKey
        'bucket'    => '',  //Bucket名字
        'notify_url'=> '',  //持久化处理回调地址
        'url'       => 'http://of8kfibjo.bkt.clouddn.com/',  // 填写文件访问根url
    ],
],
```

然后修改`laravel-admin`的上传配置，打开`config/admin.php`找到：

```php
'upload'  => [

    'disk' => 'qiniu',

    'directory'  => [
        'image'  => 'image',
        'file'   => 'file',
    ],
],
```

`disk`选择上面配置的`qiniu`。

## 云存储适配器

下面是国内常用云存储的Laravel适配器，参考文档配置

- [阿里云](https://github.com/jacobcyl/Aliyun-oss-storage)
- [腾讯云](https://github.com/freyo/flysystem-qcloud-cos-v5)
- [七牛](https://github.com/overtrue/laravel-filesystem-qiniu)
- [七牛](https://github.com/zgldh/qiniu-laravel-storage)
- [又拍云](https://github.com/JellyBool/flysystem-upyun)
- [青云](https://github.com/geXingW/laravel-qingstor-storage)
- [UCloud](https://github.com/xujif/ucloud-ufile-storage)
