// 本页面实现登录功能
// 1 用户输入用户名和密码
// 2 当点击提交按钮的时候，发送ajax请求 到服务器 申请登陆
// 3 如果登录成功 我们跳转到linmeng.html 页面 如果登陆失败 停留在当前页面并提示用户




// 获取元素
var btn = document.getElementById("btn");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// 添加点击事件
btn.onclick = function () {
    // 获取用户名和密码
    var username = usernameInput.value;
    var password = passwordInput.value;

    // 发送ajax到登陆接口
    $.post("../php/login.php", { username: username, password: password }, function (data) {
        console.log(data)
    })
    // 在控制台返回值
    // console.log(username)
    // console.log(password)
}