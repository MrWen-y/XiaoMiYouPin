class Details{
    constructor(data){
        this.data = data
        this.num = 1;
    }
    init(){
        this.renderUI()
        this.cilckDiv()
    }
    renderUI(){
        $('.container').eq(2).append(this.renderDiv())
    }
    renderDiv(){
        let html = this.data.map((ele,index)=>{
            let divhtml = JSON.parse(ele.data).map((el,idx)=>{
                return `<div class="${idx%4==0? "pro-item m-tag-a first":"pro-item m-tag-a"}" data-id="${this.num++}">
                            <div class="pro-img m-img-hover">
                                <img src=${el.src} alt="">
                            </div>
                            <p class="pro-info">${el.info}</p>
                            <p class="pro-desc">${el.desc}</p>
                            <p class="pro-price">
                                <span class="pro-unit">¥</span>
                                <span class="m-num">${el.price}</span>
                                <span class="pro-flag">起</span>
                                <span class="${el.tag==null? "":"m-sale-tag"}">${el.tag}</span>
                            </p>
                        </div>`
                
            }).join("")
            return `<div class="typeGoods-item">
                        <h2>${ele.h2}</h2>
                        <div class="m-product-list  clearfix">${divhtml}</div>
                    </div>`
        }).join("")
        return html
    }
    cilckDiv(){
        $('.container').eq(2).on("click",".pro-item",function(){
            let id = $(this).data().id
            window.location.href="http://127.0.0.1/code/XiaoMiYouPin/info.html?"+`good_id=${id}`;
            return false;
        })
    }
}