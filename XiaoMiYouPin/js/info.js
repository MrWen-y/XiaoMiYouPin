$(()=>{
    // 获取传过来的good_id
    var search = decodeURI(window.location.search.slice(1))
    $.ajax({
        type: "get",
        url: "./server/getID.php",
        data:  search,
        dataType: "json",
        success: function (response) {
            renderUI(response)
            
        }
    });
    function renderUI(data){
        $('.main').find('img').attr('src',data[0].src)
        $('.good-name').text(data[0].info)
        $('.staticWords').text(data[0].desc)
        $('.value').text(data[0].price)
        $('.market-price').text(`￥${parseInt(data[0].price/0.8)}`)
    }

    // 放大镜
    $('.main').mouseenter(function () {
        $('.img-min').css("display", "block")
        $('.box2 img').css("display", "block")
        $('.box2').css("display", "block")
    })
    $('.main').mousemove(function (e) {
        var e = e || window.event;
        // console.log($('.jqzoom').height());
        var x = e.pageX - $('.main').offset().left - $('.img-min').width() / 2
        var y = e.pageY - $('.main').offset().top - $('.img-min').width() / 2
        // console.log(x, y);

        // 限制移动的区域
        // console.log($('.jqzoom').width());

        var maxX = $('.main').width() - $('.img-min').width()
        var maxY = $('.main').height() - $('.img-min').width()
        if (x <= 0) {
            x = 0
        }
        if (y <= 0) {
            y = 0
        }
        if (x >= maxX) {
            x = maxX
        }
        if (y >= maxY) {
            y = maxY
        }
        // imgmin.style.left=x;
        // imgmin.style.top=y;
        $('.img-min').css("left", x).css("top", y)

        // 大图片移动范围

        var MmaxX = $('.box2 img').width() - $('.box2').width()
        var MmaxY = $('.box2 img').height() - $('.box2').height()

        // 比例
        
        var biliX = MmaxX / maxX;
        var biliY = MmaxY / maxY;
        $('.box2 img').css("left", -(x * biliX)).css("top", -(y * biliY))
    })
    $('.main').mouseleave(function () {
        $('.img-min').css("display", "none")
        $('.box2 img').css("display", "none")
        $('.box2').css("display", "none")

    })

    $('.thumb-container').eq(0).on('click','.thumb-pic',function(){
        console.log($(this));
        
        let imgurl = $(this).find('img').attr('src')
        $('.main').find('img').attr('src',imgurl)
    })
    var num = ($('.count-input').val())
    $('.m-icons-add-active').click(function () {
        // let res =num++
        $('.count-input').val(++num)
    })
    $('.m-icons-reduce-active').click(function () {
        // let res =num++
        if (num == 1) {
            $('.count-input').val(num)
        } else {
            $('.count-input').val(--num)
        }
    })

    /* 实现点击添加商品到购物车的功能 */
    $(".m-btn-brown").click(function() {
        alert('加入购物车成功~')
        var data = search.split("=")
        let good_id = data[1]
        $.ajax({
            url: "./server/cart.php",
            data: {  type: "add",good_id: good_id },
            dataType: "json",
            success: function(response) {
                // console.log(response);
            }
        });
    })
})