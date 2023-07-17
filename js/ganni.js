

$(function(){
    mainSlider();
    tryProductSlider();
    newinSlider();
    interviewImageSlider();
    qaSlider();
    way3carouselSlider();
    guideSlider();
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
    justToggle(".detailContainer aside > div:last-of-type > ul > li > h3");
    justToggle(".assistanceContainer > .assistancewrap .mainContents > div > ul > li h4");
    justToggle("#filtersNewinPanel form > div > h3");
    justToggle("#filtersShoesPanel form > div > h3");
    justToggle("#filtersClothingPanel form > div > h3");
    justToggle("#filtersDressesPanel form > div > h3");
    justToggle("#filtersOuterPanel form > div > h3");
    justToggle("#filtersAccPanel form > div > h3");
    justToggle("footer > div .assistance h3");
    justToggle("footer > div .aboutGanni h3");
    justToggle("footer > div .sns h3");
    justToggle("header > div nav ul > li b");
    justToggle(".checkout01Container > div > div > form > div > div span");
    modalpopup("input[data-popup=passwordTip]" , "#passwordTip");
    imagehover(".listNewinContainer a > img");
    imagehover(".listContainer a > img");
    imagehover(".main_slider a > img");
    navmenu();
    tabBtn();
    topBtn();
    popup("#signInPanel > div:nth-of-type(2) h3 input[type='button']");
    popup("input[data-popup=questionComment]" , "#questionComment");
    accountpopup(".mydetailsContainer .accountMain > div > #detailModify > form > input[type='button']","#detailModify")
    accountpopup(".myaddressContainer .accountMain > div > #addAddress > form > input[type='button']","#addAddress" , ".myaddressContainer .accountMain > div > #addressApply > input[type='button']")
    accountpopup(".trackingContainer .accountMain > div > #trackingModify form input[type='button']","#trackingModify")
    accountpopup(".paymentContainer .accountMain > div > #addPayment form input[type='button']","#addPayment" , ".paymentContainer .accountMain > div > #savePayment > input[type='button']")
});


function customSlider(slideName,slideMode,slideEasing,slideVideo,slidePager,slidePagerType,slideControls,slideAuto,slideAutoControls,slideAutoStart,slideAutoHover,slideMaxSlides,slideMinSlides,slideMoveSlides,slideSlideWidth,slideShrinkItems,slideSlideMargin,slideWrapperClass,sliderRandom,slidetouchEnabled,sliderAuto){
    $(slideName).bxSlider({
        mode: slideMode,
        easing: slideEasing,
        video: slideVideo,
        pager: slidePager,
        pagerType: slidePagerType,
        controls: slideControls,
        auto: slideAuto,
        autoControls: slideAutoControls,
        autoStart: slideAutoStart,
        autoHover: slideAutoHover,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        moveSlides: slideMoveSlides,
        slideWidth: slideSlideWidth,
        shrinkItems: slideShrinkItems,
        slideMargin: slideSlideMargin,
        wrapperClass: slideWrapperClass,
        randomStart: sliderRandom,
        touchEnabled: slidetouchEnabled
    });
}

function mainSlider(){
    $(".main_slider").bxSlider({
            slideWidth: 480,
            maxSlides: 4,
            minSlides: 1,
            moveSlides: 1,
            shrinkItems: true,
            touchEnabled: false
        }
    );
    
}

function tryProductSlider(){
    $(".tryProductSlider").bxSlider({
            slideWidth: 480,
            maxSlides: 4,
            minSlides: 1,
            moveSlides: 1,
            shrinkItems: true,
            touchEnabled: false
        }
    ); 
}


function newinSlider(){
    $(".newinSlider").bxSlider({
            slideWidth: 350,
            maxSlides: 4,
            minSlides: 2,
            shrinkItems: true,
            touchEnabled: false
        }
    ); 
}

function interviewImageSlider(){
    $(".interviewImageSlider").bxSlider({
            slideWidth: 580,
            slideMargin: 15,
            maxSlides: 2.2,
            minSlides: 2,
            moveSlides: 1,
            shrinkItems: true
        }
    ); 
}


function qaSlider(){
    $(".qaSlider").bxSlider({
            slideWidth: 580,
            slideMargin: 15,
            maxSlides: 2.5,
            minSlides: 2,
            moveSlides: 1,
            shrinkItems: true
        }
    ); 
}


function way3carouselSlider(){
    $(".way3carouselSlider").bxSlider({
            slideWidth: 475,
            slideMargin: 5,
            maxSlides: 3,
            minSlides: 2,
            shrinkItems: true
        }
    ); 
}


function guideSlider(){
    $(".guideSlider").bxSlider({
            slideWidth: 960,
            maxSlides: 2,
            minSlides: 2,
            shrinkItems: true
        }
    ); 
}



$(window).resize(resizeContents);

function resizeContents(){
    var windowWidth = $( window ).width();
    if(windowWidth < 1279){
        $(".detailSlider").bxSlider({
                auto: true,
                speed: 1200,
                pause: 2600,
                slideWidth: 1300,
                maxSlides: 1,
                minSlides: 1,
                shrinkItems: true
            }
        );
    } else if(windowWidth >= 1280){

    }
    // todo. 1280보다 커졌을때 / 상황으로 만들기.
}





function modalpopup(a,b){
    $(a).click(function(){
        $(b).addClass('active');
    });
    $(b + ' .btnClose').click(function(){
        $(b).removeClass('active');
    });
}




function imagehover(target){
    $(target).hover(function(){
        $(this).attr("src", $(this).attr("src").replace(".jpg", "_Hover.jpg"));
    }, function(){
        $(this).attr("src", $(this).attr("src").replace("_Hover",""));
    });

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


function navmenu(){
    $(window).scroll(function(){
        if($(window).scrollTop() == 0){
            $('header').removeClass("active");
        } else{
            $('header').addClass("active");
        }
    });
    $('.menuBtn').click(function(){
        $(this).toggleClass('active');
        $('header > div > nav').toggleClass('active');
        $('.indexHeader').toggleClass('active');
    });
}

function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
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
        $(popup).toggleClass("active");
    });
}

function accountpopup(a,b,c){
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






