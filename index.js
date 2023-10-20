

// all javascript-codes will run when DOM contents will be finally loaded on browser

document.addEventListener("DOMContentLoaded",function(){


    // fetching the files to get uploaded in main index html page
    async function loadFile(url,htmlElementId){
        let myResponse = await fetch(url);
        let fetchedData = await myResponse.text();
                document.getElementById(htmlElementId).innerHTML = fetchedData;
    
    };
    

// scaling the code:: storing filepaths and their associated id using array literals  

    let myRoute = [
                {
                    filePath:"/footer.html",
                    fileId:"myFooter"
                },
                {
                    filePath:"/navbar.html",
                    fileId:"myNavBar"
                },
                {
                    filePath:"/communication.html",
                    fileId:"communication"
                },
                {
                    filePath:"/testimonials.html",
                    fileId:"testimonials"
                },
                {
                    filePath:"/solutions.html",
                    fileId:"solutions"
                },
                {
                    filePath:"/collabs.html",
                    fileId:"collabs"
                },
                {
                    filePath:"/features.html",
                    fileId:"features"
                },
                {
                    filePath:"/monitor.html",
                    fileId:"monitor"
                },
                {
                    filePath:"/banner.html",
                    fileId:"banner"
                }
    ];

    // finding the array length

    let routeLength = myRoute.length;

    // iterating the myRoute array

    for(let i=0; i<routeLength; i++){
                let path = myRoute[i].filePath;
                let id = myRoute[i].fileId;
            // handling error in case any route is not available
                try {
                    loadFile(path, id);
                } catch(err) {
                    console.error(`Error loading file ${path}:`,error);
                }

                
    };


// using a listener in order remove the shadow of navbar while scroll is not in progress
    
    let isScrolling;

    window.addEventListener("scroll", function (event) {
            // Clearing the timeout while scrolling
            window.clearTimeout(isScrolling);
            // Setting a timeout to run after scrolling ends
            isScrolling = setTimeout(function () {
                //jquery code - (just not to confuse with dollar sign)
                            $(document).ready(function () {
                            $("#myNavBar").css("box-shadow", "0px 0px 0px 0px white");
                            });
            }, 300);
    });














});









