export function formatDate(dateString: string): string {
    // Create a Date object from the input string
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
  
    // Define month names for conversion
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
  
    // Extract the month, day, and year
    const month = monthNames[date.getMonth()]; // Get month name
    const day = date.getDate(); // Get day of the month
    const year = date.getFullYear(); // Get full year
  
    // Format the date as "Sept 17, 2013"
    return `${month} ${day}, ${year}`;
  }

  export function formatRankAndDate(
    dateString: string, 
    rating: number
  ): string {
    // Extract year from the date string
    const date = new Date(dateString);
    const year = date.getFullYear();
  
    // Format the string with rating and year
    return `#${rating} Top ${year}`;
  }