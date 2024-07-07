import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { randomColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(({ id, label, percentage }, index, array) => {
    const numberOfStats = array.length;
    const widthOfStats = `${100 / numberOfStats}%`;

    const backgroundStyle = {
      backgroundColor: randomColor(),
      flexBasis: widthOfStats,
    };
    return (
      <li className={css.item} key={id} style={backgroundStyle}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{`${percentage}%`}</span>
      </li>
    );
  });
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{statsItems}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
