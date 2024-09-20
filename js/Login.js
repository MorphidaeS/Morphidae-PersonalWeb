var back=document.getElementById('sec');




var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123456"){    
        alert("账号或密码错误");
        return false;
    }
}



