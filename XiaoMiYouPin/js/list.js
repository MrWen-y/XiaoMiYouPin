class List {
    constructor(data){
        this.data = data
    }
    init(){
        this.renderUI()
        this.removeItem()
    }
    renderUI(){
        let html = `<div class="container">
                        <div class="h-sec-top clearfix">
                            <h2 class="h-subTit">专属推荐</h2>
                        </div>
                        <div class="m-product-list  clearfix">${this.renderDiv()}</div>
                    </div>`
        $('.h-category-sec').append(html)
    }
    renderDiv(){
        let Div = this.data.map((ele,index)=>{
            return `<div class="${index%4==0? "m-goods-item-container first pro-item-category":"m-goods-item-container pro-item-category"}">
            <div class="category-img-container">
                <div class="product-img">
                    <div class="img-container" style="padding: 45px 70px 28px; width: 124px; height: 125px;">
                        <img src=${ele.src}
                        style="height: 125px; width: 125px; margin-left: -0.5px;">
                    </div>
                </div>
                <p class="pro-desc">${ele.desc}</p>
            </div>
            <div class="category-box">
                <div class="m-goods-common-tag-con">
                    <img src=${ele.tagImg==null? "":ele.tagImg}
                         class="common-tag common-tag-img" alt=""
                         style="background-color: rgb(217, 107, 108);">
                    <span class="common-tag common-tag-text"
                         style="${ele.tagTextA==null? "":"background-color: rgb(217, 107, 108);"}">${ele.tagTextA==null? "":ele.tagTextA}</span>
                    <span class="common-tag common-tag-text"
                         style="${ele.tagTextB==null? "":"background-color: rgb(217, 107, 108);"}">${ele.tagTextB==null? "":ele.tagTextB}</span>
                    </div>
                <p class="pro-info">${ele.info}</p>
                <p class="pro-price">
                    <span class="pro-unit">¥</span>
                    <span class="m-num">${ele.price}</span>
                    <span class="pro-flag">起</span>
                </p>
            </div>
        </div>`
        }).join("")
        return Div
    }
    removeItem(){
        if($('.common-tag-text').text()==""){
            $('.common-tag-text').remove('.common-tag-text')
        }
    }
}