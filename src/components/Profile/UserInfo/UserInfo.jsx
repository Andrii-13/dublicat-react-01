import user from '../user.json';
import css from './UrerInfo.module.css'

export const UserInfo = () => {
 
  return (
    <div className={css.decription}>
        <img src={user.avatar} alt="User avatar" className={css.avatar}/>
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
    </div>
  )
}

// console.log(user);