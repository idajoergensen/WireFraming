$(document)
    .ready(function() {

        /* replace img tags with divs */
        $('img')
            .each(function(i, o) {
                // function for one of your img tags
                // which is accessible easily via $(o), e.g.
                $(o)
                    .replaceWith(
                        '<div class="image_holder" style="display: inline-block;width:' +
                        $(o)
                        .attr('width') + 'px; height:' + $(o)
                        .attr('height') +
                        'px"><label>image</label></div>');

            });

        /* block level tags: show width, height, padding and margin values in the title attribute */
        $(
                "div,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,img,ins,kbd,samp,dl,dt,dd,ol,ul,li,fieldset,form,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video"
            )
            .each(function() {
                var thisTag = $(this).prop("tagName");
                var titleContent = [thisTag +
                    "\n"
                ];

                var styleProps = $(this)
                    .css([
                        "width", "height", "padding", "margin"
                    ]);
                $.each(styleProps, function(prop, value) {
                    titleContent.push(prop +
                        ": " + value +
                        "\n");
                });
                var insertTitle = titleContent.join("");
                $(this).attr("title", insertTitle);
            });

    });