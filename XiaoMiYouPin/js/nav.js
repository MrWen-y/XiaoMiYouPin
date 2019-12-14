class Nav{
    constructor(data){
        this.data=data
        this.ulhtml = null
        this.divhtml = null
    }
    init(){
        this.renderUI()
        this.toggle()
    }
    renderUI(){
        this.renderLeft()
        this.renderRight()
        let html = `<ul class="nav-list">${this.ulhtml}</ul>${this.divhtml}`
        $('.nav-container').append(html)
    }
    renderLeft(){
        this.ulhtml = this.data.map((ele,index)=>{
            let lihtml = JSON.parse(ele.h4).map((el,idx)=>{
                return `<span><a>${el}</a></span>` 
            }).join(" / ")
            return `<li class="nav-item">${lihtml}</li>`
        }).join("")
    }
    renderRight(){
        this.divhtml = this.data.map((ele,index)=>{  
            let group = JSON.parse(ele.list).map((el,idx)=>{
                let lihtml = el.map((e,i)=>{
                    return `<li class="m-tag-a"><a href="details.html"><img src="${JSON.parse(ele.img)[idx][i]}"><span>${e}</span></a></li>`
                }).join("")
                return `<div class="cate-detail-group">
                            <p class="title">${JSON.parse(ele.h4)[idx]}</p>
                            <ul class="cate-detail-list">${lihtml}</ul>
                        </div>`
            }).join("")
            return `<div class="nav-detail">${group}</div>`
        }).join("")
    }
    toggle(){
        $('.nav-list').eq(0).on("mouseenter","li",function(){
            let self = $(this).index()
            $(this).addClass("is-selected").siblings().removeClass("is-selected")
            $('.nav-detail').eq(self).addClass("show").siblings().removeClass("show")
            $('.nav-detail').mouseenter(function(){
                $('.nav-detail').eq(self).addClass("show").siblings().removeClass("show")
            })
            $('.nav-detail').mouseleave(function(){
                $('.nav-detail').eq(self).removeClass("show")
            })
        })
        $('.nav-list').eq(0).on("mouseleave","li",function(){
            let self = $(this).index()
            $(this).removeClass("is-selected")
            $('.nav-detail').eq(self).removeClass("show")
        })
        $('.nav-list').eq(1).on("mouseenter","li",function(){
            let self = $(this).index()+9
            $(this).addClass("is-selected").siblings().removeClass("is-selected")
            $('.nav-detail').eq(self).addClass("show").siblings().removeClass("show")
            $('.nav-detail').mouseenter(function(){
                $('.nav-detail').eq(self).addClass("show").siblings().removeClass("show")
            })
            $('.nav-detail').mouseleave(function(){
                $('.nav-detail').eq(self).removeClass("show")
            })
        })
        $('.nav-list').eq(1).on("mouseleave","li",function(){
            let self = $(this).index()+9
            $(this).removeClass("is-selected")
            $('.nav-detail').eq(self).removeClass("show")
        })
    }
}