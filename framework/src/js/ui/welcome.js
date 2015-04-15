define(['jquery'], function($) {

    var DESKTOP_WIDTH = 1024,
        SMALL_DESKTOP_WIDTH = 823,
        MOBILE_WIDTH = 540,

        DESKTOP_ACTIVE = true;
        SMALL_DESKTOP_ACTIVE = false;
        MOBILE_ACTIVE = false;

	return { 

        $welcomeTeaser : $(".section-welcome .teaser--welcome"),

        init: function() {

            alert('y');
            
            if($(window).width() >= SMALL_DESKTOP_WIDTH) {
                this.switchLayout();
                this.equalWelcomePanel();
                this.equalStandardLargePanel();
            } else {
                DESKTOP_ACTIVE = false;
            }
            
            if($(window).width() <= MOBILE_WIDTH) {
                MOBILE_ACTIVE = true;
            } else {
                MOBILE_ACTIVE = false;
                this.adjustWidescreenTeasers();
            }

            this.listenToResize();

        },

        listenToResize: function() {

            $(window).bind("resize",$.proxy(function() {

                if($(window).width() <= SMALL_DESKTOP_WIDTH && DESKTOP_ACTIVE == true) {
                    DESKTOP_ACTIVE = false;
                    this.resetLayout();
                    this.resetWelcomePanel();
                    this.resetStandardLargePanel();
                }

                if($(window).width() >= SMALL_DESKTOP_WIDTH && DESKTOP_ACTIVE == false) {
                    DESKTOP_ACTIVE = true;
                    this.switchLayout();
                    this.equalWelcomePanel();
                    this.equalStandardLargePanel();
                }

                if($(window).width() > MOBILE_WIDTH && MOBILE_ACTIVE == true) {
                    this.adjustWidescreenTeasers();
                    MOBILE_ACTIVE = false;
                }

                if($(window).width() <= MOBILE_WIDTH && MOBILE_ACTIVE == false) {
                    this.resetWidescreenTeasers();
                    MOBILE_ACTIVE = true;
                }

                if(DESKTOP_ACTIVE) {
                    this.equalWelcomePanel();
                    this.equalStandardLargePanel();
                }


            },this));

        },

        switchLayout: function() {

            $(".section-welcome .group-1").append( $(".section-welcome .group-2 > .teaser:nth-child(1)") );
            $(".section-welcome .group-2 > .teaser:nth-child(1)").before( $(".section-welcome .group-1 > .teaser:nth-child(1)") );
            $(".section-welcome .group-1 .teaser").addClass("teaser--kilo");
        },

        resetLayout: function() {
            $(".section-welcome .group-2").prepend( $(".section-welcome .group-1 > .teaser") );
            $(".section-welcome .group-1").append( $(".section-welcome .group-2 > .teaser:nth-child(2)") );
        },

        equalWelcomePanel: function() {
            var $matchTeaser = this.$welcomeTeaser.next(".teaser"),
                h = $matchTeaser.innerHeight(),
                mt = parseInt(this.$welcomeTeaser.css("marginTop"));
                this.$welcomeTeaser.find(".teaser__panel").innerHeight( (h + ((mt * -1)))); // h of matching teaser + the offset into hero - padding adjustment
        },

        resetWelcomePanel: function() {
            this.$welcomeTeaser.find(".teaser__panel").height("auto");
        },

        equalStandardLargePanel: function() {
            var $measureTeaser = $(".section-welcome .group-2"),
                $matchTeaser = $(".section-welcome .group-1"),
                $matchTeaserPanel = $(".section-welcome .group-1 .teaser .teaser__panel");
                diff = $measureTeaser.innerHeight() - $matchTeaser.innerHeight();
                panelHeight = $matchTeaserPanel.innerHeight();
                $matchTeaserPanel.innerHeight(panelHeight + diff);
        },

        resetStandardLargePanel: function() {
            $(".section-welcome .teaser--kilo").find(".teaser__panel").height("auto");
            $(".section-welcome .teaser--kilo").removeClass("teaser--kilo");
        },

        adjustWidescreenTeasers: function() {
            $(".teaser--widescreen").each(function() {
                $image = $(".teaser__image",this);
                 style = $image.attr("style");
                         $image.attr("style","");
                         $(this).attr("style",style);
                         $(this).css("background-size","cover");
            });
        },

        resetWidescreenTeasers: function() {
            $(".teaser--widescreen").each(function() {
                $image = $(".teaser__image",this);
                 style = $(this).attr("style");
                         $(this).attr("style","");
                         $image.attr("style",style);
                         $image.css("background-size","cover");
            });
        },


	}

});