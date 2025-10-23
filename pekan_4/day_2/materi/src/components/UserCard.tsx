interface UserCardProps {
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, email, isActive }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Active: {isActive ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default UserCard;