$(() => {
    /* 登录按钮的点击事件 */
    $(".btns_bg").click(function() {
        let email = $("#email").val();
        let passwordVal = $("#pwd").val();
        
        $.ajax({
            type: "post",
            url: "./server/login.php",
            data: `email=${email}&password=${passwordVal}`,
            dataType: "json",
            success: function(response) {
                /* 登录成功 */
                if (response.status == "success") {
                    /* 跳转到首页 */
                    alert("恭喜您，登录成功");
                    window.location.href = "index01.html";
                } else {
                    /* 注册失败： */
                    $('.err_tip').css('display','block')
                    // alert(response.msg);
                }

                /* 登录失败 */
            }
        });

    })
})