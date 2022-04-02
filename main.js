(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=e.headers,this._baseUrl=e.baseUrl}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"patchProfileInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"postCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o=".location-cards",i=".profile__picture",a=(document.querySelectorAll(".popup"),document.querySelector("#popup_edit-profile")),c=(document.querySelector("#popup_pic"),document.querySelector("#popup_change-avatar")),u=document.querySelector(".profile__edit-btn"),l=(document.querySelector(".pic-container__image"),document.querySelector(".pic-container__caption"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),a.querySelector('input[name="name"]'),a.querySelector('input[name="description"]'),c.querySelector('input[name="link"]'),a.querySelector(".form__save-btn")),s=c.querySelector(".form__save-btn"),f="#card-template",p=document.querySelector("#popup_add-card"),d=document.querySelector(".profile__add-card-btn"),h=(p.querySelector('input[name="name"]'),p.querySelector('input[name="link"]'),p.querySelector(".form__save-btn")),_="location-card__like-btn_active",y=".location-card__image";function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.id,o=t.name,i=t.link,a=t.likeNmbr,c=t.likedByMe,u=t.createdByMe,l=t.handleCardClick,s=t.handleDeleteCard,f=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=r,this._name=o,this._link=i,this._likeNmbr=a,this._likedByMe=c,this._createdByMe=u,this._cardTemplateElement=document.querySelector(n),this._handleCardClick=l,this._handleDeleteCard=s,this._handleLikeCard=f}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardTemplateElement.content.cloneNode(!0).querySelector("li")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteBtn=this._newCardElement.querySelector(".location-card__delete-btn"),this._likeBtn=this._newCardElement.querySelector(".location-card__like-btn"),this._img=this._newCardElement.querySelector(y),this._deleteBtn.addEventListener("click",(function(){e._handleDeleteCard(e._newCardElement,e._id)})),this._likeBtn.addEventListener("click",(function(){e._handleLikeCard(e._id)})),this._img.addEventListener("click",(function(t){e._handleCardClick(t)}))}},{key:"_hideDeleteBtn",value:function(){this._createdByMe||(this._deleteBtn.style.display="none")}},{key:"updateLikeCounter",value:function(e,t){this._likedByMe=e,this._likeNmbr=t,this._likeBtn.nextElementSibling.textContent=t,this._likedByMe?this._likeBtn.classList.add(_):this._likeBtn.classList.remove(_)}},{key:"createCardElement",value:function(){this._newCardElement=this._getTemplate(),this._newCardElement.id=this._id,this._setEventListeners(),this._hideDeleteBtn(this._newCardElement),this.updateLikeCounter(this._likedByMe,this._likeNmbr),this._img=this._newCardElement.querySelector(y);var e=this._newCardElement.querySelector(".location-card__name");return this._img.src=this._link,this._img.alt=this._name,e.textContent=this._name,this._newCardElement}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=document.querySelector(n),this._buttonElement=this._formElement.querySelector(this._config.buttonSelector)}var t,n;return t=e,(n=[{key:"_hideInputError",value:function(e,t){e.classList.remove(this._config.inputInvalidClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._config.inputInvalidClass),t.classList.add(this._config.errorClass),t.textContent=n}},{key:"_checkInputValidity",value:function(e){var t=this._formElement.querySelector("#error-".concat(e.id));e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,e.validationMessage,this._config)}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?this._disableButton():this._enableButton()}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._config.buttonDisabledClass),this._buttonElement.disabled=!0}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._config.buttonDisabledClass),this._buttonElement.disabled=!1}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._config.inputSelector));n.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(n)}))})),this._toggleButtonState(n)}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._disableButton()})),this._setEventListeners(this._formElement)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose.bind(this))}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose.bind(this))}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-btn"))&&e.closePopup()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&document.querySelector(".popup_opened")&&this.closePopup()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._popupForm=n._popup.querySelector(".form"),n._inputList=n._popupForm.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;S(j(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"closePopup",value:function(){S(j(a.prototype),"closePopup",this).call(this),this._popupForm.reset()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function x(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"openPopup",value:function(e){this._popup.querySelector(".pic-container__image").src=e.target.src,this._popup.querySelector(".pic-container__caption").textContent=e.target.alt,this._popup.querySelector(".pic-container__image").alt=e.target.alt,R(U(a.prototype),"openPopup",this).call(this)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userDescriptionElement=document.querySelector(r),this._profilePictureElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._userNameElement.textContent,about:this._userDescriptionElement.textContent}}},{key:"setUserInfo",value:function(e,t,n,r){this._id=e,this._userNameElement.textContent=t,this._userDescriptionElement.textContent=n,this._profilePictureElement.style="background-image: url(".concat(r,")")}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F={inputSelector:".form__input",errorClass:"error-message_visible",inputInvalidClass:"form__input_invalid",buttonSelector:".form__save-btn",buttonDisabledClass:"form__save-btn_disabled"};new k(F,".form-card").enableValidation(),new k(F,".form-name").enableValidation(),new k(F,".form-avatar").enableValidation();var J=new t({baseUrl:"https://nomoreparties.co/v1/plus-cohort7",headers:{authorization:"bc5524e6-2f6e-4891-adc9-e477685018b2","Content-Type":"application/json"}}),H=new M({userNameSelector:".profile__name",userDescriptionSelector:".profile__description",avatarSelector:i}),z=new r({items:{},renderer:function(e,t){var n=G(e,t._id,f).createCardElement();z.addItem(n)}},o),$=[J.getUserInfo(),J.getCards()];Promise.all($).then((function(e){var t,n,i=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];H.setUserInfo(a._id,a.name,a.about,a.avatar);var u=new r({items:c,renderer:function(e){var t=G(e,a._id,f).createCardElement();u.addItem(t)}},o);u.renderItems()})).catch((function(e){console.log(e)}));var G=function(e,t,n){var r=new v({id:e._id,name:e.name,link:e.link,likeNmbr:e.likes.length,likedByMe:e.likes.some((function(e){return e._id===t})),createdByMe:e.owner._id===t,handleCardClick:function(e){X.openPopup(e)},handleDeleteCard:function(e,t){J.deleteCard(t).then((function(t){t&&e.remove()})).catch((function(e){console.log(e)}))},handleLikeCard:function(n){e.likes.some((function(e){return e._id===t}))?J.deleteLike(n).then((function(e){r.updateLikeCounter(e.likes.some((function(e){return e._id===t})),e.likes.length)})).catch((function(e){alert("Ошибка"),console.log(e)})):J.putLike(n).then((function(e){r.updateLikeCounter(e.likes.some((function(e){return e._id===t})),e.likes.length)})).catch((function(e){alert("Ошибка"),console.log(e)}))}},n);return r},K=new q("#popup_change-avatar",(function(e){s.textContent="Сохранение...",J.patchAvatar(e.link).then((function(e){H.setUserInfo(e._id,e.name,e.about,e.avatar),K.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){s.textContent="Сохранить"}))}));K.setEventListeners(),document.querySelector(i).addEventListener("click",(function(){return K.openPopup()}));var Q=new q("#popup_add-card",(function(e){h.textContent="Создание...",console.log(e),J.postCard(e.name,e.link).then((function(e){var t=G(e,H._id,f).createCardElement();z.addItem(t),Q.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){h.textContent="Создать"}))}));Q.setEventListeners(),d.addEventListener("click",(function(){return Q.openPopup()}));var W=new q("#popup_edit-profile",(function(e){l.textContent="Сохранение...",J.patchProfileInfo(e.name,e.description).then((function(e){H.setUserInfo(e._id,e.name,e.about,e.avatar),W.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){l.textContent="Сохранить"}))}));W.setEventListeners(),u.addEventListener("click",(function(){return W.openPopup()}));var X=new A("#popup_pic");X.setEventListeners()})();