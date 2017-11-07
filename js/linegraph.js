$(document).ready(function(){
    
    function getChart(){
        $.ajax({
            url : "db/fallower_data.php",
            dataType: 'json',
            type : "GET",
            success : function(data){
                // alert(data);
    
                var userid = [];
                var facebook_follower = [];
                var twitter_follower = [];
                var googleplus_follower = [];
                
                console.log(data);
    
                for(var i = 0; i < data.length; i++) {
                    console.log(data[i]['userid']);
                    userid.push("UserID " + data[i]['userid']);
                    facebook_follower.push(data[i]['facebook']);
                    twitter_follower.push(data[i]['twitter']);
                    googleplus_follower.push(data[i]['googleplus']);
                }
                console.log(userid);
                var chartdata = {
                    labels: userid,
                    datasets: [
                        {
                            label: "facebook",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(59, 89, 152, 0.75)",
                            borderColor: "rgba(59, 89, 152, 1)",
                            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
                            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
                            data: facebook_follower
                        },
                        {
                            label: "twitter",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(29, 202, 255, 0.75)",
                            borderColor: "rgba(29, 202, 255, 1)",
                            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
                            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
                            data: twitter_follower
                        },
                        {
                            label: "googleplus",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(211, 72, 54, 0.75)",
                            borderColor: "rgba(211, 72, 54, 1)",
                            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
                            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
                            data: googleplus_follower
                        }
                    ]
                };
    
                var ctx = $("#mycanvas");
    
                var LineGraph = new Chart(ctx, {
                    type: 'line',
                    data: chartdata
                });
            },
            error : function(data) {
    
            }
        });
    }
    getChart();
    
});