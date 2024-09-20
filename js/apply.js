var back=document.getElementById('sec');



var zh=document.getElementById('zh');
var mm0=document.getElementById('mm0');
let mm1=document.getElementById('mm1');
let mm2=document.getElementById('mm2');

function login(){
    if(zh.value==""){
        alert("账号不能为空！");
        return false;
    }
    else  if(mm0.value==""){
        alert("邮箱不能为空！");
        return false;
    }
    else  if(mm1.value==""){
        alert("密码不能为空！");
        return false;
    }
    else  if(mm2.value==""){
        alert("密码不能为空！");
        return false;
    }
    else if(mm1.value != mm2.value){    
        alert("两次密码不相同！");
        return false;
    }
    else {    
        alert("注册成功！");
        return 1;
    }
}
