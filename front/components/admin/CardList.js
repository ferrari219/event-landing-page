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
                  title={
                    <h3>
                      {applyName}
                      <span>{phone}</span>
                    </h3>
                  }
                  description={
                    <div>
                      <ul>
                        {/* <dd>{birth}</dd> */}
                        <dd>{address}</dd>
                        <dd>{content}</dd>
                      </ul>
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
