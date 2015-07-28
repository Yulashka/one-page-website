
        $(function () {
            $('.nav a').on('click', function(){
                if(window.innerWidth < 768){
                    $(".navbar-toggle").click()
                }
            });

            $('#skills').waypoint(function () {
                $('.chart').easyPieChart({
                    //your configuration goes here
                    barColor: '#1eefe8',
                    size: 210,
                    trackColor: '#11161b',
                    scaleColor: '#11161b',
                });
            }, {
                offset: '50%'
            });
            $('.flexslider').flexslider();

            //$("body").tooltip({ selector: '[data-toggle=tooltip]' });
            $('.animate').addClass("fade");
            
            var aniFunc = function () {
                $(this).toggleClass($(this).data('animated'));
            };
            
            //Animate from top
            $('.animate').waypoint(
                aniFunc, 
                {
                    offset: '80%',
                    triggerOnce: true
                }
            );
            
        });
