$(function () {
    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/

    $("#ExpiredTasks").on("click", function () {

        var searchstring = $("#Search").val();

        var url = "/Tasks/ExpiredTasks";

        $.get(url, { "s": searchstring }, function (data) {
            console.log(data);
            $("ul").remove();

            var ul = $("<ul></ul>").text("List of Expired Tasks:");
            $("#results").append(ul);

            $.each(data, function (i, item) {
                var li = $("<li></li>").text(item.Id + " " + item.Title);
                ul.append(li);
            });
        });      
     }); 
     
     /* Name="DeleteExpiredTasks"
     * URL="/Tasks/DeleteExpiredTasks"
     * Type= "POST"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will delete tasks older than today
     * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
     * Display "count" and "status" in the div with id="results"*/

    $("#DeleteExpiredTasks").on("click", function () {
        var searchstring = $("#Search").val();

        var url = "/Tasks/DeleteExpiredTasks";

        $.post(url, { "s": searchstring }, function (data) {
            console.log(data);
            $("ul").remove();

            var para = $("<p></p>").text("Count: " + data.count + " Status: " + data.status);
            $("#results").append(para);

        });
    });
     
     
     /* Name="UrgentTasks"
     * URL="/Tasks/UrgentTasks"
     * Type = "GET"
     * Input parameter called as "nbr" will be an integer that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "UrgentTasks" button is clicked.
     * Display urgent tasks in the div with id="results2"*/

    $("#UrgentTasks").on("click", function () {
        
        var searchstring = $("#NbrOfDays").val();

        var url = "/Tasks/UrgentTasks";

        $.get(url, { "nbr": searchstring }, function (data) {
            console.log(data);
            $("ul").remove();

            var ul = $("<ul></ul>").text("List of Urgent Tasks in " + searchstring + " days:");
            $("#results2").append(ul);

            $.each(data, function (i, item) {
                var li = $("<li></li>").text(item.Id + " " + item.Title);
                ul.append(li);
            });
        });
    });

     
     /* Name="SearchByCategory"
     * URL="/Tasks/SearchByCategory"
     * Type = "GET"
     * Input parameter called as "searchstring" will be a string that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "SearchByCategory" button is clicked.
     * Display tasks that match the category in the div with id="results3"*/

    $("#SearchByCategory").on("click", function () {

        var searchstring = $("#Search").val();

        var url = "/Tasks/SearchByCategory";

        $.get(url, { "searchstring": searchstring }, function (data) {
            console.log(data);
            $("ul").remove();

            var ul = $("<ul></ul>").text("List of Tasks By Category " + searchstring);
            $("#results3").append(ul);

            $.each(data, function (i, item) {
                var li = $("<li></li>").text(item.Id + " " + item.Title);
                ul.append(li);
            });
        });
    });
});     