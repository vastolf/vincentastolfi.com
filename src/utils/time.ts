export const calculateYearsSince = (dateString: string): number => {
    var date = new Date(dateString);
    // Get month difference 
    var monthsDiff = Date.now() - date.getTime();
    // Get difference of monthsDiff as a date object
    var ageDate = new Date(monthsDiff);
    // Get year from age
    var year = ageDate.getUTCFullYear();
    // Return age
    return Math.abs(year - 1970);
}