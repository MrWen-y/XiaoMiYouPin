$(() => {
    window.onscroll = function () {
        if (window.scrollY > 530) {
            $('.m-header').children().addClass('m-header-fixed')
        } else {
            $('.m-header').children().removeClass('m-header-fixed')
        }
    }
    $('.fixed-nav').on('mouseenter', 'li', function () {
        $('.fixed-pop').eq($(this).index()).addClass('show')
    })
    $('.fixed-nav').on('mouseleave', 'li', function () {
        $('.fixed-pop').eq($(this).index()).removeClass('show')
    })
    $('.m-icons-top').parent().click(function () {
        window.scrollTo(0, 0)
    })
    // 获取商品数量
    $.ajax({
        url: "./server/getTotalCount.php",
        dataType: "json",
        success: function ({
            total
        }) {
            $(".m-cart-news").text(total);
        }
    });
})