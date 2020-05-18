import React from 'react';
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE = 'https://images8.alphacoders.com/793/793093.jpg';
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	return (
		<article>
			<a href={`/detail/${id}`}>
				<ImgWrapper>
					<Img src={src} />
				</ImgWrapper>
			</a>
			<Button>
				<MdFavoriteBorder size='32px' /> {likes} likes!
			</Button>
		</article>
	);
};
