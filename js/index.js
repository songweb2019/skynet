//当窗口的内容都加载完成之后才查找按钮绑定事件
//$(window).load(function(){...})
//$(window).on("load",function(){ ... }) == $(window).load(function(){...})
// $(document).ready(function(){ ... })  == $(function(){ ... })
$(function(){
  //DOM四步
   //1.查找触发事件的元素  
   //2.绑定事件处理函数
   //3.查找要修改的元素    
   //4.修改元素
  
   // header 
   //点击fan图片 出现  - +按钮
   //1.查找触发事件的元素 #fan
   //2.绑定单击事件 .click
   $("#fan").click(function(){ //单击显示
    //3.查找要修改的元素 #btn1,#btn2
    //4.修改 按钮css 为 display:block
    $("#btn1,#btn2").css("display","block")
   }).dblclick(function(){ //双击隐藏
    $("#btn1,#btn2").css("display","none")
   })

   //- 按钮 点击旋转变慢
   //1.查找触发事件的元素 #btn1
   //2.绑定单击事件 .click
   $("#btn1").click(function(){
    //3.查找要修改的元素 #fan.css
    //4.修改 #fan.css 中 animation-duration：15s
    $("#fan").css("animation-duration","15s")
   })

   //+ 按钮 点击旋转变快
   //1.查找触发事件的元素 #btn2
   //2.绑定单击事件 .click
   $("#btn2").click(function(){
    //3.查找要修改的元素 #fan.css
    //4.修改 #fan.css 中 animation-duration：1s
    $("#fan").css("animation-duration","1s")
   })
  
   //login
   //点按钮，显示alert
   $("#logins").click(function(e){
     e.stopPropagation();
     $(".alert".addClass("in"))
   })
   //点×关闭alert
   $(".close").click(function(){
    $(this).parent().removeClass("end")
  })

   //nav
  //标签页头切换
   var zIndex=1;
   //因为无论进入按钮，还是进入ul，都要保证ul显示
   //因为无论从按钮出，还是从ul出，都要关闭ul
   //又因为按钮和ul都是包含在一个nav内的
   //所以，应该把鼠标进入和移出事件绑定在共同的父元素nav上   
   //1.查找触发事件的元素
   //2.绑定事件处理函数
  $("[data-toggle=tab]").click(function(e){
        e.stopPropagation();
        //3.查找要修改的元素
        //4.修改元素
        //给自己的爹+active          
       $(this).parent().addClass("active")
       //给爹的所有兄弟去掉active
       .siblings().removeClass("active") 
    })
    
    $("[data-trigger=dropdown]").click(function(){//当鼠标进入nav时
      //3.查找要修改的元素
                        //4. 修改元素
      // $(".dropdown-menu").css("height",160)
      $(".dropdown-menu").css("display","block")

   }).mouseout(function(){
      //3. 查找要修改的元素 
                     //4. 修改元素
      // $(".dropdown-menu").css("height",0) 
      $(".dropdown-menu").css("display","none")                  
   }) 



   //sextion content 
   //contbtn1
   var i1=0;
   var i2=0;
   var i3=0;
   var i4=0;
   //contbtn1
   $("#contbtn>button:first").mouseenter(function(){//鼠标进入变化
    $(this).html(`kong`)
   }).mouseleave(function(){//鼠标移出变回
    $(this).html(`空`)
   }).click(function(){//点击 +1
    $(this).css("cursor","pointer")
    $(this).html(`${++i1}`)
    if(i1==9){i1=0;}
   })
  //contbtn2
   $("#contbtn>button:nth-child(2)").mouseenter(function(){
    $(this).html(`kong`)
  }).mouseleave(function(){
    $(this).html(`空`)
  }).click(function(){
    $(this).css("cursor","pointer")
    $(this).html(`${++i2}`)
    if(i2==9){i1=0;}
   })
  //contbtn3
  $("#contbtn>button:nth-child(3)").mouseenter(function(){
    $(this).html(`de`)
  }).mouseleave(function(){
    $(this).html(`的`)
  }).click(function(){
    $(this).css("cursor","pointer")
    $(this).html(`${++i3}`)
    if(i3==9){i1=0;}
   })
  //contbtn4
  $("#contbtn>button:last").mouseenter(function(){
    $(this).html(`wang`)
  }).mouseleave(function(){
    $(this).html(`网`)
  }).click(function(){
    $(this).css("cursor","pointer")
    $(this).html(`${++i4}`)
    if(i4==9){i1=0;}
   })

   //contimgs
   //单击图片，切换下一张
   //1.查找触发事件的元素
                 //2.绑定事件处理函数
   $(".imgs img").click(function(){
     //3.查找要修改的元素
     var $img=$(this);
     //4.修改元素
		//先获得img的alt属性的值
     var imgi=parseInt($img.attr("alt"))
     //如果i<4,才能 将i+1,变为下一张图片的名字
     				//否则,将i重置回1
     //if(imgi<7){imgi++;}else{imgi=1;}
     //简写为
     imgi=imgi<7?imgi+1:1
     //将下一张图片的名字设置到src属性中
     $img.attr({src:`./img/1/img${imgi}.jpg`,alt:imgi})
   })

   //点击小图片，下方my-big中显示大图片
   //1.查找触发事件的元素
                     //2.绑定事件
   $("img.my-small").click(function(){
     //获得当前
     var $smallimg=$(this);
     //3.查找要修改的元素   //4.修改元素              
     $("img.my-big").attr("src",$smallimg.attr("data-target"))
     $(".bigimgs").css("display","block")
   }).dblclick(function(){
     $(".bigimgs")
     .css("display","none")
   })

   //article
   //双态按钮: 让按钮的class在up和down之间切换
   //1.查找触发事件的元素
   //2.绑定事件处理函数
   $("p.up").click(function(){
       //3.查找要修改的按钮
    /*
     var $btn=$(this)
    //4.修改按钮
    //如果现在不是按下的状态，才按下
    if(!$btn.hasClass("down")){  //如果btn没有down
      $btn.addClass("down")
     }else{
    //否则就抬起
     $btn.removeClass("down")
      }
     */
     $(this).toggleClass("down");
   })



   

})