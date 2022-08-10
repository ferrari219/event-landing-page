import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import { css } from '@emotion/react';
import theme from 'assets/styles/theme';

const CardList = ({ mainPosts }) => {
  // console.log(mainPosts);
  return (
    <div css={cardStyle}>
      <Row gutter={16}>
        {mainPosts.map(
          ({ id, applyName, phone, content, birth, address, Images }) => (
            <Col span={12} key={id} className="col">
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
    </div>
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

const cardStyle = css`
  .col {
    margin: 1rem 0;
  }
  h3 {
    span {
      padding-left: 1rem;
      font-size: ${theme.pc.size.md};
    }
  }
`;

export default CardList;
