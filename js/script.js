$(document).ready(function() {
    model = {
        localJson: {},
        currency: 0,
        valueHolder: [],
        selectedCurrency: 0
    };

    controller = {
        init: function () {
            $.getJSON("js/api.json", function (data) {
                model.localJson = data;
            }).done(function () {
                console.log(model.localJson)
                view.init()
            });
            $("button").click(function(){
                $("p").toggle();
            });
        },
    };

    view = {
        init: function () {
            var template = $("#upperContainer").html();
            console.log(template);
            //Compile-a það
            var renderer = Handlebars.compile(template);
            //Og svo loks render-a og skila því inn í html-ið
            var result = renderer(model.localJson);
            $("#upperContainer").html(result);
            var template = $("#infoBlockText").html();
            //Compile-a það
            var renderer = Handlebars.compile(template);
            //Og svo loks render-a og skila því inn í html-ið
            var result = renderer(model.localJson);
            $("#infoBlockText").html(result);
            $.each(model.localJson.results, function()
            {
                console.log("XXX");
            });
            console.log(model.localJson.results);
            $(document).on('change', 'select', function(){
                console.log($(this).val()); // the selected options’s value
                var chartOpt = $(this).find('option:selected')[0];
                opt = $(this).val();
                switch (opt) {
                    case "EUR":
                        selectedCurrency = 0;
                        break;
                    case "USD":
                        selectedCurrency = 1;
                        break;
                    case "GBP":
                        selectedCurrency = 2;
                        break;
                    case "JPY":
                        selectedCurrency = 3;
                        break;
                    case "NOK":
                        selectedCurrency = 4;
                        break;
                    case "SEK":
                        selectedCurrency = 5;
                        break;
                    case "DKK":
                        selectedCurrency = 6;
                        break;
                    case "CHF":
                        selectedCurrency = 7;
                        break;
                    case "CAD":
                        selectedCurrency = 8;
                        break;
                    case "AUD":
                        selectedCurrency = 9;
                        break;
                    case "ZAR":
                        selectedCurrency = 10;
                        break;
                    case "HKD":
                        selectedCurrency = 11;
                        break;
                    case "NZD":
                        selectedCurrency = 12;
                        break;
                    case "XDR":
                        selectedCurrency = 13;
                        break;
                    case "PLN":
                        selectedCurrency = 14;
                        break;
                    case "SGD":
                        selectedCurrency = 15;
                        break;
                    case "CNY":
                        selectedCurrency = 16;
                        break;
                    case "GVT":
                        selectedCurrency = 17;
                        break;
                }
                function loadChart (parameter){
                    console.log();
                    for (i = 0; i < model.localJson.results[parameter].lastValues.length; i++){

                        model.valueHolder[i+1] = model.localJson.results[parameter].lastValues[i];
                    }
                    model.valueHolder[0] = opt + " to ISK";
                }
                loadChart(selectedCurrency);
                var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        columns: [
                            //['ISK', 30, 200, 100, 400, 150, 250],
                            model.valueHolder
                        ]
                    }
                });
            });
        }
    };
    controller.init();
});