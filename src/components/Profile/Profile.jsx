import { UserInfo } from "./UserInfo/UserInfo"
import { Stats } from "./Stats/Stats"
import css from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={css.profile}>
        <UserInfo></UserInfo>
        <Stats></Stats>
    </div>
  )
}
