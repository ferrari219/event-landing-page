import React, { useCallback, useState, useRef, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { backURL } from 'config/config';
import UseInput from 'hook/UseInput';
import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';
import Terms from 'components/front/NaverExpert/common/Terms';
import { useMobile } from 'hook/useIsMobile';
import theme from 'assets/styles/theme';
import postSlice from 'reducers/post';

const PostForm = () => {
  const isMobile = useMobile(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      applyName: '홍길동',
      birth: '1983-02-02',
      phone: '010-2838-1341',
      address: '서울',
      content: 'test',
    },
  });

  const { imagePaths, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );
  // const { id } = useSelector((state) => state.user.me);

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
    [].forEach.call(e.target.files, (image) => {
      imageFormData.append('image', image);
      console.log(imageFormData);
    });
    dispatch(UPLOAD_IMAGES(imageFormData));
  }, []);
  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch(postSlice.actions.REMOVE_IMAGE(index));
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
    imagePaths.forEach((image) => {
      formData.append('image', image);
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
    return dispatch(ADD_POST(formData));
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
      <Form onFinish={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="applyName">이름</label>
          <Controller
            name="applyName"
            placeholder="이름"
            control={control}
            render={({ field }) => (
              <Input
                {...register('applyName', { required: '필수입력입니다.' })}
                {...field}
              />
            )}
          />
        </div>
        <div className="row">
          <label htmlFor="birth">생년월일</label>
          <Controller
            name="birth"
            placeholder="YYYYMMDD"
            control={control}
            render={({ field }) => <Input {...register('birth')} {...field} />}
          />
        </div>
        <div className="row">
          <label htmlFor="phone">연락처</label>
          <Controller
            name="phone"
            placeholder="01000000000"
            control={control}
            render={({ field }) => (
              <Input
                {...register('phone', { required: '필수입력입니다.' })}
                {...field}
              />
            )}
          />
        </div>
        <div className="row">
          <label htmlFor="address">주소</label>
          <Controller
            name="address"
            placeholder="주소"
            control={control}
            render={({ field }) => (
              <Input {...register('address')} {...field} />
            )}
          />
        </div>
        <div className="row">
          <Controller
            name="content"
            placeholder="응모할 내용을 적어주세요."
            control={control}
            render={({ field }) => (
              <Input.TextArea {...register('content')} {...field} />
            )}
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
          {imagePaths &&
            imagePaths.map((v, i) => (
              <div key={v}>
                <img src={`${backURL}/${v}`} alt={v} />
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
