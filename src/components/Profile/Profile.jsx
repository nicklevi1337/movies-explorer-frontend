//import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./Profile.css";
import useFormValidation from "./../../utils/useFormValidation";
import {
  EMAIL_REG,
  NAME_REG,
  UPDATE_PROFILE_ERROR,
  SUCCESS_NOTIFICATION,
} from "../../utils/constants";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({
  onEditProfile,
  onLogout,
  onUpdate,
  isLoading,
  updateError,
  isEditingProfile,
  isNewEntranceOnPage,
  success,
}) {
  //  const [isEditProfile, setEditProfile] = useState(false);

  const { values, errors, isValid, handleChange } =
    useFormValidation();
  const currentUser = useContext(CurrentUserContext);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    currentUser.name !== values.name || currentUser.email !== values.email
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  }, [currentUser, values]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(values);
  }


  /*
  const handleClickEditProfile = () => {
    setEditProfile(true);
  };

  const handleClickSaveProfile = () => {
    setEditProfile(false);
  };
*/
  return (
    <main className="profile">
      <section className="profile__section">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form"
          name="edit-profile"
          onSubmit={handleSubmit}
          action="#"
          disabled={!isValid}
        >
          <div className="profile__info">
            <label className="profile__input-container profile__input-container_type_name">
              <span className="profile__text">Имя</span>
              <input
                className="profile__text profile__text_input"
                type="text"
                name="name"
                placeholder="Введите имя"
                minLength="2"
                maxLength="30"
                value={!isEditingProfile ? currentUser.name : (values.name || "")}
                onChange={handleChange}
                disabled={!isEditingProfile || isNewEntranceOnPage}
                pattern={NAME_REG}
                required
              />
              
            </label>
            <span className="profile__input-error">{errors.name}</span>

            <label className="profile__input-container profile__input-container_type_email">
              <span className="profile__text" >E-mail</span>
              <input
                className="profile__text profile__text_input"
                type="email"
                name="email"
                placeholder="Укажите e-mail"
                value={!isEditingProfile ? currentUser.email : (values.email || "")}
                onChange={handleChange}
                disabled={!isEditingProfile || isNewEntranceOnPage}
                pattern={EMAIL_REG}
                required
              />
            </label>
            <span className="profile__input-error">{errors.email}</span>
            <span className="profile__success">{success ? `${SUCCESS_NOTIFICATION}` : ''}</span>
          </div>


          <div className="profile__btns">
            <span className="profile__error">
              {updateError ? `${UPDATE_PROFILE_ERROR}` : ""}
            </span>
            {isEditingProfile && !isNewEntranceOnPage && (
              <button
                className={`profile__btn profile__btn_type_save ${
                  !isValid || isLoading || btnDisabled
                    ? "profile__btn_disabled"
                    : ""
                }`}
                type="submit"
                disabled={!isValid || isLoading || btnDisabled}
              >
                {!isLoading ? "Сохранить" : "Сохраняю..."}
              </button>
            )}
          </div>
        </form>

        <div className="profile__btns">
          {(isNewEntranceOnPage || !isEditingProfile) && (
            <button
              className="profile__btn profile__btn_type_edit"
              type="button"
              onClick={onEditProfile}
            >
              Редактировать
            </button>
          )}
          {(isNewEntranceOnPage || !isEditingProfile) && (
            <button
              onClick={onLogout}
              className="profile__btn profile__btn_type_logout"
            >
              Выйти из аккаунта
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

export default Profile;
