const PostForm = () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState(null);
  const { imagePaths, addPostLoading, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );
  const { id } = useSelector((state) => state.user.me);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (image) => {
      imageFormData.append('image', image);
    });
    dispatch(uploadImages(imageFormData));
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch(postSlice.actions.removeImage(index));
    },
    []
  );

  return (
    <Formik
      initialValues={{ content: '' }}
      validationSchema={PostSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const formData = new FormData();
        imagePaths.forEach((image) => {
          formData.append('image', image);
        });
        formData.append('content', values.content);
        dispatch(addPost(formData));
        setAction({ setSubmitting, resetForm });
      }}
    >
      <Form style={{ marginBottom: 45 }} encType="multipart/form-data">
        <Form.Item name="content">
          <Input.TextArea
            id="content"
            name="content"
            maxLength={140}
            autoSize={{ minRows: 3, maxRows: 5 }}
            placeholder="어떤 신기한 일이 있었나요?"
          />
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
        </Form.Item>
        <div style={{ position: 'relative', margin: 0 }}>
          <Button
            onClick={onClickImageUpload}
            style={{ position: 'absolute', right: 80, bottom: '-15px' }}
          >
            <UploadOutlined /> Images Upload
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={addPostLoading}
            style={{ position: 'absolute', right: 0, bottom: '-15px' }}
          >
            올리기
          </Button>
        </div>
        <Space size={8}>
          {imagePaths.map((v, i) => (
            <div style={{ margin: '5px 0 5px 0' }}>
              <Image
                width={100}
                height={100}
                src={
                  imageUrl
                    ? `${imageUrl}/${id}/${v}`
                    : v.replace(/\/thumb\//, '/original/')
                }
                alt={v}
              />
              <div style={{ marginTop: '5px' }}>
                <Button type="danger" onClick={onRemoveImage(i)}>
                  제거
                </Button>
              </div>
            </div>
          ))}
        </Space>
      </Form>
    </Formik>
  );
};

export default PostForm;
