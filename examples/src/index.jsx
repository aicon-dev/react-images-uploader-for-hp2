/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import ImagesUploader from '../../lib/index';
import '../../styles.css';
import '../../font.css';

const url = 'https://localhost:8080/upload/image/report';
console.log('url', url);

ReactDOM.render(
	<div className="examples-container">
		<ImagesUploader
			url={url}
			optimisticPreviews
			onLoadEnd={(err) => {
				if (err) {
					console.error(err);
				}
			}}
			label="Upload multiple images"
			/>
		<ImagesUploader
			url={url}
			optimisticPreviews
			multiple={false}
			onLoadEnd={(err) => {
				if (err) {
					console.error(err);
				}
			}}
			styles={{
				container: {
					paddingTop: 15,
				},
			}}
			label="Upload a picture"
			/>
	</div>,
	document.getElementById('root')
);
