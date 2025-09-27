import { useEffect, useRef, useState } from "react";

type User = { id: number; name: string };

export const InfiniteScroll = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}`)
      .then(res => res.json())
      .then(data => setUsers(prev => [...prev, ...data]));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setPage(p => p + 1);
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
      <div ref={loader}>Loading...</div>
    </div>
  );
}

export default InfiniteScroll
