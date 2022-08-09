import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import PropTypes from 'prop-types';
import CardImage from './CardImage';

const CardList = ({ mainPosts }) => {
  console.log(mainPosts);
  return (
    <>
      <Row gutter={16}>
        {mainPosts.map(
          ({ id, applyName, phone, content, birth, address, Images }) => (
            <Col span={12}>
              <Card
                hoverable
                cover={Images[0] && <CardImage images={Images} />}
              >
                <Meta
                  title={applyName}
                  description={
                    <div>
                      <dl>
                        <dt>휴대전화:</dt>
                        <dd>{phone}</dd>
                        <dt>나이:</dt>
                        <dd>{birth}</dd>
                        <dt>주소:</dt>
                        <dd>{address}</dd>
                        <dt>hidden응모내용</dt>
                        <dd>{content}</dd>
                      </dl>
                    </div>
                  }
                />
              </Card>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
CardList.proptypes = {
  mainPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      applyName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      content: PropTypes.string,
      birth: PropTypes.string,
      address: PropTypes.string,
      Images: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};

export default CardList;
