

let wwidth = $( window ).width()
$( window ).on('resize',function(){
    if(wwidth !== $(window).width() ){
        location.reload();
    }
})

$(function(){
    customSlider(".main_slider",480,4,1,1,true,0,false);
    customSlider(".tryProductSlider",480,4,1,1,true,0,false);
    customSlider(".newinSlider",350,4,2,0,true,0,false);
    customSlider(".interviewImageSlider",580,3,2,2,true,15,false);
    customSlider(".qaSlider",580,3,2,2,true,15,false);
    customSlider(".way3carouselSlider",475,3,2,0,true,5,false);
    customSlider(".guideSlider",960,2,2,0,true,0,false);
    resizeContents()
    panelControl("header div input[type='button']");
    panelControl(".detailContainer aside form input[type='button']");
    panelControl(".detailContainer .sizeCheck button[type='button']");
    panelControl(".listNewinContainer > div > div input[value='Filters']");
    panelControl(".listContainer > div > div input[value='Filters']");
    panelControl(".detailContainer aside > ul > li > input[type='button']");
    panelControl(".asideArea div input[type='button']");
    panelControl(".checkoutAside div input[type='button']");
    panelControl(".main_slider li fieldset input[type='button']");
    panelControl(".tryProductSlider li fieldset input[type='button']");
    panelControl(".signupcontainer > aside > div input[type='button']");
    justToggle("#filtersNewinPanel form > div > h3");
    justToggle("#filtersShoesPanel form > div > h3");
    justToggle("#filtersClothingPanel form > div > h3");
    justToggle("#filtersDressesPanel form > div > h3");
    justToggle("#filtersOuterPanel form > div > h3");
    justToggle("#filtersAccPanel form > div > h3");
    justToggle("footer > div .assistance h3");
    justToggle("footer > div .aboutGanni h3");
    justToggle("footer > div .sns h3");
    justToggle(".checkout01Container > div > div > form > div > div span");
    headerSlide();
    modalPopup("input[data-popup=passwordTip]" , "#passwordTip");
    imageHover(".listNewinContainer a > img");
    imageHover(".listContainer a > img");
    imageHover(".main_slider a > img");
    tabBtn();
    topBtn();
    popup("#signInPanel > div:nth-of-type(2) h3 input[type='button']");
    popup("#signInPanel > #forgotPassword .passwordSend input[value='SEND']");
    popup("input[data-popup=questionComment]");
    accountPopup(".mydetailsContainer .accountMain > div > #detailModify > form > input[type='button']","#detailModify");
    accountPopup(".myaddressContainer .accountMain > div > #addAddress > form > input[type='button']","#addAddress" , ".myaddressContainer .accountMain > div > #addressApply > input[type='button']" , "addressApply");
    accountPopup(".trackingContainer .accountMain > div > #trackingModify form input[type='button']","#trackingModify");
    accountPopup(".paymentContainer .accountMain > div > #addPayment form input[type='button']","#addPayment" , ".paymentContainer .accountMain > div > #savePayment > input[type='button']");
    accountPopup(".contactusContainer .mainContents > div > form input[type='button']");
    quantComponent();
    accordionSlide(".detailContainer aside > div:last-of-type > ul > li > h3");
    accordionSlide(".assistanceContainer > .assistancewrap .mainContents > div > ul > li h4");
    accordionSlide("header > div nav ul > li b");
});



function customSlider(slideName,slideSlideWidth,slideMaxSlides,slideMinSlides,slideMoveSlides,slideShrinkItems,slideSlideMargin,slideTouchEnabled){
    $(slideName).bxSlider({
        slideWidth: slideSlideWidth,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        moveSlides: slideMoveSlides,
        shrinkItems: slideShrinkItems,
        slideMargin: slideSlideMargin,
        touchEnabled: slideTouchEnabled
    });
}

function resizeContents(){
    if(window.matchMedia("(max-width: 768px)").matches){
        $(".detailSlider").bxSlider({
                auto: true,
                speed: 1200,
                pause: 2600,
                slideWidth: 1300,
                maxSlides: 1,
                minSlides: 1,
                shrinkItems: true,
                touchEnabled: false
            }
        );
    } 
}

function headerSlide(){
    $(window).scroll(function(){
        if($(window).scrollTop() == 0){
            $("header").removeClass("active");
        } else{
            $("header").addClass("active");
        }
    });
    if(window.matchMedia("(min-width: 1280px)").matches){
        $("header > div nav ul > li").hover(function(){
            $(this).find('.submenu').stop().slideToggle(300);
        });
    }else{
        $('.menuBtn').click(function(){
            $(this).toggleClass("active");
            $('header > div > nav').toggleClass("active");
            $('.indexHeader').toggleClass("active");
            if($('.menuBtn').hasClass("active")){
                $('.indexHeader').addClass("active");
            }
        });
    }
}


function panelControl(btn){
    var currentPanel = null;
    $(btn).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".btnClose").click(function(){
        $(currentPanel).removeClass("active");
    }); 
}

function justToggle(a,b){
    $(a).click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(b).not(this).removeClass("active");
        }
  })
}


function modalPopup(a,b){
    $(a).click(function(){
        $(b).addClass('active');
    });
    $(b + ' .btnClose').click(function(){
        $(b).removeClass('active');
    });
}


function imageHover(target){
    $(target).hover(function(){
        $(this).attr("src", $(this).attr("src").replace(".jpg", "_Hover.jpg"));
    }, function(){
        $(this).attr("src", $(this).attr("src").replace("_Hover",""));
    });

}

function tabBtn(){
    $(".storelocatorContainer > div:first-of-type > .storeMenu > ul > li input[type='button']").click(function(){
        $(".storelocatorContainer > div:first-of-type > .storeMenu > ul > li input[type='button']").removeClass('active');
        $(this).addClass('active');
        $(".storelocatorContainer > div:first-of-type > [id^='tab']").removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active');
    });
}

function topBtn(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000) {
            $('.listNewinContainer .topBtn button').fadeIn(2000);
        } else {
            $('.listNewinContainer .topBtn button').fadeOut(2000);
        }
    });
    $('.listNewinContainer .topBtn button').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 200);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000) {
            $('.listContainer .topBtn button').fadeIn(2000);
        } else {
            $('.listContainer .topBtn button').fadeOut(2000);
        }
    });
    
    $('.listContainer .topBtn button').click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 200);
        return false;
    });

}


function popup(btn){
    var popup = null;
    $(btn).click(function(){
        popup= "#" + $(this).attr("data-popup");
        $(popup).siblings(".passwordSend").css("display","none");
        $(popup).toggleClass("active");
        if($(popup).hasClass("active")) {
            $(btn).addClass("active");
        } else {
            $(btn).removeClass("active");
        }
    });
}

function accountPopup(a,b,c){
    var popup = null;
    $(a).click(function(){
        $(b).removeClass("active");
        popup= "#" + $(this).attr("data-popup");
        $(popup).addClass("active");
    });
    $(c).click(function(){
        $(popup).removeClass("active");
        $(b).addClass("active");
    });
}

function quantComponent(){
    $("#bagHavePanel > form ul li > div > .quantComponent > .btnMinus").click(function(){        
        var count = $(this).parent(".quantComponent").children("span").text();
        var num = Number(count);

        num--;
        if(num<=0){
            num=1;
        }
        $(this).parent(".quantComponent").children("span").text(num);
    });

    $("#bagHavePanel > form ul li > div > .quantComponent > .btnPlus").click(function(){
        var count = $(this).parent(".quantComponent").children("span").text();
        var num = Number(count);

        num++;
        if(num>=5){
            num=5;
        }
        $(this).parent(".quantComponent").children("span").text(num);
    });
}

function accordionSlide(target){
    $(target).click(function(){
        $(this).toggleClass("active")
        if($(this).hasClass("active")){
            $(this).next().slideDown(400);
        }else if($(this).removeClass("active")){
            $(this).next().slideUp(400);
        }
    });
    
}


 




