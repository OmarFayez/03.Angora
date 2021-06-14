$(document).ready(function(){

    $("#screenloading").fadeOut(1500)
    $('body').css("overflow","auto")


    //Function to Show ColorscONFIG
    let colorsBoxContainerWidth =$(`.colorsBoxContainer`).outerWidth()
    $(`.toggleBar`).css("left",-colorsBoxContainerWidth)
    $(`.btnCog`).click(function(){
        
        if( $(`.toggleBar`).css(`left`)==`0px`)
        {
        $(`.toggleBar`).animate({left:-colorsBoxContainerWidth},500)
        }
        else
        {
        $(`.toggleBar`).animate({left:0},500)
        }
    })
    //Function To Change H1 Color From Config
    let colorBox =$(".colorBox")
    colorBox.eq(0).css("backgroundColor","#fff")
    colorBox.eq(1).css("backgroundColor","#4e9cb5")
    colorBox.eq(2).css("backgroundColor","#24bca4")
    colorBox.eq(3).css("backgroundColor","#ee8f67")
    colorBox.eq(4).css("backgroundColor","#c86f98")
    colorBox.click(function(){
        let ChangeColor=$(this).css(`backgroundColor`)
        $("header h1").css(`color`,ChangeColor)
        localStorage.setItem("color",ChangeColor)
    })
    if( localStorage.getItem("color")!=null)
    {
        let color =localStorage.getItem("color")
        $("header h1").css(`color`,color)
    }


    // Smothing And Styling With Scroll
    $(window).scroll(function(){

        let aboutOffset=$("#about").offset().top
        let teamOffset=$("#team").offset().top
        let servicesOffset=$("#services").offset().top
        let blogOffset=$("#blog").offset().top
        let contactOffset=$("#contact").offset().top
        let wScroll=$(window).scrollTop()
        if(wScroll>=aboutOffset-70)
        {
            $("li a").removeClass("activ")
            $("#about1").addClass("activ")

        $(".navbar").css("backgroundColor","#fff")
        $(".navbar").css("padding","10px 0px")
        $(".navbar-light .navbar-nav .nav-link").css("color","#282828")
        $(".navbar").css("boxShadow","0rem .125rem .25rem rgba(0,0,0,.075)")

        $(".navbar-light .navbar-nav  i ").css("color","#282828")
        $("nav img").attr("src","images/logo-red.png")
        $(`#btnUp`).fadeIn(500)
        }
        else
        {
                $("li a").removeClass("activ")
                $("#home1").addClass("activ")
                
            $(".navbar").css("backgroundColor","transparent")
            $(".navbar").css("padding","15px 0px")
            $(".navbar").css("borderBottom","1px solid rgba(255, 255, 255, 0.2)")
            $(".navbar").css("boxShadow","none")

            $(".navbar-light .navbar-nav .nav-link ").css("color","#fff")
            $(".navbar-light .navbar-nav  i ").css("color","#fff")
            $("nav img").attr("src","images/logo-white.png")
            $(`#btnUp`).fadeOut(500)   
        }
        if(wScroll>=teamOffset-50)
        {
            $("li a").removeClass("activ")
            $("#team1").addClass("activ")
        }
        if(wScroll>=servicesOffset-50)
        {
            $("li a").removeClass("activ")
            $("#services1").addClass("activ")
        }
        if(wScroll>=blogOffset-50)
        {
            $("li a").removeClass("activ")
            $("#blog1").addClass("activ")
        }
        if(wScroll>=contactOffset-50)
        {
            $("li a").removeClass("activ")
            $("#contact1").addClass("activ")
        }
      
    })

        // 
        $(`a[href^="#"]`).click(function(e){
            // $("li a").removeClass("activ")
            // $(this).addClass("activ")
            let linkHref=$(e.target).attr(`href`)
            let sectionOffset=$(linkHref).offset().top
            $(`html,body`).animate({scrollTop:sectionOffset},1500)
            })
        
            
    $(`#btnUp`).click(function(){
        $(`html,body`).animate({scrollTop:0},1000) 
    })
})