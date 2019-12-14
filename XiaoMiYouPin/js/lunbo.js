class Person{
    constructor(data){
        this.data=data;
        this.root=null;
        this.Ul=null;
        this.oDiv=null;
        this.oL=null
        this.index=0;
        this.ulWidth=859;
        this.timer=null;
        this.oBanner=null

    }
    init(){
        this.render();
        this.autoPlayer();
        this.addClickHander();
        this.addButton();
        this.addMouseHandler();
        this.checkSeletorItem(0);
        
    }
    render(){
        this.renderoUl();
        this.renderDiv();
        this.renderOl();
        this.oBanner = document.querySelector('.banner-box')
        this.root = document.createElement('div');
        this.root.className="slider"
        this.root.appendChild(this.Ul);
        this.root.appendChild(this.oDiv);
        this.root.appendChild(this.oL);
        this.oBanner.appendChild(this.root);
    }
    renderoUl(){
        this.Ul = document.createElement('ul');
        this.Ul.className="slider-box"
        let oLi = this.data.map((ele)=>{
            return `<li class="slider-box-item"><img src="${ele.src}"></li>`
        }).join("")
        this.Ul.innerHTML=oLi
    }
    renderDiv(){
        this.oDiv = document.createElement('div');
        this.oDiv.className="slider-control"
        this.oDiv.innerHTML=`<div class="swiper-button-next m-icons  m-icons-next-hover"></div> 
                             <div class="swiper-button-prev m-icons  m-icons-forward-hover"></div>`

    }
    renderOl(){
        this.oL=document.createElement('ol');
        this.oL.className="slider-nav";
        let oL = this.data.map((ele,index)=>{
            return `<li class="slider-nav-item">${index+1}</li>`
        }).join("");
        this.oL.innerHTML=oL;
    }
    next(){
            this.index++
            if(this.index==this.data.length){
                this.index=0;
            }
            this.Ul.style.left=-(this.ulWidth*this.index)+"px"
            this.checkSeletorItem(this.index);
    }
    prev(){
        this.index--
            // console.log(this.index,this);
            if(this.index==-1){
                this.index=this.data.length-1;
            }
            this.Ul.style.left=-(this.ulWidth*this.index)+"px"
            this.checkSeletorItem(this.index);
    }
    addButton(){
        this.oDiv.onclick=(e)=>{
            e = e ||window.event;
            let targe = e.targe||e.srcElement;
            console.log(targe.className);
            
            if(targe.className=="swiper-button-next m-icons  m-icons-next-hover"){
                this.next()
            }
            else if(targe.className=="swiper-button-prev m-icons  m-icons-forward-hover"){
                this.prev();
            }
        }
    }
    autoPlayer(){
        this.timer = setInterval(() => this.next(), 2000);
    }
    addMouseHandler(){
        this.root.onmouseenter = ()=>clearInterval(this.timer)
        this.root.onmouseleave = ()=>this.autoPlayer();
    }
    addClickHander(){
        let items = this.oL.children;
        Array.from(items).forEach((ele,index)=>{
            let self=this;
            ele.onmouseenter = function(){
                self.checkSeletorItem(index);
                self.index=index;
                self.Ul.style.left=-(self.ulWidth*self.index)+"px"
            }
        })
    }
    checkSeletorItem(index){
        Array.from(this.oL.children).forEach(ele=>ele.classList.remove('active'))
        this.oL.children[index].classList.add("active");
    }
}
