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

  export function getLast30DateRange(): string {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 30); // Get 30 days ago
  
    // Function to format date as YYYY-MM-DD
    const formatDate = (date: Date) => date.toISOString().split("T")[0];
  
    return `${formatDate(pastDate)},${formatDate(today)}`;
  }
  
  export function getLast7Days(): string {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 7); // Get 7 days ago
  
    // Function to format date as YYYY-MM-DD
    const formatDate = (date: Date) => date.toISOString().split("T")[0];
  
    return `${formatDate(pastDate)},${formatDate(today)}`;
  }
  

    export  function getNext7Days(): string {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 7); // Get 7 days ahead
  
    // Function to format date as YYYY-MM-DD
    const formatDate = (date: Date) => date.toISOString().split("T")[0];
  
    return `${formatDate(today)},${formatDate(futureDate)}`;
  }

  export function getYearStartToToday(): string {
    // Get current date
    const today = new Date();
    
    // Get first day of current year
    const yearStart = new Date(today.getFullYear(), 0, 1);
  
    // Format dates to YYYY-MM-DD
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    return `${formatDate(yearStart)},${formatDate(today)}`;
  }

  export function get2024StartToToday(): string {
    // Fixed start date (2024-01-01)
    const startDate = new Date(2024, 0, 1); // Months are 0-indexed (0 = January)
    
    // Today's date
    const endDate = new Date();
  
    // Format helper
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    return `${formatDate(startDate)},${formatDate(endDate)}`;
  }
  