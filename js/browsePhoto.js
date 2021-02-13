$(document).ready(function(){ // Wait until the browser finish to read the html and then read the script
    //create the fake data

    $(function(){
        $("body").hide().fadeIn(1000);
    });

    var allPicture = [ // all categories
        {
            data: "11/24/2020",
            category: "Nature",
            image: "img/mountInFukui.jpg",
            title: "title1 ", //put space
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },    
        {
            data: "11/18/2020",
            category: "Nature",
            image: "img/mapleLeaves.jpg",
            title: "title2 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "11/18/2020",
            category: "Nature",
            image: "img/mapleLeaves2.jpg",
            title: "title3 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "11/03/2020",
            category: "People",
            image: "img/atIzakaya.jpg",
            title: "title4 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "10/12/2020",
            category: "Food",
            image: "img/avocado.jpg",
            title: "title5 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "10/10/2020",
            category: "Nature",
            image: "img/sky.jpg",
            title: "title6 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/18/2020",
            category: "Nature",
            image: "img/noto.jpg",
            title: "title7 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/06/2020",
            category: "Food",
            image: "img/ramen.jpg",
            title: "title8 ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/05/2020",
            category: "Nature",
            image: "img/seaInNoto.jpg",
            title: "title9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/05/2020",
            category: "People",
            image: "img/canadians.jpg",
            title: "title10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/01/2020",
            category: "Nature",
            image: "img/sunFlowers.jpg",
            title: "title11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2020",
            category: "Food",
            image: "img/sentokun.jpg",
            title: "title12",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/22/2020",
            category: "People",
            image: "img/tetsubou.jpg",
            title: "title13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/27/2020",
            category: "People",
            image: "img/funNight.jpg",
            title: "title14",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/27/2020",
            category: "People",
            image: "img/funNight2.jpg",
            title: "title15",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },

        {
            data: "05/27/2020",
            category: "People",
            image: "img/cheers.jpg",
            title: "title16",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "Food",
            image: "img/cakeForMySis.jpg",
            title: "title17",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "Food",
            image: "img/takoyaki.jpg",
            title: "title18",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "People",
            image: "img/myFamily2.jpg",
            title: "title19",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "05/14/2020",
            category: "Food",
            image: "img/paella.jpg",
            title: "title20",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "03/01/2020",
            category: "People",
            image: "img/beforeThePandemic2.jpg",
            title: "title21",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "02/26/2020",
            category: "People",
            image: "img/peopleILove3.jpg",
            title: "title22",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "02/26/2020",
            category: "Food",
            image: "img/koreanFood.jpg",
            title: "title23",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/02/2020",
            category: "Food",
            image: "img/bugs.jpg",
            title: "title24",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/13/2019",
            category: "Nature",
            image: "img/tottoriSakyu.jpg",
            title: "title25",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/10/2019",
            category: "Nature",
            image: "img/sunsetInSingapore.jpg",
            title: "title26",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "07/20/2019",
            category: "People",
            image: "img/trumpet2.jpg",
            title: "title27",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2019",
            category: "Nature",
            image: "img/hydrangea.jpg",
            title: "title28",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2019",
            category: "Nature",
            image: "img/hydrangea2.jpg",
            title: "title29",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/15/2019",
            category: "People",
            image: "img/havingFun.jpg",
            title: "title30",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/15/2019",
            category: "People",
            image: "img/karaoke.jpg",
            title: "title31",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/04/2019",
            category: "Nature",
            image: "img/tulips.jpg",
            title: "title32",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "People",
            image: "img/yuyuAndharu.jpg",
            title: "title33",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "Nature",
            image: "img/sea2.jpg",
            title: "title34",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "Nature",
            image: "img/fish.jpg",
            title: "title35",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "04/29/2019",
            category: "Nature",
            image: "img/seaInPhilipines.jpg",
            title: "title36",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/28/2019",
            category: "People",
            image: "img/sochan.jpg",
            title: "title37",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "01/27/2019",
            category: "People",
            image: "img/peopleILove.jpg",
            title: "title38",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/07/2018",
            category: "Food",
            image: "img/soupDumplings.jpg",
            title: "title40",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
    ]


    //Create array for people fake data

    var people = [
       
        {
            data: "05/27/2020",
            category: "People",
            image: "img/cheers.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/27/2020",
            category: "People",
            image: "img/funNight.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/27/2020",
            category: "People",
            image: "img/funNight2.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "People",
            image: "img/myFamily2.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "03/01/2020",
            category: "People",
            image: "img/beforeThePandemic2.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "02/26/2020",
            category: "People",
            image: "img/peopleILove3.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "07/20/2019",
            category: "People",
            image: "img/trumpet2.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/15/2019",
            category: "People",
            image: "img/havingFun.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/15/2019",
            category: "People",
            image: "img/karaoke.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "People",
            image: "img/yuyuAndharu.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/28/2019",
            category: "People",
            image: "img/sochan.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "01/27/2019",
            category: "People",
            image: "img/peopleILove.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
    ]

    //Create array for food fake data

    var food = [
        {
            data: "10/12/2020",
            category: "Food",
            image: "img/avocado.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/06/2020",
            category: "Food",
            image: "img/ramen.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2020",
            category: "Food",
            image: "img/sentokun.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "05/14/2020",
            category: "Food",
            image: "img/paella.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "Food",
            image: "img/takoyaki.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/14/2020",
            category: "Food",
            image: "img/cakeForMySis.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "02/26/2020",
            category: "Food",
            image: "img/koreanFood.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/02/2020",
            category: "Food",
            image: "img/bugs.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "01/07/2018",
            category: "Food",
            image: "img/soupDumplings.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
    ]

    //Create array for Nature fake data

    var nature = [
        {
            data: "11/24/2020",
            category: "Nature",
            image: "img/mountInFukui.jpg",
            title: "title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "11/18/2020",
            category: "Nature",
            image: "img/mapleLeaves.jpg",
            title: "title2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "11/18/2020",
            category: "Nature",
            image: "img/mapleLeaves2.jpg",
            title: "title3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "10/10/2020",
            category: "Nature",
            image: "img/sky.jpg",
            title: "title3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/18/2020",
            category: "Nature",
            image: "img/noto.jpg",
            title: "title4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "09/13/2020",
            category: "Nature",
            image: "img/tottoriSakyu.jpg",
            title: "title5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/10/2019",
            category: "Nature",
            image: "img/sunsetInSingapore.jpg",
            title: "title6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/05/2020",
            category: "Nature",
            image: "img/seaInNoto.jpg",
            title: "title7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "08/01/2020",
            category: "Nature",
            image: "img/sunFlowers.jpg",
            title: "title8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2019",
            category: "Nature",
            image: "img/hydrangea.jpg",
            title: "title9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "06/27/2019",
            category: "Nature",
            image: "img/hydrangea2.jpg",
            title: "title10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "05/04/2019",
            category: "Nature",
            image: "img/tulips.jpg",
            title: "title11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "Nature",
            image: "img/sea2.jpg",
            title: "title12",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {
            data: "04/30/2019",
            category: "Nature",
            image: "img/fish.jpg",
            title: "title13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
        {   
            data: "04/29/2019",
            category: "Nature",
            image: "img/seaInPhilipines.jpg",
            title: "title14",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis justo. Sed sit amet felis commodo, imperdiet dui sit amet, fermentum nisi. Suspendisse potenti. Donec in pretium justo. Nulla blandit ullamcorper nibh, id sollicitudin libero auctor quis. In eu consectetur turpis, hendrerit mattis sem."
        },
    ]


    //create the function and build the page

    function CreateThePage(arr) {
        var wrap = $(".containerGridPictures") // select the element that we will append the pictures 
        for(i=0; i< arr.length; i++){
               // wrap.append("<figure data-bs-toggle='modal'data-bs-target='model1' class='boardForPhotos'><figcaption> Date: " + arr[i].data + "</figcaption> <figcaption> Category: " + arr[i].category + "</figcaption><img src=" + arr[i].image + " />");
            wrap.append("<figure  class='boardForPhotos'><figcaption class='datePost'> Date: " + arr[i].data + "</figcaption> <figcaption class='category'> Category: " + arr[i].category + "</figcaption><img src=" + arr[i].image + " /> <div class='title'>"+ arr[i].title + "</div><div class='description'>" + arr[i].description + "</div>");
        }
    }


    //Create the page with all pictures
    $(".triggerFilter").on("change", function(){
        var selectedOption = $("triggerFilter").val();
    });

    CreateThePage(allPicture);
    
    // Create the function that will filter the data
    //change is the event
    $(".triggerFilter").on("change", function(){
       var selectedOption = $(this).val();
      if (selectedOption === "food") {
        $(".containerGridPictures").empty();
        $("body").hide().fadeIn(500); //add1
        CreateThePage(food);
      }else if(selectedOption === "nature") {
        $(".containerGridPictures").empty();
        $("body").hide().fadeIn(500);  //add2
        CreateThePage(nature);
      } else if(selectedOption === "people") {
        $(".containerGridPictures").empty();
        $("body").hide().fadeIn(500); //add3
          CreateThePage(people)
      } else {
        $(".containerGridPictures").empty();
        $("body").hide().fadeIn(500); //add4
          CreateThePage(allPicture)
      }
    })


    function SortByDate(arr) {
        var SortArr = arr.reverse();
        return SortArr;
        
    }

    $(".triggerSort").on('change', function(){
        var filterSelected = $(".triggerFilter").val();  //grab the value from the filter
        if(filterSelected === "food"){
            SortByDate(food); // will return the reverse array food
                $(".containerGridPictures").empty(); // will clear the html page
                $("body").hide().fadeIn(500); //add5
                CreateThePage(food); //create the page with the sorted food array
        } else if(filterSelected === "people"){
            SortByDate(people);
                $(".containerGridPictures").empty();
                $("body").hide().fadeIn(500); //add6
                CreateThePage(people);
        } else if(filterSelected === "nature") {
            SortByDate(nature);
                $(".containerGridPictures").empty();
                $("body").hide().fadeIn(500); //add7
                CreateThePage(nature);
        } else {
                SortByDate(allPicture);
                $(".containerGridPictures").empty();
                $("body").hide().fadeIn(500); //add8
                CreateThePage(allPicture);
        }
    });


    

    // $(".heart").on("click",function(){
    //    $(".number").replaceWith('<div class="numberPlus1">136</div>'); //add function to plus number
    //    $(this).toggleClass('activeHeart');
    // })
        $(".numberPlus1").hide();
        $(".heartToUndo").hide();
    　　$(".heart").on("click", function(){
            $(".numberPlus1").show();
            $(".heartToUndo").show();
            $(this).hide();
            $(".number").hide();

    });

    $(".heartToUndo").on("click", function(){
            $(".number").show();
            $(".heart").show();
            $(this).hide();
            $(".numberPlus1").hide();
    });

    


    $(".boardForPhotos").on("click",function(){
        //Grab the information for each post that user click

        //text() function will return all text (string) that we have inside the element
        //split() will return a array of string
        //find() will try to find the element that you choose inside the element


        var dataPost = $(this).find(".datePost").text();
        var categoryPost = $(this).find(".category").text();
        var imgAddress = $(this).find("img").attr("src");
        // var title = $(this).text().split(" ")[6];
        var title = $(this).find(".title").text();
        var description = $(this).find(".description").text(); //??? 

        console.log(dataPost)
        
       // var title = $(this).find(".title").text();
        //Select the elements that we wanna append information
        var dataModal = $(".dataModal");
        var categoryModay = $(".categoryModay");
        var imgModay = $(".imgModal");
        var titleModay = $(".descriPart h1");
        var descriModay = $(".descriPart p");
        //Append the information
        dataModal.empty();
        dataModal.append(dataPost);
        categoryModay.empty();
        categoryModay.append(categoryPost);
        imgModay.attr("src", imgAddress);
        titleModay.empty();
        titleModay.append(title);
        descriModay.empty();
        descriModay.append(description);
    })
})