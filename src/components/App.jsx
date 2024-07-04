import { Profile } from "./Profile/Profile";
import user from "../user.json"
console.log(user)
export const App = () => {
  return (
    <Profile username={user.username} 
    tag = {user.tag}
    location = {user.location}
    avatar={user.avatar}

    
    />
  );
};
