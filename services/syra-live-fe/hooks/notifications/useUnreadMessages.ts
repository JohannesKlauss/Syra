import { useEffect, useState } from "react";

export default function useUnreadMessages() {
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    let handler;


  }, []);

  return unreadMessages;
}