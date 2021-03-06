(function() {
    if("undefined" === typeof(__ZSAD)){
        var __ZSAD = {}
        window.__ZSAD = __ZSAD;
        __ZSAD.bootURL = "/sites/js/zsad.js"
        __ZSAD.docScripts = [];
        __ZSAD.adSpaces = [];
        __ZSAD.firstRun = true;
        __ZSAD.getID = function() {
            return Math.floor(Math.random()*10000000000000)
        }
        __ZSAD.findScripts = function(){
            var scripts = document.getElementsByTagName("script");
            var len = scripts.length;
            for(var i=0;i<len;i++) {
                var script = scripts[i];
                if(script.getAttribute("data-zsada-id")==null && script.src.indexOf(__ZSAD.bootURL)!=-1) {
                    script.setAttribute("data-zsada-id",__ZSAD.getID());
                    __ZSAD.docScripts.push(script);
                }
            }
        }
        __ZSAD.processScripts = function() {
            var len = __ZSAD.docScripts.length;
            for(var i=0;i<len;i++) {
                var script = __ZSAD.docScripts[i];
                
                var scriptID = script.getAttribute("data-zsada-id");
                if(document.getElementsByClassName("zsad").length==0){
                var addiv = document.createElement("div");
                document.body.style["padding-bottom"]="60px";
                addiv.id="zsada-"+scriptID;
                addiv.innerHTML = "<div class=\"zsad\" style=\"height: 25px ! important; padding: 20px 0px; font-size: 13px; font-family: Arial, Helvetica, sans-serif;position: fixed;width: 100%;bottom: 0;z-index: 1000000;background: #0E2431;\"><p align=\"center\"> <a href=\"\"   rel=\"nofollow\" style=\"cursor: pointer;\"> <span style=\"vertical-align: top; color: #a4becc;\">Este Site customizado por Sadertec</span><img height=\"16px\" src=\"\" style=\"padding: 0px 10px 0px 5px;border:0px;\"></a></p></div>"
                
                __ZSAD.adSpaces.push(addiv.id);
                document.body.appendChild(addiv);
                } 
    
            }
            __ZSAD.docScripts.splice(0,len);
        }
        __ZSAD.addFloaterAd = function() {
        }
        __ZSAD.findScripts();
        __ZSAD.processScripts();
    }
    }());
    if(__ZSAD.timmer)clearTimeout(__ZSAD.timmer);
    __ZSAD.timmer = setTimeout(function() {
    __ZSAD.findScripts();
    __ZSAD.processScripts();
    },100);