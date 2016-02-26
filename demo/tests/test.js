console.log(angular);

describe('sample', function(){

  var UtilsServ; 

  beforeEach(module('calc'));

  beforeEach(inject(function(_UtilsServ_){
    UtilsServ = _UtilsServ_; 
  }));

  it('Sum', function(){
    console.log("First test");
    var res = UtilsServ.sumar(1,3);
    expect(res).toBe(4);
    expect(res).not.toBe(5);
    expect(function(){ UtilsServ.sumar()}).toThrow(new Error("2 Params were expected"));
  });
});
