
console.log('Loading...');

var myPersonModel = {
    personName: 'Bob',
    personAge: 23
};



// Global variables...

$(document).ready(function () 
{
    console.log('Ready');
    ko.applyBindings(myPersonModel, $("body")[0]);

    window.setTimeout(function(){
        myViewModel.personName("Bob");
    },2000);
        // Add your functionality here...

});


// Add other functions here...
