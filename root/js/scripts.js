function showFavorites() 
{
    var favDiv = document.getElementById('favorites-div');
    favDiv.style.visibility = "visible";
}

function reapeatString(str, times)
{
    var result = "";
    
    var i;
    for(i = 0; i < times; ++i)
    {
        result += str;
    }

    return result;
}

// it would be nice if I could get this populated with a few more prefixes and suffixes
function getRandomResturantName(initialName)
{
    var bShouldAddPrefix = Math.random() >= 0.5;

    if(bShouldAddPrefix)
    {
        var prefixes = ["Good", "Best", "Geat", "Awesome", "Fantastic"];
        return prefixes[Math.floor(Math.random() * prefixes.length)] + " " + initialName;
    }
    else
    {
        var suffixes = ["Supreme", "King", "Legend", "Royale", "Mystic"];

        return initialName + " " + suffixes[Math.floor(Math.random() * suffixes.length)];
    }
}

function searchFunction()
{
    var searchResult = document.getElementById('search-result');
    var searchResult2 = document.getElementById('search-result2');
    var searchResult3 = document.getElementById('search-result3');

    var searchValue = document.getElementById('search').value;
    var searchTitle = document.getElementById('search-title');

    var searchDesc  = document.getElementById('search-description');
    
    var leftArrow = document.getElementById('result-previous');
    var rightArrow = document.getElementById('result-next');

    leftArrow.innerHTML = '<i class="fa fa-arrow-circle-left"></i>';
    rightArrow.innerHTML = '<i class="fa fa-arrow-circle-right"></i>';

    searchDesc.innerHTML = "<p>Ensuring that better food, prepared from whole, unprocessed ingredients is accessible to everyone. Know for their quality food</p>";

    searchTitle.innerHTML   = "<h1>Results for " + searchValue + " Near You! </h1><br>";
    searchResult.innerHTML  = getRandomResturantName(searchValue) + '<br>' + '<img src="art/images/loading.jpg" alt="loading">'
    searchResult2.innerHTML = getRandomResturantName(searchValue) + '<br>' + '<img src="art/images/loading.jpg" alt="loading">'
    searchResult3.innerHTML = getRandomResturantName(searchValue) + '<br>' + '<img src="art/images/loading.jpg" alt="loading">'

    //var i;
    /*for(i = 0; i < 10; i++)
    {
        searchResult.innerHTML += '<img src="art/images/loading.jpg" alt="loading">' + reapeatString(' ', 100) + '<img src="art/images/map.jpg" alt="map" ' + getRandomResturantName(searchValue) + '<br> <br>';
    }
    */

    return false;
}

function showQuickDiv(divType)
{
    var quickDiv = document.getElementById('quick-div');
    quickDiv.style.visibility = "visible";

    if(divType == 'favorites')
    {
        quickDiv.innerHTML = "<ul> <li>Taco Bell</li> <li>Chick-Fil-A</li> <li>Portillos</li> </ul>";
    }
    else if(divType == 'location')
    {
        quickDiv.innerHTML = ' <button type="submit"><i class="fa fa-location-arrow" onclick=""></i></button> <input id="search" type="text" placeholder="Enter Location" name="search">';
    }
    else if(divType == 'reservation')
    {
        quickDiv.innerHTML = "<ul> <li>2/26/19 @ 2:30 pm</li> <li>3/15/19 @ 1:30 pm</li> <li>5/5/19 @ 3:30 pm </ul>";
    }
    else
    {
        return;
    }
}

function hideQuickDiv()
{
    document.getElementById('quick-div').style.visibility = "hidden";
}