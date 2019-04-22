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

function searchFunction()
{
    return true;
}