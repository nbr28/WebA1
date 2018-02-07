let self;
$(document).ready(function () {
   
    function myvm() {
        self = this;
        self.projects=ko.observableArray();
        self.save = function(project) {
            $.ajax({
                url: 'https://teams-app-012894.herokuapp.com/project/'+project._id,
                type: "PUT",
                data: JSON.stringify(project),
                contentType: "application/json"
            })
            .done(function (data) {
                console.log(data);
            })
            .fail(function (err) {
                console.log('Unable to update the project');
            });
        };
    };

    ko.applyBindings(new myvm());
    $.getJSON('https://teams-app-012894.herokuapp.com/projects', function (data) {

        // Set the value of the "projects" observable array to the incoming data
        self.projects(data);
    })
   
});



// $(document).on("click", ".tableRow", function () {
//     var id = $(this).find('td.hidden.varId').text();
//     //TODO: change to search with lodash!!!!
//     let arr = _.find(savedData, function (o) {
//         return o._id == id;
//     });
//     // let arr  = $.grep(demoVariables, function( demoVariables ) {
//     //     return demoVariables.id == id;});
//     $("#CustomerName").text(arr.LastName + ", " + arr.FirstName)
//     $("#hireDate").text(moment(arr.HireDate).format('ddd, MMMM Do YYYY'));
//     $("#city").text(arr.AddressCity);
// });

