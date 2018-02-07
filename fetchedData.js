var savedData;//data saved after intial download to save server calls

$(document).ready(function () {
    var html = '';
    //Use lodash to sort the list


    $.getJSON('https://teams-app-012894.herokuapp.com/employees', function (data) {
        var html = '';
        //Use lodash to sort the list
         data= _.sortBy(data, 'LastName');
        for (var i = 0; i < data.length - 1; i++) {
            var mDate = moment(data[i].HireDate);
            html +=
                '<tr class="tableRow"><td class="hidden varId">' + data[i]._id + '</td>' +
                '<td>' + data[i].LastName + ', ' + data[i].FirstName + '</td>' +
                '<td class="text-right ">' + mDate.format('ddd, MMMM Do YYYY') + '</td>' +
                '<td>'+data[i].AddressStreet+'</br>'+data[i].AddressCity+", "+data[i].AddressState+", "+data[i].AddressZip+'</td>' +
                '<td class="text-right">$' + data[i].SalaryBonus + '</td></tr>';
        }
        $('#MainTable tbody').append(html);

        savedData=data;
        // Set the value of the "projects" observable array to the incoming data
        self.projects(data);
    });

});


$(document).on("click", ".tableRow", function () {
    var id = $(this).find('td.hidden.varId').text();
    //TODO: change to search with lodash!!!!
    let arr = _.find(savedData, function (o) {
        return o._id == id;
    });
    // let arr  = $.grep(demoVariables, function( demoVariables ) {
    //     return demoVariables.id == id;});
    $("#CustomerName").text(arr.LastName + ", " + arr.FirstName)
    $("#hireDate").text(moment(arr.HireDate).format('ddd, MMMM Do YYYY'));
    $("#city").text(arr.AddressCity);
});

