var $range = $("#example_1");
var $input = $("#example_1_input");
var instance;
var min = 0;
var max = 30000;

var $plan = $("#pricingplan")
var es = document.getElementById("pricingplan");
var val =es.value;
    
$range.ionRangeSlider(
  {
    skin: "round",
    type: "single",
    min: min,
    max: max,
    from: val,
    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
    },
    hide_min_max: true,
  }
);

instance = $range.data("ionRangeSlider");

function checks(){
  val =es.value;
}
$plan.on("change", function() {
  checks()
  instance.update({
      from: val,
  });
  // checks()
  // console.log(val);
});
$input.on("click", function() {
  instance.update({
      from: 50,
  });
});