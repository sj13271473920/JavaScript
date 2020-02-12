auto.waitFor();
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)
setScreenMetrics(width, height);
jintiao();
 
function jintiao() {
    app.launchApp("手机淘宝");
    sleep(2000);
    toast("打开淘宝")
    sleep(6000); //手机打开淘宝时间比较长，就把这个 6000（6秒） 改成  12000（12秒）或是 合适的时间
    click(812, 1240); //进入活动页
    toast('进入活动页面');
    sleep(4000);
    click(980, 1420); //点击充能量上边气泡积累的能量
    sleep(1500);
    click(950, 1580); //点击充能量
    sleep(2000);
    if (textEndsWith("去签到").exists()) {
        textEndsWith("去签到").findOne().click();
        sleep(1600);
        toast("签到成功")
    }
    sleep(2000);
    while (textEndsWith("去浏览").exists()){
        toast("存在去浏览");
        textEndsWith("去浏览").findOne().click();
        sleep(3000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(3500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(6000);
        back();
        sleep(2000);
    }
     
    while (textEndsWith("去搜索").exists()){
        toast("存在去搜索");
        textEndsWith("去搜索").findOne().click();
        sleep(3000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(3500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(6000);
        back();
        sleep(2000);
    }
    toast("运行完成,结束");
    back();
}
