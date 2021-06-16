function calculateAkanName (day,month,year);{
    let dd = day; // validate day 1<= day <=31
    let mm = month; // validate month 0 < month <= 12

    let date = prompt("enter date of birth"); // parseInt, 1 ,31
    date=parseInt(date);
    if(date<1 || date>31 )
        alert("invalid date")
    } else{
        let month=prompt("enter month born");
        month=parseInt(month)
        if (month<1 ||month>12)
            alert("invalid month");
        }else{
            let year = prompt("enter year born");//
            if (year.length !== 4) {
                alert("invalid year");
            } else {
                year = parseInt(year)
                 }
                 return [date , month , year]
         return [0,0,0]
            }
 function calculateDayOfTheWeek  (day , month , year , century){
    DayOfTheWeek (d) = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
    return parseInt(index.toString().split(".")[0])
}   
 //14 , 5 , 2002     
 
    alert(calculateDayOfTheWeek(14 , 5 , 2002, 20))

    function reference(){
        letDaysOfTheWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
        letMaleNames = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame" ];
        letFemaleNames =["akosua","adwoa","abenaa","akua","yaa","afua","ama"]
    }
    

    

