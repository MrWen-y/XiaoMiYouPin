// $('.nav-list li').map((index,ele)=>{
//     // console.log($(ele).children().text());
//     let obj={}
//     let arr={}
//     arr.h4=[]
//     $(ele).children().map((i,e)=>{
//         arr.h4.push($(e).text())
//     })
//     o.push(arr)
// })
// JSON.stringify(o)
var list=[]
var data={}
data.list =[]
data.img=[]
$('.cate-detail-list').map((index,ele)=>{
    var o = []
    var p =[]
    $(ele).children().map((i,e)=>{
        o.push($(e).text())
        // var name = $(e).find('span').text()
        p.push($(e).find('img').attr('src'))
        // console.log($(e).find('img').attr('src'));
        
    })
    data.list.push(o)
    data.img.push(p)
    // list.push(img)
})
list.push(data)
JSON.stringify(list)


var o =[]
$('.swiper-wrapper').eq(2).children().map((index,ele)=>{
    var data={}
    // data.src=[]
    data.src=$(ele).find('img').attr('src')
    data.info = $(ele).find('.pro-info').text()
    data.desc = $(ele).find('.pro-desc').eq(0).text()
    data.price = $(ele).find('.m-num').eq(0).text()
    
    o.push(data)
})

var o =[]

$('.m-product-list').children().map((index,ele)=>{
    var data={}
    data.src = $(ele).find('.img-container').children().attr('src')
    data.tagTextA = $(ele).find('.common-tag-text').eq(0).text()
    data.tagTextB = $(ele).find('.common-tag-text').eq(1).text()
    data.tagImg = $(ele).find('.common-tag-img').attr('src') || null
    data.desc = $(ele).find('.pro-desc').text()
    data.info = $(ele).find('.pro-info').text()
    data.price = $(ele).find('.m-num').text()
    // console.log($(ele).find('.common-tag-text'),$(ele).find('.common-tag-img'));
    
    // console.log($(ele).find('.img-container').children().attr('src'));
    o.push(data)
})
var o =[]
var num = 0;

$('.typeGoods-item').map((index,ele)=>{
    // var list = {}
    // list.h2 = $(ele).find('h2').text() 
    // list.data=[]
    $(ele).find('.pro-item').map((idx,el)=>{
        var div={}
        num++
        div.good_id = num
        div.src = $(el).find('img').attr("data-src")
        div.info = $(el).find('.pro-info').text()
        div.desc = $(el).find('.pro-desc').text()
        div.price = $(el).find('.m-num').text()
        div.tag = $(el).find('.m-sale-tag').text()
        o.push(div)
    })
    
    // o.push(list) 
    // return num  
})




