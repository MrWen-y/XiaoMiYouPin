$(()=>{
      // 一进来就发请求渲染页面
      loadCart();
      function loadCart(){
        // 删除之前的数据
        $('.has-good-container').remove()
        $.ajax({ //获取商品数据
          data: {
            type: "get"
          },
          url: "./server/cart.php",
          dataType: "json",
          success: function (data) {
            renderUI(data);
            clickSelect()
            console.log(data);
            
            if (data == "") {
              $('.has-good-container').remove()
              $('.no-good-container').parent().css("display", "block")
            }
            totalMoney()
          }
        });
      }
  
      // 渲染购物车
      function renderUI(data){
        let html = data.map((ele,index)=>{
          return `<div class="good-item-container cart-goods-con" gid=${ele.good_id}>
                    <div class="cart-good-items clearfix">
                      <div class="select">
                          <a class="m-icons m-icons-check-active select-icon"></a>
                      </div>
                      <div class="image">
                          <img src=${ele.src}>
                      </div>
                      <div class="name">
                          <div class="vertical-wrap">
                              <p class="good-name brown-hover">${ele.info}</p>
                          </div>
                      </div>
                      <div class="price"><span>￥${ele.price}</span></div>
                      <div class="num">
                          <div class="can-edit">
                                <div class="minus-btn-active">
                                    <a class="m-icons m-icons-reduce-active "></a>
                                </div>
                                <input type="text" value="${ele.num}" class="count-input">
                                <div class="minus-btn-active">
                                    <a class="m-icons m-icons-add-active "></a>
                                </div>
                          </div>
                      </div>
                      <div class="subtotal"><span>￥${ele.price*ele.num}</span></div>
                      <div class="del"><a class="m-icons m-icons-close-hover icon"></a></div>
                    </div>
                  </div>`
        }).join("")        
        let totalhtml = `<div class="has-good-container container">
                            <div class="title" id="good-title">
                                <a class="m-icons m-icons-check-active select-icon"></a>
                                <span class="all-txt">全选</span>
                                <span class="product">商品信息</span>
                                <span class="price">单价</span>
                                <span class="num">数量</span>
                                <span class="total">金额</span>
                                <span class="edit">操作</span>
                            </div>
                          <div class="cart-merchant-list" id="merchantList">
                            <div>
                              <div class="merchant-item-container">
                                  <div class="merchant-info">
                                      <a class="m-icons m-icons-check-active select-icon"></a>
                                      <span class="name">有品精选</span>
                                      <div class="postmarginright mijiapost">
                                          <span><span class="postimg">!</span>已免运费</span>
                                      </div>
                                  </div>
                                  <!-- 列表 -->
                                  <div>${html}</div>
                              </div>
                            </div>
                          </div>
                          <div class="cart-total bottom-total ">
                              <div class="ico fl">
                                  <a class="m-icons m-icons-check-active select-icon"></a>
                                  <span class="select-text">全选</span>
                                  <span class="already-select"></span></div>
                              <div class="totol-price-con ">
                                  <span class="total-after-prefer"><span></span></span>
                                  <div class="total-info"><span></span><span></span></div>
                              </div><span class="checkout  fr">去结算</span>
                          </div>
                          
                        </div>`
        $('.express-append').append(totalhtml)        
      }

      // 全选和单选
      function clickSelect(){
        // 单选
        $('.merchant-item-container').eq(0).on("click",".good-item-container",function(){
            let clsname = $(this).find('.select').children().attr('class')
            if(clsname =="m-icons m-icons-check-active select-icon"){
              $(this).find('.select').children().eq(0).removeClass().addClass('m-icons m-icons-check select-icon')
            }
            if(clsname =="m-icons m-icons-check select-icon"){
              $(this).find('.select').children().eq(0).removeClass().addClass('m-icons m-icons-check-active select-icon')
            }       
        })
        $('.title')
          
      }

      // 数量
      $("body").on("click", ".m-icons-add-active,.m-icons-reduce-active", function () {
        var num = $(this).parent().parent().find('.count-input').val()
        if (this.className.substr(8) == "m-icons-add-active ") {
          $(this).parent().parent().find('.count-input').val(++num)
        } else {
          if (num == 1) {
            $(this).parent().parent().find('.count-input').val(num)
          } 
          else {
            $(this).parent().parent().find('.count-input').val(--num)
          }
        }
          
        var price= $(this).parent().parent().parent().parent().find(".price").text().substr(1) * 1;
        $(this).parent().parent().parent().parent().find(".subtotal").text("￥"+ price * num)
        let gid = $(this).parents(".good-item-container").attr("gid");
        // 数量改变时，也得发请求修改数据库里面的数量，这样刷新的时候就能实时更新了
        if(num == 1){
          classname = this.className
        }else{
          classname = this.className.substr(8)
        }
        updateCartData(classname,gid)
        // 数量改变，总金额也跟着改变
        totalMoney();
      });

      // 更新
      function updateCartData(flag, good_id) {
        $.ajax({
            url: "./server/cart.php",
            data: {
                type: "update",
                flag,
                good_id
            },
            success: function(response) {
            }
        });
      }

      // 总计
      function totalMoney() {
        let total_count = 0;
        let total_price = 0;
    
        $(".good-item-container").each((index, ele) => {
            let count = $(ele).find(".count-input").val() * 1;
            let price = $(ele).find(".price").text().substr(1) * 1;
    
            total_count += count;
            total_price += count * price;
        });
    
        $(".already-select").text("已选"+total_count+"件");
        $('.m-cart-news').text(total_count)
        $(".total-after-prefer").children(1).text("合计：￥" + total_price.toFixed(2));
        $('.total-info').children().eq(0).text("总额：￥" + parseInt(total_price/0.95).toFixed(2)+",")
        $('.total-info').children().eq(1).text("立减：￥"+(parseInt(total_price/0.95).toFixed(2)-total_price.toFixed(2)))
      };

      /* 删除功能 */
      $("body").on("click", ".del a", function () {
        let self = $(this)
        $('.m-modal-portal').css("display","block")
        $('.m-btn-brown').click(()=>{
          $('.m-modal-portal').css("display","none")
          let good_id = self.parents(".good-item-container").attr("gid");
          $.ajax({
            url: "./server/cart.php",
            data: {
              type: "del",
              good_id
            },
            dataType: "json",
            success: function (response) {
              // 删除完数据后，避免手动刷新才会更新删除的数据，所以得调用loadCart()
              loadCart();
            }
          });
        })
        $('.close').click(function(){
          $('.m-modal-portal').css("display","none")
        })
        $('.m-btn-gray').click(function(){
          $('.m-modal-portal').css("display","none")
        })
      })
    })