### ui界面 数据类型
```
input   输入框
text    文本框
button  按钮
```

#### ui界面 案例
```
"ui";
ui.layout(
    <vertical>
        <button text="带颜色的按钮" style="Widget.AppCompat.Button.Colored" />
        <button text="无边框的按钮" style="Widget.AppCompat.Button.Borderless" />
        <button text="带颜色无边框的按钮" style="Widget.AppCompat.Button.Borderless.Colored" />
        <input hint="请输入密码" password="true" />
        <button text="开始脚本" />
    </vertical>
)
```

---

### ui界面和脚本交互 数据类型
```
//在UI里不能直接再进行控件操作，只能创建一个新的类然后调用它
threads.start(脚本)
ui.start.click(function(){})
```
#### ui界面和脚本交互 案例
```
"ui";
ui.layout(
    <vertical>
        <text textSize="16sp" textColor="green" text="请输入内容" />
        <input id="c" text="" />
        <button id="start" text="开始" style="Widget.AppCompat.Button.Colored" />
    </vertical>
)
ui.start.click(function(){
    toast("开始了")
    launchApp("抖音短视频")
    sleep(5000)
    swipe(500,device.hight/2,500,device.hight/4,400);
    sleep(2000)
    id("a49").findOne().click();
    sleep(2000)
    id("tp").findOne().click();
    sleep(2000)
    var 评论=ui.c.getText()
    setText(评论)
    sleep(2000)
    id("u5").findOne().click();
})
```
### 垂直布局、选择框、下来菜单、switch语句 数据类型
```
vertical	//垂直布局
horizontal	//水平布局
radio	//选择框控件
spinner	//下来菜单控件
switch	//开关控件
radiogroup ortentation="horizontal"	//限制选择框只选择一个，并让选择框水平布局(默认是垂直)
threads.start(action)	//启动一个新线程并执行action
getSelectedItemPosition	//一个控件或者项目的默认值
```
#### switch语法
```
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 
```
#### 垂直布局、选择框、下来菜单、switch语句 案例
```
"ui";
ui.layout(
<vertical>

    <radiogroup ortentation="horizontal">
    <radio id="dx1" text="单选框1"/>
    <radio id="dx2" text="单选框2"/>
    </radiogroup>
    <horizontal>
<text text="选择功能"/>
<spinner id="xzk" entries="选择1|选择2|选择3"/>
    </horizontal>
<button text="开始" id="start"/>

</vertical>
)

ui.dx1.on("check",(checked)=>{
    if(checked){
        toast("这是第一个单选框");
    }
});

ui.dx2.on("check",(checked)=>{
    if(checked){
        toast("这是第二个单选框");
    }
});

ui.start.on("click",()=>{
    threads.start(主体)
});

function 主体(){
var i=ui.xzk.getSelectedItemPosition();
log(i);

switch(i){
case 0:
toast("这是1")
break;
    case 1:
    toast("这是2")
    break;
      case 2:
      toast("这是3")
      break;
}
}
```
