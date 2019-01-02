// 轮播图
	window.onload=function(){
	var obg_img=document.getElementById("bg_img");
	var oImg=obg_img.children[0]
	var obg_imgarr=["cdkey/pubg-v2.jpg","cdkey/csgo.jpg",
	"cdkey/banner2.jpg"];
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
				}if(index>=2){
					index=-1;
				}
			},3000)

// 点击切换
	var oPrev=document.getElementById("prevBtn");
	var oLi=document.getElementById("banner").children;
	var oNext=document.getElementById("nextBtn");
	oNext.onclick=function(){
		for(var i=0;i<oLi.length;i++){
			var count=parseInt(oLi[i].className.slice(-1));
			count++;
			if(count>oLi.length-1){
				count=0;
			}
			oLi[i].className="li"+count;
		}	
	}
	oPrev.onclick=function(){
		for(var i=0;i<oLi.length;i++){
			var count=parseInt(oLi[i].className.slice(-1));
			count--;
			if(count<0){
				count=4;
			}
			oLi[i].className="li"+count;
		}
	}

	}


// 返回顶部
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

	