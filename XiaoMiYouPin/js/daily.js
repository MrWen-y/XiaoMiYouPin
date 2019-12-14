class Daily{
    constructor(data){
        this.data = data
    }
    init(){
        this.renderUI()
        this.toggle()
    }
    renderUI(){
        let html = `<div class="container clearfix">
                <div class="h-sec-top clearfix">
                <h2 class="h-subTit">每日新品<span>每天10点 惊喜不断</span></h2><span class="h-more" data-src=""
                    data-target="_blank" href="javascript:;"><span>更多</span><a
                        class="m-icons m-icons-more more-icon" data-src="" href="javascript:;"></a></span>
                </div>
                <div class="m-sec-main mt1">
                    <div class="swiper-container swiper-container-horizontal">
                            <div class="swiper-wrapper"style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">${this.renderDiv()}</div>
                            <div class="swiper-button-next m-icons m-icons-next-hover"></div>
                            <div class="swiper-button-prev m-icons m-icons-forward-hover"></div>
                    </div>
                </div>
            </div>
        </div>`
        $('.h-new-sec').append(html)
    }
    renderDiv(){
        let html = this.data.map((ele,index)=>{
            return `<div class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
            <div class="swiper-slide swiper-slide-active"
                style="width: 266.25px; margin-right: 5px;">
                <div class="m-goods-item-container new-item-container first pro-item-sec margin-left-0">
                    <div class="small-item-img">
                        <div class="m-product-image-container undefined"
                            style="width: 266px; height: 266px;">
                            <div class="img-container" style="width: 266px; height: 266px;"><img
                                    src=${ele.src}
                                    style="width: 266px; height: 266px;"></div>
                        </div>
                    </div>
                    <div class="m-goods-common-box">
                        <p class="pro-info">${ele.info}</p>
                        <p class="pro-desc">${ele.desc}</p>
                        <p class="pro-price">
                        <span class="pro-unit">¥</span>
                        <span class="m-num">${ele.price}</span></p>
                    </div>
                </div>
            </div>
        </div>`   
        }).join("")
        return html
    }
    toggle(){
        var i =0
        $('.swiper-button-next').eq(2).click(()=>{
            i++;
            console.log(666);
            
            if(i<=this.data.length-4){
                $('.swiper-container').children().eq(3).animate({"left":-i*271.25+"px"})
                $('.swiper-button-next').eq(2).removeClass('swiper-button-disabled')
            }else{
                i=this.data.length-4
                $('.swiper-button-next').eq(2).addClass('swiper-button-disabled')
            }
        })
        $('.swiper-button-prev').eq(2).click(()=>{
            i--;
            if(i<=-1){
                i=0;
                $('.swiper-button-prev').eq(2).addClass('swiper-button-disabled')
            }else{
                $('.swiper-container').children().eq(3).animate({"left":-i*271.25+"px"})
                $('.swiper-button-prev').eq(2).removeClass('swiper-button-disabled')
            }
        })
    }
}