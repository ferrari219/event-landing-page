import React from 'react';
import PropTypes from 'prop-types';

const Terms = ({ company }) => {
	const terms = `${company}는(은) 다음과 같은 개인정보를 수집합니다. 수집한 개인정보는 이외의 목적으로는 사용하지 않습니다. 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.

        <개인정보 수집 및 이용 안내>

        - 수집항목 : 이름, 생년월일, 휴대폰번호, 주소

        - 수집목적 : 프로모션
    `;
	return <div>{terms}</div>;
};
Terms.proptypes = {
	company: PropTypes.string.isRequired,
};

export default Terms;
