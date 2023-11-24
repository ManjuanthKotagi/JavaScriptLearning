let day = "Monday"

switch(day)
{
    case 'Monday':  
        console.log("7AM");
        break
    case 'Tudesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("5AM");
        break
    case 'Friday':
        console.log("6AM");
        break
    case 'Saturday':
    case 'Sunday':
        console.log("8AM");
        break
    default:
        console.log("Sleep Well");
}
   