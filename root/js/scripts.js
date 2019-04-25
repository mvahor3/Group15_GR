function getPickSlotID(id, slot)
{
    var slotPrefix = id + "-slot";

    if(slot == 1)
    {
        return slotPrefix + "1"
    }
    else if(slot == 2)
    {
        return slotPrefix + "2";
    }
    else
    {
        return slotPrefix + "3";
    }
}

function loadSinglePick( id, slot, resturantName )
{
    $.getJSON( "resources/data/" + resturantName + ".json", function( resturant )
    {
        var slotDiv1 = document.getElementById( getPickSlotID(id, slot) );
        var imageSource = "resources/images/" + resturant.image;
        slotDiv1.innerHTML = '<div class="w3-card" style="width:50%">';
        slotDiv1.innerHTML += '<p>' + resturant.name + '</p>';
        slotDiv1.innerHTML += '<img src=' + '"' + imageSource + '"' + 'class="home-img"' + 'alt="' + resturant.imageSource + '">';
    });
}

function loadPickCommon(id, resturant1, resturant2, resturant3)
{
    loadSinglePick(id, 1, resturant1);
    loadSinglePick(id, 2, resturant2);
    loadSinglePick(id, 3, resturant3);
}
function onHomePageLoad()
{
    loadPickCommon("home-staff-picks", "mexican_julio", "mexican_arandas", "mexican_loscomales");
    loadPickCommon("home-trending-picks", "mexican_taconazo", "mexican_julio", "mexican_mitierra");
}

function getRandomResturant()
{
    var resturants = [ "burger_aucheval", "burger_bk", "burger_kumas", "burger_RHR", "burger_mcdonalds", "chinese_chopsticks", "chinese_emperor", "chinese_joyyee", "chinese_panda", "chinese_threehappiness", "indian_bundoo", "indian_ghareeb", "indian_jk", "indian_sabri", "korean_abbq", "korean_bbq", "korean_crisp", "korean_delseoul", "korean_joong", "mexican_arandas", "mexican_julio", "mexican_loscomales", "mexican_mitierra", "mexican_taconazo", "pizza_artofpizza", "pizza_colutas", "pizza_loumalnatis", "pizza_mamaluna", "pizza_pequods" ];
    var resturant = resturants[ Math.floor( Math.random() * resturants.length ) ];
    return resturant;
}

function randomizePicks(id)
{
    for(var j = 1; j <= 3; ++j)
    {
        loadSinglePick( id, j, getRandomResturant() );
    }
}

function searchFunction()
{
    return true;
}

// result page ---------------------------------------------------------------------------
function loadResult(resultNumber, resturantName)
{
    var resultIDPrefix = "result-search-result";

    $.getJSON( "resources/data/" + resturantName + ".json", function( resturant )
    {
        var resultDiv = document.getElementById( resultIDPrefix + resultNumber.toString() );
        var imageSource = "resources/images/" + resturant.image;
        resturant.hours = resturant.hours.replace(/(?:\r\n|\r|\n)/g, '<br>');
        resultDiv.innerHTML = '<div class="w3-card" style="width:50%"' + `onclick="location.href='restaurant.html';"` + '>';
        resultDiv.innerHTML += '<p>' + resturant.name + '</p>';
        resultDiv.innerHTML += '<img src=' + '"' + imageSource + '"' + 'class="home-img"' + 'style="float:left;display:inline;"'+ 'alt="' + resturant.imageSource + '">';
        resultDiv.innerHTML += '<span>';
        resultDiv.innerHTML += '<div style="float:left;display:inline;"> <p>Call: ' + resturant.phone + '<i class="fa fa-phone"<p></i></div>';
        resultDiv.innerHTML += '<br><br><div style="float:left;position:absolute;margin-left:100px;"> Reserve<i class="fa fa-clock-o"</i></div>';
        resultDiv.innerHTML += '<br><div style="float:left;position:absolute;margin-left:300px;margin-top:-60px;width:600px"> <u>Hours</u>:<br>' + resturant.hours + '<i class="fa fa-Clock"</i></div>';
        resultDiv.innerHTML += '<br><div style="float:left;position:absolute;margin-left:520px;margin-top:-85px;width:600px"> <u>Address</u>:<br>' + resturant.address + '<i class="fa fa-Clock"</i></div>';
        resultDiv.innerHTML += '</span>';
        resultDiv.innerHTML += '<div style="clear:both;"> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> </div>';
    });
}


function onResultPageLoad()
{
    loadResult(1, "pizza_mamaluna");
    loadResult(2, "pizza_loumalnatis");
    loadResult(3, "pizza_colutas");
    loadResult(4, "mexican_arandas");
    loadResult(5, "chinese_chopsticks");
}

//reservations page
function loadReservation(resultNumber, resturantName)
{
    var resultIDPrefix = "result-search-result";

    $.getJSON( "resources/data/" + resturantName + ".json", function( resturant )
    {
        var resultDiv = document.getElementById( resultIDPrefix + resultNumber.toString() );
        var imageSource = "resources/images/" + resturant.image;
        resultDiv.innerHTML = '<div class="w3-card" style="width:50%">';
        resultDiv.innerHTML += '<p>' + resturant.name + '</p>';
        resultDiv.innerHTML += '<img src=' + '"' + imageSource + '"' + 'class="home-img"' + 'style="float:left;display:inline;"'+ 'alt="' + resturant.imageSource + '">';
        resultDiv.innerHTML += '<div style="float:left;display:inline;"> <p>Reservation made for: <p></i></div>';
        resultDiv.innerHTML += '<div style="float:left;display:inline;"> Monday 4/22/2019 @ 4:00 PM</i></div>';
        resultDiv.innerHTML += '<div style="clear:both;"> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> <i class="fa fa-star"</i> </div>';
    });
}


function onReservePageLoad()
{
    loadReservation(1, "pizza_mamaluna");
    loadReservation(2, "pizza_loumalnatis");
    loadReservation(3, "pizza_colutas");
    loadReservation(4, "mexican_arandas");
    loadReservation(5, "chinese_chopsticks");
}

// favorites page
function onFavoritePageLoad()
{
    loadResult(1, "burger_bk");
    loadResult(2, "indian_bundoo");
    loadResult(3, "korean_abbq");
    loadResult(4, "indian_jk");
    loadResult(5, "chinese_joyyee");
}