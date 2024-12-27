import { useState, useEffect } from "react";

export const useDateFormat = (date) => {
  
  const [dateFormat, setdateFormat] = useState("")

  useEffect(() => {
    setdateFormat(
      new Intl.DateTimeFormat('es', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(Date.parse(date)))
    );
  }, [date])

  return { dateFormat }
}