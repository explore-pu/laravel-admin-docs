# 表单布局

实现了更加自由的表单布局

![image](/public/form.png)

> 表单布局使用了栅格布局，`$row`是自动分配宽度，`$column` 将宽度分为12份，需要几份自己决定

```php
use Elegant\Utils\Form;

$form->row(function (Form\Layout\Row $row) {
    $row->text('text', 'Text');
    $row->column(3, function (Form\Layout\Column $column) {
        $column->text('text1', 'Text1');
        $column->radio('text2', 'Text2')->options([0 => '0', 1 => '1'])
            ->when(1, function () use ($column) {
                $column->text('text3', 'Text3');
            });
    });
});
```
