var $range = $("#example_1");
var $input = $("#example_1_input");
var $result = $("#totalmonth")
var instance;
var min = 0;
var max = 100000;

var $plan = $("#pricingplan")
var es = document.getElementById("pricingplan");
var es2 = document.getElementById("trans-dom");
var $dc = $("#discount-js")
var dj = document.getElementById("discount-js")
var dj2 = document.getElementById("discount-js2")
var $pricing = $("#pricetotal");
var pt = document.getElementById("pricetotal");

var custom_values = [10000, 30000, 50000, 100000];
var my_from = custom_values.indexOf(10000);
var my_to = custom_values.indexOf(100000);
var x = 0
function prettify(num) {
  var n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",");
}



$range.ionRangeSlider({
  skin: "round",
  type: "single",
  // from_min: 10000,
  // min: min,
  // max: max,
  postfix: "/month",
  prettify_separator: ",",
  from: my_from,
  to: my_to,
  values: custom_values,
  onStart: function (data) {
    console.dir(data);
    $pricing.prop("value", data.from_value);
    $pricing.text(prettify(data.from_value) );
    $result.text(prettify(29) );
  },
  onChange: function (data) {
    var val =es2.value;
    var valopt = es.value;
    $pricing.text(prettify(data.from_value ) );
    if(val == "dom" ){
      if(data.from_value == 10000 && valopt == "Monthly"){
        $result.text(prettify(29) );
      }else if(data.from_value == 10000 && valopt == "Yearly"){
        $result.text(prettify(24.65) );
      }
      if(data.from_value == 30000 && valopt == "Monthly"){
        $result.text(prettify(39) );
      }else if(data.from_value == 30000 && valopt == "Yearly"){
        $result.text(prettify(33.15) );
      }
      if(data.from_value == 50000 && valopt == "Monthly"){
        $result.text(prettify(59) );
      }else if(data.from_value == 50000 && valopt == "Yearly"){
        $result.text(prettify(50.15) );
      }
      if(data.from_value == 100000 && valopt == "Monthly"){
        $result.text(prettify(99) );
      }else if(data.from_value == 100000 && valopt == "Yearly"){
        $result.text(prettify(84.15) );
      }
    } else if (val == "ukeu"){
      if(data.from_value == 10000 && valopt == "Monthly"){
        $result.text(prettify(49) );
      }else if(data.from_value == 10000 && valopt == "Yearly"){
        $result.text(prettify(41.65) );
      }
      if(data.from_value == 30000 && valopt == "Monthly"){
        $result.text(prettify(69) );
      }else if(data.from_value == 30000 && valopt == "Yearly"){
        $result.text(prettify(58.65) );
      }
      if(data.from_value == 50000 && valopt == "Monthly"){
        $result.text(prettify(99) );
      }else if(data.from_value == 50000 && valopt == "Yearly"){
        $result.text(prettify(84.15) );
      }
      if(data.from_value == 100000 && valopt == "Monthly"){
        $result.text(prettify(139) );
      }else if(data.from_value == 100000 && valopt == "Yearly"){
        $result.text(prettify(118.15) );
      }
    }
  },
  
  hide_min_max: true,
});


instance = $range.data("ionRangeSlider");

// $pricing.on("input",function(){
//   var tp =$(this).prop("value");
  

//   validate
//   if (tp === custom_values[0]) {
//     tp = 300;
//     $result.text("300")
//   } else if (tp > to) {
//     tp = to;
//   }

//   instance.update({
//     from : tp
    
//   });
// })
function onChange1(){
  var val =es.value;
  var valopt = es.options[es.selectedIndex].text;
  if(valopt == "Monthly"){
    dj.style.backgroundColor = "transparent"
  }else if(valopt == "Yearly"){
    dj.style.backgroundColor = "#F7931E"
  }
}
function onChange2(){
  // var val2 =es2.value;
  // if(val2 == "dom"){
  //   dj2.style.backgroundColor = "transparent"
  // }else if(val2 == "ukeu"){
  //   dj2.style.backgroundColor = "#F7931E"
  // }
}