/**
 * Created by linyongxing on 2015/11/2.
 */

var JsTest = function(){
    function JsTest() {
    }
}
JsTest.test = function(a, b, c, d){
    console.log("static JsTest class...", a, b, c, d)
}
var share = function(str){
    console.log("in test " + str)
}
var globalTest = ["a", "b"]