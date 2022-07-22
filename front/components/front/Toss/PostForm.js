import React, { useCallback, useState, useRef, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { baseURL } from 'sagas';
import UseInput from 'hook/UseInput';
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from 'reducers/post';
import Terms from 'components/front/NaverExpert/common/Terms';
import { useMobile } from 'hook/useIsMobile';
import theme from 'assets/styles/theme';

const PostForm = () => {
  const isMobile = useMobile(false);
  const dispatch = useDispatch();

  const { imagePaths, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );

  const [applyName, onChangeApplyName, setApplyName] = UseInput('');
  const [birth, onChangeBirth, setBirth] = UseInput('');
  const [phone, onChangePhone, setPhone] = UseInput('');
  const [address, onChangeAddress, setAddress] = UseInput('');
  // const [pic, onChangePic, setPic] = UseInput('');
  const [content, onChangeContent, setContent] = UseInput('');
  const [terms, setTerms] = useState(false);
  const [termsError, onChangeTermsError, setTermsError] = UseInput(false);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);
  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  const onChangeTerms = useCallback(
    (e) => {
      setTermsError(false);
      setTerms(e.target.checked);
    },
    [terms]
  );

  const onSubmit = useCallback(() => {
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('key', phone);
    formData.append('applyName', applyName);
    formData.append('birth', birth);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('content', content);
    formData.append('test', ''); //temp

    //이용동의 체크 안되어 있을대
    if (!terms) {
      return setTermsError(true);
    }
    return dispatch({
      type: ADD_POST_REQUEST,
      // data: { applyName, birth, phone, address, content },
      data: formData,
    });
  }, [applyName, birth, phone, address, content, terms, imagePaths]);

  useEffect(() => {
    if (addPostDone) {
      setApplyName('');
      setBirth('');
      setPhone('');
      setAddress('');
      setContent('');
    }
  }, [addPostDone]);

  const markUp = (
    <div className="container">
      <Form onFinish={onSubmit}>
        <div className="row">
          <label htmlFor="applyName">이름</label>
          <Input
            name="applyName"
            value={applyName}
            onChange={onChangeApplyName}
            placeholder="이름"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="birth">생년월일</label>
          <Input
            name="birth"
            value={birth}
            onChange={onChangeBirth}
            placeholder="YYYYMMDD"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="phone">연락처</label>
          <Input
            name="phone"
            value={phone}
            onChange={onChangePhone}
            placeholder="01000000000"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="address">주소</label>
          <Input
            name="address"
            value={address}
            onChange={onChangeAddress}
            placeholder="주소"
            required
          />
        </div>
        <div className="row">
          <Input.TextArea
            value={content}
            onChange={onChangeContent}
            placeholder="응모할 내용을 적어주세요."
          />
        </div>
        <div className="row btnWrap">
          <label htmlFor="pic">이미지첨부</label>
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <Button className="btnImg" onClick={onClickImageUpload}>
            이미지업로드
          </Button>
        </div>
        <div>
          {imagePaths.map((v, i) => (
            <div key={v}>
              <img src={`${baseURL}/${v}`} alt={v} />
              <div>
                <Button onClick={onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="chk">
          <Checkbox name="terms" checked={terms} onChange={onChangeTerms}>
            개인정보 수집 동의(필수)
          </Checkbox>
          {termsError && <div>동의하셔야 합니다.</div>}
        </div>
        <div className="term">
          <Terms company="OO" />
        </div>
        <div>{addPostError && addPostError}</div>
        <div className="row btnWrap">
          <Button type="primary" htmlType="submit">
            응모하기
          </Button>
        </div>
      </Form>
    </div>
  );
  return (
    <>
      {isMobile ? (
        <section css={PostFormMoStyle}>{markUp}</section>
      ) : (
        <section css={PostFormStyle}>{markUp}</section>
      )}
    </>
  );
};

const PostFormStyle = css`
  padding: ${theme.pc.padding.section};
  & > .container {
    max-width: ${theme.pc.maxwidth};
    margin: 0 auto;
    padding: 0 20rem;
    .row {
      display: flex;
      flex-direction: row;
      // justify-content: center;
      align-items: center;
      margin: 1rem 0;
    }
    .chk {
      padding: 1rem 0;
    }
    label {
      flex-basis: 20rem;
      font-size: ${theme.pc.size.base};
    }
    input {
      border: 1px solid #ccc;
    }
    .btnImg {
      width: 100%;
      background-color: ${theme.color.light.bg};
    }
    .term {
      padding: 2rem;
      border: 1px solid #ccc;
      & > div {
        white-space: pre-line;
      }
    }
    .btnWrap {
      button {
        margin: 0 auto;
        padding-left: 5rem;
        padding-right: 5rem;
      }
    }
  }
`;
const PostFormMoStyle = css`
  // background-color: ${theme.color.light.bg};
  & > .container {
    padding: ${theme.mo.padding.width};
    .row {
      padding: 2vw 0;
      label {
        display: none;
        font-size: ${theme.mo.size.base};
      }
    }
    .chk {
      padding: 3vw 0;
    }
    .term {
      padding: 3vw;
      border: 1px solid #ccc;
      & > div {
        white-space: pre-line;
      }
    }
    .btnImg {
      width: 100%;
      background-color: ${theme.color.light.bg};
    }
    .btnWrap {
      button {
        width: 100%;
      }
    }
  }
`;

export default PostForm;
