/*
- Main class.
- Instantiate Calender,passing in option parameters
- Get selected dates.
- Set array of dates
 */
var mainClass=function()
{
    /*
     -Initialize your app
     -Export selectors engine
     */
    var myApp = new Framework7();
    var $$ = Dom7;

    /*
    - Initialize app
     */
    this.initializeApp=function()
    {
        var myCalender = myApp.calendar({
            input: '#mCalenderID',
            multiple:true,
            dateFormat:'dd-mm-yyyy'
        });
        $$('#getDateBtn').on('click', function () {
           myApp.alert(myCalender.value);
        });
        $$('#setDateBtn').on('click', function () {
            var dates=[new Date('2016-10-21'),new Date('2015-9-20'),new Date('2014-8-19')]
            myCalender.setValue(dates);
        });

    }
}

m=new mainClass();
m.initializeApp();