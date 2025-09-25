import { useState, useEffect } from 'react';
import withLoading from './withLoading';
import UserList from './UserList';

const UserListWithLoading = withLoading(UserList);

const UserHOC = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
            setUsers(["Alice", "Bob", "Charlie"]);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <h3>HOC Loading Example (TypeScript)</h3>
            <UserListWithLoading isLoading={isLoading} users={users} />
        </div>
    )
}

export default UserHOC