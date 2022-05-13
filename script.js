$(".fortune-display").hide();

$("button").click(function() {
    $(".start-display").hide();
    $(".fortune-display").show();
});

$("button").click(function() {
    let name = $(".questionOne").val();
    console.log(name);
    let hours = $(".questionTwo").val();
    console.log(hours);
    let yesno = $(".questionThree").val();
    console.log(yesno);
    var year = $('input[name="year"]').val();
    let total = 87658.1277 * hours;
    $(".fortune-display").append(name + " will have slept " + total + " hours " + "after 10 years later.");
});