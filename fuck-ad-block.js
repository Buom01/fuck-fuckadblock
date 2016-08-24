FuckAdBlock = {}; //With MAJ

fuckAdBlock = { //Normal, without MAJ
  checkOnLoad: true,
  onDetected: function(){
    return this;
  },
  onNotDetected: function(func){
    window.setTimeout(func,0);
    return this;
  },
  on: function(detected,func){
    if(detected == false){
      func();
    }
    return this;
  },
  setOption: function(args,val){
    if(typeof args == "string" && args == "checkOnLoad"){
      this.checkOnLoad = (val)?val:false;
    }else if(typeof args == "object" && typeof args.checkOnLoad != "undefined"){
      this.checkOnLoad = (args.checkOnLoad)?args.checkOnLoad:false;
    }
    return this;
  },
  check: function(){return this;},
  clearEvent: function(){return this;},
}
