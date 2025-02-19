import { showModal, closeModal, closeSuccessTemplate, closeErrorTemplate } from './upload-form.js';
import { showMoreComments } from './modal-full-picture.js';
import {
  upperScaleValue,
  lowerScaleValue,
  changeFilter,
} from './picture-effects.js';

const initEvents = (posts) => {
  let pictureElement;

  const onModalOpen = () => {
    document.body.addEventListener('keydown', handleKeydown);
  };

  const onModalClose = () => {
    document.body.removeEventListener('keydown', handleKeydown);
  };

  const handleKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal(pictureElement.querySelector('.big-picture'), onModalClose);
    }
  };

  document.body.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      pictureElement = evt.target.parentElement;
      showModal(pictureElement.querySelector('.big-picture'), onModalOpen);
    }

    if (evt.target.classList.contains('big-picture__cancel')) {
      closeModal(pictureElement.querySelector('.big-picture', onModalClose));
    }

    if (evt.target.classList.contains('social__comments-loader')) {
      showMoreComments(evt.target.parentElement, posts);
    }

    if (evt.target.classList.contains('scale__control--smaller')) {
      lowerScaleValue();
    }

    if (evt.target.classList.contains('scale__control--bigger')) {
      upperScaleValue();
    }

    if (evt.target.classList.contains('effects__radio')) {
      changeFilter(evt.target.value);
    }

    if (document.querySelector('.success')
      && evt.target.classList.contains('success')
      || evt.target.classList.contains('success__button')) {
      closeSuccessTemplate();
    }

    if (document.querySelector('.error')
    && evt.target.classList.contains('error')
    || evt.target.classList.contains('error__button')) {
      closeErrorTemplate();
    }
  });
};

export { initEvents };
