import produce from 'immer';

export const initialState = {
  signUpLoading: false, // 회원가입
  signUpDone: false,
  signUpError: null,
  logInLoading: false, // 로그인
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃
  logOutDone: false,
  logOutError: null,
  sendMailLoading: false, //비밀번호 초기화 메일발송
  sendMailDone: false,
  sendMailError: null,
  resetPasswordLoading: false, // 패스워드 초기화
  resetPasswordDone: false,
  resetPasswordError: null,

  me: null,
  signUpMessage: null,
};

//action
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SEND_MAIL_REQUEST = 'SEND_MAIL_REQUEST';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAILURE = 'SEND_MAIL_FAILURE';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SEND_MAIL_REQUEST:
        draft.sendMailLoading = true;
        draft.sendMailDone = false;
        draft.sendMailError = null;
        break;
      case SEND_MAIL_SUCCESS:
        draft.sendMailLoading = false;
        draft.sendMailDone = true;
        break;
      case SEND_MAIL_FAILURE:
        draft.sendMailLoading = false;
        draft.sendMailError = action.error;
        break;
      case RESET_PASSWORD_REQUEST:
        draft.resetPasswordLoading = true;
        draft.resetPasswordDone = false;
        draft.resetPasswordError = null;
        break;
      case RESET_PASSWORD_SUCCESS:
        draft.resetPasswordLoading = false;
        draft.resetPasswordDone = true;
        break;
      case RESET_PASSWORD_FAILURE:
        draft.resetPasswordLoading = false;
        draft.resetPasswordError = action.error;
        break;
      default:
        return state;
    }
  });
};
export default reducer;
