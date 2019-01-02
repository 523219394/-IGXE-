//登录页面
function check(){
	var oUsername=document.myform.username;
	var info1="*用户名不能为空";
	var info2="*用户名必须是6~15位数字字母下划线,首位为英文字母";
	var reg1=/^[a-z][0-9a-z_]{5,15}$/;

	var c1=check1(oUsername,info1,reg1,info2);
	if(c1==false){
		return false;
	}
	var oPwd=document.myform.password;
	var reg2=/^\w{6,16}$/;
	var c2=check1(oPwd,"*密码不能为空",reg2,"*密码必须是6~16位字母或者数字");
	if(c2==false){
		return false;
	}else{
		window.location.href="index.html";
	}
	function check1(obj,error1,reg,error2){
		var val1=obj.value;
		var oError1=obj.parentNode.nextElementSibling;
		if(val1==""){
			oError1.innerHTML=error1;
			return false;
		}else{	
			if(reg.test(val1)){
				oError1.innerHTML="";
			}else{
				oError1.innerHTML=error2;
				return fals		}
		}
	}
	
}