define(['jquery'], function($) {

	return {

        $menuBtn : $(".charm-menu"),
        $menuPusher : $(".primary-nav.pusher"),
        $menuPushThis : $(".push-this"),

        $staffBtn : $(".header__charm--text"),
        $staffPusher : $(".staff-students-nav.pusher"),
        $staffPushThis : $(".push-this"),

        $searchBtn : $(".charm-search"),
        $searchSection : $(".section-site-search"),


        init: function() {
            
            this.listenEvents();

        },

        listenEvents: function() {

            this.$menuBtn.on("click",$.proxy(function() {


                this.removeAnimationBlocker();
                this.removeSubmenuDropdown();

                $("body").removeClass("staff-students-open");
                $("body").toggleClass("menu-open");
                $(this).toggleClass("active");

                if($("body").hasClass("search-open")) {

                    this.$searchSection.addClass("no-animation");
                    
                    $("body").toggleClass("search-open");

                }
                return false;

            },this));

            this.$staffBtn.on("click",$.proxy(function() {


                this.removeAnimationBlocker();
                this.removeSubmenuDropdown();

                $("body").removeClass("menu-open");
                $("body").toggleClass("staff-students-open");
                $(this).toggleClass("active");

                if($("body").hasClass("search-open")) {

                    this.$searchSection.addClass("no-animation");
                    
                    $("body").toggleClass("search-open");

                }
                return false;

            },this));

            this.$searchBtn.on("click",$.proxy(function() {

                this.removeAnimationBlocker();
                this.removeSubmenuDropdown();

                $("body").toggleClass("search-open");

                if($("body").hasClass("menu-open") || $("body").hasClass("staff-students-open")) {

                    this.$menuPusher.addClass("no-animation");
                    this.$menuPushThis.addClass("no-animation");

                    this.$staffPusher.addClass("no-animation");
                    this.$staffPushThis.addClass("no-animation");

                    $("body").removeClass("menu-open");
                    $("body").removeClass("staff-students-open");
                }
                return false;
                
            },this));

        },

        removeAnimationBlocker: function() {

            $(".section-site-search, .pusher, .push-this").removeClass("no-animation");

        },

        removeSubmenuDropdown: function() {

            $("body").removeClass("submenu-open");
            $('.breadcrumb nav').css({height:60});
            $(".breadcrumb nav ul li").removeClass('active');

        }

	}

});