import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar,name,isOnline,id}) => {
    const statusClasesList = (isOnline) ? `${css.status} ${css.isOnline}`:(css.status)
   
  return (
    <>
      <li className={css.item} key={id}>
        <span className={statusClasesList}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

