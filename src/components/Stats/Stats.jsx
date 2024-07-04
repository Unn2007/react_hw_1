import PropTypes from "prop-types"
import css from "./Stats.module.css"

export const Stats = ({stats}) => {
    console.log(stats)
    return (
        <ul className={css.stats}>
    <li>
      <span className={css.label}>"aaaaaaa"</span>
      <span className={css.quantity}>"bbbbbbb"</span>
    </li>
    
  </ul>


    );
} 