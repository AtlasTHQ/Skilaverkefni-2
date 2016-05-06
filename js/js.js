/**
 * Created by 1612972679 on 28.1.2016.
 */
$(document).ready(function(){
    var localJson;
    //Hérna næ ég í gögnin með ajax
    $.ajax({
        'url': 'http://apis.is/currency/lb',
        'type': 'GET',
        'dataType': 'json',
        //Hérna skilar functionið út json-inu
        'success': function(response) {
            console.log(response);
            //Ég tek inn html template-ið
            var template = $("#upperContainer").html();
            //Compile-a það
            var renderer = Handlebars.compile(template);
            //Og svo loks render-a og skila því inn í html-ið
            var result = renderer(response);
            $("#upperContainer").html(result);
            var template = $("#currencyInfo").html();
            //Compile-a það
            var renderer = Handlebars.compile(template);
            //Og svo loks render-a og skila því inn í html-ið
            var result = renderer(response);
            $("#currencyInfo").html(result);
        }
    });
    $.ajax({
        'async': false,
        'global': false,
        'url': "js/api.json",
        'dataType': "json",
        'success': function (data) {
            localJson = data;
            console.log(localJson);

            $(document).on('change', 'select', function () {
                console.log($(this).val()); // the selected options’s value
                // if you want to do stuff based on the OPTION element:
                var opt = $(this).find('option:selected')[0];
                console.log(opt);
                switch (opt) {
                    case 1:
                        console.log("Evra!");
                        break;
                    case 2:
                        console.log("USD!");
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        break;
                    case 11:
                        break;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        break;
                    case 15:
                        break;
                    case 16:
                        break;
                    case 17:
                        break;
                    case 18:
                        break;
                }
                function loadChart (parameter){
                    console.log(parameter);
                    usableOpt = parameter;
                    for (i = 0; i < localJson.results[0].lastValues.length; i++){
                        localJson.results[usableOpt].lastValues[i] + ","
                    }
                }
                var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        columns: [
                            //['ISK', 30, 200, 100, 400, 150, 250],
                            [loadChart(opt)]
                        ]
                    }
                });
            })
        }
    });
    });

    $("button").click(function(){
        $("p").toggle();
    });

