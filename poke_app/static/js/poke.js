$(document).ready(function(){

    // Load 150 pokemon pictures
    for (var i = 1; i <= 151; i++){
        console.log(i);
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
        $.get(url, function(res) {
            console.log("res", res);
            console.log("id", res.id);
            $('#pokemon').append("<img src='" + res.sprites.front_default + "' id='" + res.id + "'>");
        }, "json");
    }

    //When a picture is clicked, show info in the Pokedex
    $('#pokemon').on('click', 'img', function(){
        var id = $(this).attr("id");
        var html = "";
        var url = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
        $.get(url, function(res) {
            html = "<h2>" + res.species.name + "</h2>";
            html += "<img src='" + res.sprites.front_default + "'>";
            html += "<h4>Types</h4>";
            html += "<ul>";
            console.log("res.types", res.types);
            for (var x in res.types){
                html += "<li>" + res.types[x].type.name + "</li>";
            }
            html += "</ul>";
            $("ul").css("list-style-position", "inside");
            html += "<h4>Height</h4>";
            html += res.height;
            html += "<h4>Weight</h4>";
            html += res.weight;
            $('#pokedex').html(html);
        }, "json");
    })
})