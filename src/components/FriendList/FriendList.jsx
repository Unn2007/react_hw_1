import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friendListcards = friends.map(({ avatar, name, id, isOnline }) => {
    
    return (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    );
  });
  console.log(<ul className={css.friendList}>{friendListcards}</ul>)
  return <ul className={css.friendList}>{friendListcards}</ul>

};
