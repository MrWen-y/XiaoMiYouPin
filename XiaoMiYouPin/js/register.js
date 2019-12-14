$(()=>{
    
    // 邮箱注册
    $(".email").blur(function () {
        let val = $(this).val().trim();
        if (/^\w+@\w+\.[a-zA-Z]+$/.test(val)) {
            $('.listwrap .err_tip').css("display", "none")
        } else {
            $('.listwrap .err_tip').css("display", "block")
        }
    })
    // $('.set-password').blur(()=>{
    //     $('.err_tip').eq(2).css("display", "block")
    //     $('.dis_box').eq(2).text('密码长度8~16位，数字、字母、字符至少包含两种')
    // })
    // 输入密码
    $('.set-password').blur(function(){
        let val = $(this).val().trim();
        if (/^[0-9a-zA-Z]{8,16}$/.test(val)) {
            $('.err_tip').eq(1).css("display", "none")
        }else{
            $('.err_tip').eq(1).css("display", "block")
            $('.dis_box').eq(1).text('密码长度8~16位，数字、字母、字符至少包含两种')
        }
    })
    // 确认密码
    $('.repassword').blur(function(){
        let val = $(this).val().trim();
        let targetVal = $('.set-password').val().trim();
        if (targetVal===val) {
            $('.err_tip').eq(2).css("display", "none")
        } else {
            $('.err_tip').eq(2).css("display", "block")
            $('.dis_box').eq(2).text('两次输入密码不一致')
        }
    })
    $('.btn_reg_1').eq(0).click(function(){
        let val = $(".email").val().trim();
        if (/^\w+@\w+\.[a-zA-Z]+$/.test(val)){
           $('.address-place').text(val)
           $('.register').css("display", "none") 
           $('.regbox').eq(1).css("display", "block")
        }
    })
    $('.btn_reg_2').eq(1).click(function(){
        $('.register').css("display", "block") 
        $('.regbox').eq(1).css("display", "none")
    })
    // 集成图像验证码
    let captcha1 = new CaptchaMini({
        fontSize: 30,
        length: 5,
        content: "adshdfsnf234j35uetege5",
        lineNum: 26,
        dotNum: 60
    });
    let imgCode;
    captcha1.draw(document.querySelector('#captcha'), r => {
        console.log("验证码 = " + r);
        imgCode = r;
        $(".code").val(imgCode);
    });
    $(".code").blur(function(){
        let val = $(this).val().trim();
        if(val!=imgCode){
            $('.err_tip').eq(3).css("display", "block")
        } else{
            $('.err_tip').eq(3).css("display", "none")
        }
    })
    // 提交
    $('.submit-step').eq(1).click(function(){
        $(".set-password").trigger("blur");
        $(".repassword").trigger("blur");
        $(".code").trigger("blur");
        if($('.set-password').val().trim()==""){
            alert("请输入密码");
            return;
        }
        if ($(".code").val() != imgCode) {            
            alert("图形验证码不正确!");
            return;
        }
        if ($('.set-password').val().trim() != $('.repassword').val().trim()) {
            alert("两次密码输入不一致!");
            return;
        }
        /* 发请求给服务器  注册： */
        $.ajax({
            type: "post",
            url: "./server/register.php",
            data: `email=${$(".email").val()}&password=${$(".set-password").val()}`,
            dataType: "json",
            success: function (response) {
                /* 注册成功： */
                console.log(response, response.status);
                if (response.status == "ok") {
                    /* 跳转到首页 */
                    alert("恭喜您，注册成功")
                    window.location.href = "index01.html";
                } else {
                    /* 注册失败： */
                    alert(response.msg);
                }
            }
        });
        $(".set-password").val("").focus()
        $(".repassword").val("")
        $(".code").val("")
    })

    
})