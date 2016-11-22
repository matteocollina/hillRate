/* 
 * All rights reserved : Matteo Collina
 * Linkedin: https://it.linkedin.com/in/matteo-collina-98ab73ab
 */

$(document).ready(function () {


    (function ($) {


        var methods = {
            init: function (options) {
                console.log('Init hillRate');
                var rating = $(this);
                var numStar = options.stars;

                var imageStarDefault = options.imageStar.default ? options.imageStar.default : 'img/star-empty.png';
                var imageStarFull = options.imageStar.full ? options.imageStar.full : 'img/star-full.png';
                var imageStarHalf = options.imageStar.half ? options.imageStar.half : 'img/star-half.png';
                var state_unselected = options.imageStar.state_unselected ? options.imageStar.state_unselected : 'full';

                var imageStarOnIndex = options.imageStarOnIndex;
                var valuesStar = options.valuesStar ? options.valuesStar : methods.initialValues(numStar);
                var nameInput = options.nameInput ? options.nameInput : "rating";
                var responsive = options.responsive ? options.responsive : false;
                var showSelectedValue = options.showSelectedValue ? true : false;

                rating.html('');
                var styleContent = responsive ? 'style="width:100%"' : '';
                rating.append('<div ' + styleContent + '>');

                for (var i = 0; i < numStar; i++) {
                    var img = imageStarDefault;
                    var imgFull = imageStarFull;
                    var imgHalf = imageStarHalf;
                    var stateUnselected = state_unselected;

                    var valStar = valuesStar[i];
                    var titleStar = options.titleStar ? options.titleStar[i] : "";

                    if (imageStarOnIndex) {
                        for (var j = 0; j < imageStarOnIndex.length; j++) {
                            var thisImageStarOnIndex = imageStarOnIndex[j];
                            if (thisImageStarOnIndex.index == i) {
                                img = thisImageStarOnIndex.default;
                                imgFull = thisImageStarOnIndex.full;
                                imgHalf = thisImageStarOnIndex.half;
                                stateUnselected = thisImageStarOnIndex.state_unselected ? thisImageStarOnIndex.state_unselected : "full";
                            }
                        }
                    }
                    var percentual = 100 / (numStar + (showSelectedValue ? 1 : 0));
                    var styleItem = responsive ? 'style="width:' + percentual + '%"' : '';
                    rating.append('<img data-id="' + i + '" class="item-rate" data-title="' + titleStar + '" data-value="[' + valStar + ']" data-half="' + imgHalf + '" data-full="' + imgFull + '" data-default="' + img + '" data-unselected="' + stateUnselected + '" src="' + img + '" ' + styleItem + '>');
                    $('.item-rate').unbind("click").bind("click", {item: $(this), options: options}, methods.selectStar);
                }
                /* selected value */
                var percentual = 100 / (numStar + (showSelectedValue ? 1 : 0));
                var styleItem = responsive ? 'style="width:' + percentual + '%;float: right;text-align:center;margin-top:10px;font-size:20px;"' : '';
                rating.append(' <div class="selected_value" ' + styleItem + '></div>');

                /* input  */
                rating.append(' <input name="' + nameInput + '" type="hidden">');
                if (options.titleStar) {
                    rating.append(' <p style="width: 100%;text-align: center;"></p> ');
                }
                rating.append('</div>');
            },
            /* Initialize values of each star */
            initialValues: function (numStar) {
                var values = [];
                for (var i = 0; i < numStar; i++) {
                    values.push(i);
                }
                return values;
            },
            selectStar: function (e) {
                var item = $(e.target); /* get this */
                var val = item.data('value');
                var titles = item.data('title').split(",");
                var id = item.data('id');

                var selected = 0;
                var title = "";

                /* if is half star */
                if (val.length == 2) {
                    var pWidth = item.innerWidth();
                    var pOffset = item.offset();
                    var x = e.pageX - pOffset.left;
                    if (pWidth / 2 > x) {
                        selected = val[0];
                        title = titles[0];
                    }
                    else {
                        selected = val[1];
                        title = titles[1];
                    }
                }
                /* if full star */
                else {
                    selected = val[0];
                    title = titles[0];
                }

                /* other stars */
                var allStars = item.siblings('.item-rate');
                allStars.each(function (index) {
                    /* full star colored */
                    if ($(this).data('id') < id) {
                        var state = $(this).data('unselected');
                        $(this).attr('src', $(this).data(state));
                    } else if ($(this).data('id') > id) {
                        /* empty star because not selected */
                        $(this).attr('src', $(this).data('default'));
                    }
                });
                /* this stars could be half*/
                if (val.length == 2) {
                    /* if star is half selected */
                    if (val[0] == selected) {
                        item.attr('src', item.data('half'));
                    } else {
                        item.attr('src', item.data('full'));
                    }
                } else {
                    /* this stars is full*/
                    item.attr('src', item.data('full'));
                }

                item.siblings('input').val(selected);
                if (title != "") {
                    item.siblings('p').text(title);
                }

                var showSelectedValue = e.data.options.showSelectedValue;
                if (showSelectedValue) {
                    item.siblings('.selected_value').text(selected);
                }
                //var options = e.data.options;
            }
        };


        $.fn.hillRate = function (methodOrOptions) {
            if (methods[methodOrOptions]) {
                return methods[ methodOrOptions ].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
                // Default to "init"
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + methodOrOptions + ' does not exist on jQuery.hillRate');
            }
        };

    })(jQuery);
});