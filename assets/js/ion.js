var $range = $("#example_1");
var $input = $("#example_1_input");
var $result = $("#totalmonth")
var instance;
var min = 10000;
var max = 100000;

var $plan = $("#pricingplan")
var es = document.getElementById("pricingplan");
var es2 = document.getElementById("trans-dom");
var $dc = $("#discount-js")
var dj = document.getElementById("discount-js")
var dj2 = document.getElementById("discount-js2")
var $pricing = $("#pricetotal");
var pt = document.getElementById("pricetotal");
var pt2 = document.getElementById("totalmonth");
var tpname = document.getElementById("transplan");
var $tpn = $("#transplan")

var yeardisc = parseFloat(0.15)
var monthcost = ""

var pricedom1 = parseFloat(29)
var pricedom2 = parseFloat(39)
var pricedom3 = parseFloat(59)
var pricedom4 = parseFloat(99)

var priceuk1 =  parseFloat(49)
var priceuk2 =  parseFloat(69)
var priceuk3 =  parseFloat(99)
var priceuk4 =  parseFloat(139)

var custom_values = [10000, 30000, 50000, 100000];
var my_from = custom_values.indexOf(10000);
var my_to = custom_values.indexOf(100000);
var x = 0
function prettify(num) {
  var n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",");
}



// $range.ionRangeSlider({
//   skin: "round",
//   type: "single",
//   // from_min: 10000,
//   // min: min,
//   // max: max,
//   postfix: "/month",
//   prettify_separator: ",",
//   from: my_from,
//   to: my_to,
//   values: custom_values,
//   onStart: function (data) {
//     var val =es2.value;
//     var valopt = es.value;
//     console.dir(data);
//     $pricing.prop("value", data.from_value);
//     $pricing.text(prettify(data.from_value) );
//     $result.text(prettify(29) );
//     $tpn.text(prettify("Monthly Transaction"))
//   },
//   onChange: function (data) {
//     var val =es2.value;
//     var valopt = es.value;
//     $pricing.text(prettify(data.from_value ) );
//     if(val == "dom" ){
//       if(data.from_value == 10000 && valopt == "Monthly"){
//         $result.text(prettify(29) );
//       }else if(data.from_value == 10000 && valopt == "Yearly"){
//         $result.text(prettify(24.65) );
//       }
//       if(data.from_value == 30000 && valopt == "Monthly"){
//         $result.text(prettify(39) );
//       }else if(data.from_value == 30000 && valopt == "Yearly"){
//         $result.text(prettify(33.15) );
//       }
//       if(data.from_value == 50000 && valopt == "Monthly"){
//         $result.text(prettify(59) );
//       }else if(data.from_value == 50000 && valopt == "Yearly"){
//         $result.text(prettify(50.15) );
//       }
//       if(data.from_value == 100000 && valopt == "Monthly"){
//         $result.text(prettify(99) );
//       }else if(data.from_value == 100000 && valopt == "Yearly"){
//         $result.text(prettify(84.15) );
//       }
//     } else if (val == "ukeu"){
//       if(data.from_value == 10000 && valopt == "Monthly"){
//         $result.text(prettify(49) );
//       }else if(data.from_value == 10000 && valopt == "Yearly"){
//         $result.text(prettify(41.65) );
//       }
//       if(data.from_value == 30000 && valopt == "Monthly"){
//         $result.text(prettify(69) );
//       }else if(data.from_value == 30000 && valopt == "Yearly"){
//         $result.text(prettify(58.65) );
//       }
//       if(data.from_value == 50000 && valopt == "Monthly"){
//         $result.text(prettify(99) );
//       }else if(data.from_value == 50000 && valopt == "Yearly"){
//         $result.text(prettify(84.15) );
//       }
//       if(data.from_value == 100000 && valopt == "Monthly"){
//         $result.text(prettify(139) );
//       }else if(data.from_value == 100000 && valopt == "Yearly"){
//         $result.text(prettify(118.15) );
//       }
//     }
//   },
  
//   hide_min_max: true,
// });

$range.ionRangeSlider({
  skin: "round",
  type: "single",
  min: min,
  max: max,
  postfix: "/month",
  prettify_separator: ",",
  from: 10000,
  onStart: function (data) {
    console.dir(data);
    // console.dir(monthcost);
    monthcost = pt2.innerHTML;
    $pricing.prop("value", data.from);
    $pricing.text(prettify(data.from) );
    $result.text(prettify(29) );
    $tpn.text(prettify("Monthly Transaction"))
    dj.style.color = "transparent"
  },
  onChange: function (data) {
    // console.dir(data);
    var val =es2.value;
    var valopt = es.value;
    $pricing.text(prettify(data.from ) );
    
    if(val == "dom" ){
      if(data.from >= 10000 && valopt == "Monthly"){
        $result.text(prettify(pricedom1) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 10000 && valopt == "Yearly"){
        $result.text(prettify(pricedom1-(pricedom1*yeardisc)) );
      }
      if(data.from >= 30000 && valopt == "Monthly"){
        $result.text(prettify(pricedom2) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 30000 && valopt == "Yearly"){
        $result.text(prettify(pricedom2-(pricedom2*yeardisc)) );
      }
      if(data.from >= 50000 && valopt == "Monthly"){
        $result.text(prettify(pricedom3) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 50000 && valopt == "Yearly"){
        $result.text(prettify(pricedom3-(pricedom3*yeardisc)) );
      }
      if(data.from >= 100000 && valopt == "Monthly"){
        $result.text(prettify(pricedom4) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 100000 && valopt == "Yearly"){
        $result.text(prettify(pricedom4-(pricedom4*yeardisc)) );
      }
      
    } else if (val == "ukeu"){
      if(data.from >= 10000 && valopt == "Monthly"){
        $result.text(prettify(priceuk1) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 10000 && valopt == "Yearly"){
        $result.text(prettify(priceuk1-(priceuk1*yeardisc)) );
      }
      if(data.from >= 30000 && valopt == "Monthly"){
        $result.text(prettify(priceuk2) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 30000 && valopt == "Yearly"){
        $result.text(prettify(priceuk2-(priceuk2*yeardisc)) );
      }
      if(data.from >= 50000 && valopt == "Monthly"){
        $result.text(prettify(priceuk3) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 50000 && valopt == "Yearly"){
        $result.text(prettify(priceuk3-(priceuk3*yeardisc)) );
      }
      if(data.from >= 100000 && valopt == "Monthly"){
        $result.text(prettify(priceuk4) );
        monthcost = pt2.innerHTML;
      }else if(data.from >= 100000 && valopt == "Yearly"){
        $result.text(prettify(priceuk4-(priceuk4*yeardisc)) );
      }
    }
  },
  
  hide_min_max: true,
});


instance = $range.data("ionRangeSlider");

function onChange1(){
  var totalcost = parseFloat(pt2.innerHTML) * yeardisc
  var valopt = es.options[es.selectedIndex].text;
  console.dir(monthcost)
  if(valopt == "Monthly"){
    dj.style.backgroundColor = "transparent"
    dj.style.color = "transparent"
    tpname.innerHTML = "Monthly Transaction"
    pt2.innerHTML = monthcost
  }else if(valopt == "Yearly"){
    dj.style.backgroundColor = "#F7931E"
    dj.style.color = "#FFFFFF"
    tpname.innerHTML = "Yearly Transaction"
    pt2.innerHTML = parseFloat(pt2.innerHTML) - totalcost
  }
}
function onChange2(){
  var valopt2 = es2.options[es2.selectedIndex].text;
  if(valopt2 == "Domestic Transactions"){
    pt2.innerHTML= "29"
  }else if(valopt2 == "UK and Europe transactions"){
    pt2.innerHTML= "49"
  }
}