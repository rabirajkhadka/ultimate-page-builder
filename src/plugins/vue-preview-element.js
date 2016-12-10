import { util } from 'vue';

($ => {

    const vPreviewElement = {};

    vPreviewElement.install = function (Vue, options) {

        Vue.directive('preview-element', {

            bind : function (el, binding, vnode) {},

            update : function (newValue, oldValue, vnode) {},

            unbind : function (el) {},

            componentUpdated : function () {},

            inserted : function (el, binding, vnode) {

                $(el).addClass('upb-preview-element');

                $(el).find('>.upb-preview-mini-toolbar').on('mouseenter', function (event) {
                    event.stopPropagation();
                    vnode.context.model._upb_options.focus = true;
                });

                $(el).find('>.upb-preview-mini-toolbar').on('mouseleave', function (event) {
                    event.stopPropagation();
                    vnode.context.model._upb_options.focus = false;
                });

            }
        });
    };

    if (typeof exports == "object") {
        module.exports = vPreviewElement
    }
    else if (typeof define == "function" && define.amd) {
        define([], function () {
            return vPreviewElement
        })
    }
    else if (window.Vue) {
        window.vPreviewElement = vPreviewElement;
        Vue.use(vPreviewElement)
    }

})(window.jQuery);
