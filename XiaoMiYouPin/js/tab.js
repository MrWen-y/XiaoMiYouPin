class Tab{
    constructor(data){
        this.data = data
    }
    init(){
        this.renderUI()
        this.toggle()
    }
    renderUI(){
        let html = `<div class="swiper-container swiper-container-horizontal">
                        <div class="swiper-wrapper">${this.renderDiv()}</div>
                        <div class="swiper-button-next m-icons m-icons-next-hover"></div>
                        <div class="swiper-button-prev m-icons m-icons-forward-hover"></div>
                    </div>`
        $('.container').eq(4).append(html)
    }
    renderDiv(){
        let html = this.data.map((ele,index)=>{
            return `<div class="swiper-slide" style="width: 266.25px; margin-right: 5px;">
            <div class="m-goods-item-container first pro-item-trap margin-left-0">
                <div class="bigtrap-img-tag-container">
                    <div class="small-item-img">
                        <img src=${ele.src}
                            style="width: 266px; height: 266px;">
                    </div>
                </div>
                <div class="bigtrap-box">
                    <p class="pro-info">${ele.name}</p>
                    <p class="pro-price">
                        <span class="pro-unit">¥</span>
                        <span class="m-num">${ele.price}</span>
                        <span class="market-price">
                            <span class="pro-unit">¥</span>
                            <span class="m-num">${ele.del}</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>`   
        }).join("")
        return html
    }
    toggle(){
        var i =0
        $('.swiper-button-next').eq(1).click(()=>{
            i++;
            if(i<=this.data.length-4){
                $('.swiper-container').children().eq(0).animate({"left":-i*271.25+"px"})
                $('.swiper-button-next').eq(1).removeClass('swiper-button-disabled')
            }else{
                i=this.data.length-4
                $('.swiper-button-next').eq(1).addClass('swiper-button-disabled')
            }
        })
        $('.swiper-button-prev').eq(1).click(()=>{
            i--;
            if(i<=-1){
                i=0;
                $('.swiper-button-prev').eq(1).addClass('swiper-button-disabled')
            }else{
                $('.swiper-container').children().eq(0).animate({"left":-i*271.25+"px"})
                $('.swiper-button-prev').eq(1).removeClass('swiper-button-disabled')
            }
        })
    }
}