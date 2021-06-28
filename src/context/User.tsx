import React, { createContext, useState } from 'react';

interface userContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  users: UserProps[];
  setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>;
}

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  id: string | number[];
  name: string;
}

const UserContext = createContext({} as userContextProps);

export const UserProvider: React.FC = ({children}) => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<UserProps[]>([]);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        users,
        setUsers
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;