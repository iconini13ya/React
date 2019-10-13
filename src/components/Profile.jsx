import React from "react";
import p from "./Profile.module.css";
const Profile = () => {
    return (
        <div className={p.content}>
          <div className={p.Myinfo}>
        <img className= {p.Avatar} alt="Avatar" src="https://i.pinimg.com/236x/0c/05/9e/0c059e38fcf1fb9bbccf580302614246--dog-photos-dog-mom-pictures.jpg"></img>
        <div className= {p.Info}>
          <div className={p.Statys}><h1>Vladimir Yarancev</h1> <div>online</div></div>
          <div className={p.Parametrs}>
          <div>Дата рождения: 17.12.1998</div>
          <div>Город: Moscow</div>
          <div>Семейное положение:None</div>
          <div>Место учебы: Moscow Polytechnic Yni</div>
          <div>Веб сайт: <a href="https://vk.com/vladimiryarantsev">https://vk.com/vladimiryarantsev</a></div>
          </div>
        </div>
        </div>
      <div>My posts
        <div>new post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
          <div>post3  </div>
        </div>
      </div>
      </div>
    );

}

export default Profile;