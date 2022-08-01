const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();
//lambda는 실행될때 AWS자체에서 실행. 알아서 사용자 정보를 불러오기 때문에 인증절차(config.update) 할 필요 없음

exports.handler = async (event, context, callback) => {
	//event: S3 업로드 이벤트를 담을 예정
	const Bucket = event.Records[0].s3.bucket.name; // react-nodebird-s3
	const Key = decodeURIComponent(event.Records[0].s3.object.key); // original/2132141_abc.png, decodeURIComponent:한글깨짐방지
	console.log(Bucket, Key);
	const filename = Key.split('/')[Key.split('/').length - 1];
	const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();

	const requiredFormat = ext === 'jpg' ? 'jpeg' : ext; //jpg는 jpeg로 등록되어야 함. 다른 확장자는 상관 없음
	console.log('filename', filename, 'ext', ext);

	try {
		const s3Object = await s3.getObject({ Bucket, Key }).promise();
		console.log('original', s3Object.Body.length);
		const resizedImage = await sharp(s3Object.Body)
			.resize(400, 400, { fit: 'inside' })
			.toFormat(requiredFormat)
			.toBuffer();
		await s3
			.putObject({
				Bucket,
				Key: `thumb/${filename}`,
				Body: resizedImage,
			})
			.promise(); //promise 안적어주면 에러
		console.log('put', resizedImage.length);
		return callback(null, `thumb/${filename}`); //업로드까지 했으므로 성공인 경우
	} catch (error) {
		console.error(error);
		return callback(error); // passport의 done과 유사, callback(서버에러, 성공)
	}
};
