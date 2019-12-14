$.ajax({
    type: "get",
    url: "./server/getData.php",
    data: null,
    dataType: "json",
    success: function (xhr) {
        // console.log(xhr);
        
        let person = new Person(xhr);
        person.init();
    }
});
$.ajax({
    type: "get",
    url: "./server/getNav.php",
    // data: null,
    // contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function (data) {
        let arr = new Nav(data)
        arr.init();
    }
});
$.ajax({
    type: "get",
    url: "./server/getTab.php",
    // data: null,
    // contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function (data) {
        // console.log(data);
        let arr = new Tab(data)
        arr.init();
    }
});
$.ajax({
    type: "get",
    url: "./server/getDaily.php",
    // data: null,
    // contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function (data) {
        let arr = new Daily(data)
        arr.init();
    }
});
$.ajax({
    type: "get",
    url: "./server/getList.php",
    // data: null,
    // contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function (data) {
        let arr = new List(data)
        arr.init();
    }
});
$.ajax({
    type: "get",
    url: "./server/getDetails.php",
    // data: null,
    // contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function (data) {
        let arr = new Details(data)
        arr.init();
    }
});