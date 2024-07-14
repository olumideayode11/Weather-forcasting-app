$(document).ready(function() {
    new Typed("#intro", {
        strings: [
            "Weather app forcast that give",
            "you information based on",
            "the countries/state entered",
            "by the user."],

        typeSpeed: 50,
        loop: true,
        backSpeed: 40
    })

    $(".btn").click(function () {
        let data = $("#search").val();

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=c8ff16590bf1ec0f921b421de8341ad0",
            type: "get",
            success: function (data) {
                $("#sun").text(data.main.temp + "°C");
                $("#cloud").text(data.clouds.all);
                $("#humidity").text(data.main.humidity);
                $("#country").text(data.sys.country);


            },
            error: function (error) {
                console.log(error);
            }

        });

        $(".all").show()
        if (weather == data)
            $("span").text("weather");
        else {

        }
    })

})
