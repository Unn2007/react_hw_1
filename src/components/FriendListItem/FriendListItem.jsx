import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({avatar,name,isOnline}) => {
    const statusClasesList = (isOnline) ? `${css.status} ${css.isOnline}`:(css.status)
    
  return (
   
      <li className={css.item}>
        <span className={statusClasesList}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    
  );
};

FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired
  
}