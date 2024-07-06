import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Stats = ({ stats }) => {
  const statsNames = Object.keys(stats);
  const statsItems=statsNames.map((key)=>{
    return (
    <li key={key}>
      <span className={css.label}>{key}</span>
      <span className={css.quantity}>{stats[key]}</span>
    </li>)
  })

  return <ul className={css.stats}>{statsItems}</ul>;
};
