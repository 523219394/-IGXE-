 window.onload=function(){
/*二级菜单*/
	var ogame_=document.getElementById('game_');
	var ogame_menu=document.getElementById("game_menu");
	ogame_.onmouseover=function(){
		ogame_menu.style.display="block";
	}
	ogame_.onmouseout=function(){
		ogame_menu.style.display="";
	}


/*轮播图*/
	var obg_img=document.getElementById("bg_img");
	var oImg=obg_img.children[0]
	var obg_imgarr=["main/3.jpg","main/4.jpg",
	"main/5.jpg","main/6.jpg","main/7.jpg","main/2.jpg"];
	var index=0;
	var ospan=obg_img.getElementsByTagName("span")
	setInterval(function(){		
				index++;
				oImg.src=obg_imgarr[index]; 
				for(var i=0;i<ospan.length;i++){
					if(i==index){
						ospan[i].className="active";
					}else{
						ospan[i].className="";
					}
				}if(index>=5){
					index=-1;
				}
			},3000)

	}
//返回顶部
	window.onscroll=function(){
 var oup=document.getElementById("up");
 var y=document.documentElement.scrollTop||document.body.scrollTop;
 if(y>100){
			oup.style.display="block";
		}else{
			oup.style.display="none";
		}
	oup.onclick=function(){
		var i=document.documentElement.scrollTop||document.body.scrollTop;
		var timer=setInterval(function(){
			i-=100;
			document.documentElement.scrollTop=i;
			document.body.scrollTop=i;
			if(i<=0){
				clearInterval(timer);
			}
		},20)
	}
	}

// //登录页面

// 	function check(){
// 		var oUsername=document.myform.username;
// 		var info1="*用户名不能为空";
// 		var info2="*用户名必须是6~15位数字字母下划线,首位为英文字母";
// 		var reg1=/^[a-z][0-9a-z_]{5,15}$/;

// 		var c1=check1(oUsername,info1,reg1,info2);
// 		if(c1==false){
// 			return false;
// 		}
		
// 		var oPwd=document.myform.password;
// 		var reg2=/^\w{6,16}$/;
// 		var c2=check1(oPwd,"*密码不能为空",reg2,"*密码必须是6~16位字母或者数字");
// 		if(c2==false){
// 			return false;
// 		}


// 		function check1(obj,error1,reg,error2){
// 			var val1=obj.value;
// 			var oError1=obj.parentNode.nextElementSibling;
// 			if(val1==""){
// 				oError1.innerHTML=error1;
// 				return false;
// 			}else{	
// 				if(reg.test(val1)){
// 					oError1.innerHTML="";
// 				}else{
// 					oError1.innerHTML=error2;
// 					return false;
// 				}
// 			}
// 		}
		
		
// 	}