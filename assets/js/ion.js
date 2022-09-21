var $range = $("#example_1");
    var $input = $("#example_1_input");
    var $input2 = $("#example_2_input");
    var $input3 = $("#example_3_input");
    var instance;
    var min = 0;
    var max = 1000;
    
$range.ionRangeSlider(
  {
    skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 500,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
  }
);

instance = $range.data("ionRangeSlider");

$input.on("click", function() {
  instance.update({
      from: 50,
  });
});
$input2.on("click", function() {
  instance.update({
      from: 300,
  });
});
$input3.on("click", function() {
  instance.update({
      from: 150,
  });
});