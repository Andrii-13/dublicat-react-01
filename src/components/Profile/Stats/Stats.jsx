import user from '../user.json';
import css from './Stats.module.css'

export const Stats = () => {
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.stats.followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.stats.views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  );
};
