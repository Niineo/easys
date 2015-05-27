var easys = (function(){
    var init = true;
    var isSupportAttachEvent = function(){return !!document.attchEvent};
    
    return {
        init:init,
        isSupportAttachEvent:isSupportAttachEvent,
        version:'this is a test version'
    };
})();