(function($) {
    var fadeOption = {duration: 150};

    function toggleLeft() {
        $('#sidebar_bg').show('fade', fadeOption);
        $('#dokuwiki__aside').show();
    }

    function toggleRight() {
        $('#sidebar_bg').show('fade', fadeOption);
        $('#dokuwiki__tools').show();
    }

    function preventParentWheel(e) {
    	var curScrollPos = $(this).scrollTop();
    	var scrollableDist = $(this).prop('scrollHeight') - $(this).outerHeight();
    	var wheelEvent = e.originalEvent;
    	var dY = wheelEvent.deltaY;

    	if (dY < 0 && curScrollPos <= 0) {
    		return false;
    	}
    	if (dY > 0 && curScrollPos >= scrollableDist) {
    		return false;
    	}
    }

    function showSearch() {
        $('div.search').toggle();
        $('div.search').find('input.edit').select();
    }

    function bindEvents() {
        $('.sidebar').on('wheel scroll', preventParentWheel);
        $('.btn_left').click(function() {
            toggleLeft();
        });
        $('#dokuwiki__aside #dw__toc li').click(function() {
            $('#sidebar_bg').hide('fade', fadeOption);
            $('#dokuwiki__aside').hide();
            $('#dokuwiki__tools').hide();
        });        
        $('.btn_right').click(function() {
            toggleRight();
        });
        $('#sidebar_bg').click(function() {
            $(this).hide('fade', fadeOption);
            $('#dokuwiki__aside').hide();
            $('#dokuwiki__tools').hide();
        });
        $('.btn_search').click(function() {
            showSearch();
        });
        $(document).keydown(function(e) {
            if (e.which == 70 && e.altKey) {
                showSearch();
                e.preventDefault();
            }
        });
    }

    function initUI() {
        // Move TOC
        if ($('.page h2').length > 0) {
            if($('.sidebar').length > 0) {
                $('.toc_wikipedia').find('#dw__toc').insertAfter($('#dokuwiki__aside .level2'));
            } else {
                $('.toc_wikipedia').find('#dw__toc').insertBefore($('.page h2:first'));
            }
        } else {
            if($('.sidebar').length > 0) {
                $('.toc_wikipedia').find('#dw__toc').insertAfter($('#dokuwiki__aside .level2'));
            } else {
                $('.toc_wikipedia').find('#dw__toc').insertAfter($('.page h1:first').next('.level1'));
            }
        }
        $('.toc_dokuwiki').find('#dw__toc').insertAfter($('.page h1:first'));
        // Anchor link should be shifted by header pixel
        $(window).on("hashchange", function () {
            window.scrollTo(window.scrollX, window.scrollY - 48);
        });
    }

    function moveSectionEditButton() {
        if(jQuery('.loggedIn').length){
            var $dokuContent = jQuery('#dokuwiki__content');
            var $tgtBtn = $dokuContent.find('.editbutton_section');
            $tgtBtn.each(function(index) {
                var id = $(this).attr('id').replace(/[^0-9]/g,"");
                $(this).appendTo($dokuContent.find('.seclink'+id));
            });
        }
    }
    
    $(function() {
        initUI();
        bindEvents();
        moveSectionEditButton();
    });
})(jQuery);
