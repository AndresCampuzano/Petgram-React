import React, { useEffect, useRef, useState } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useLocalStorage } from '../hooks/uesLocalStorage';
import { useNearScreen } from '../hooks/useNearScreen';

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg';

export const PhotoCard = ({ id, likes = 4.879, src = DEFAULT_IMAGE }) => {
	const [show, element] = useNearScreen();
	const key = `like-${id}`;
	const [liked, setLiked] = useLocalStorage(key, false);

	const Icon = liked ? MdFavorite : MdFavoriteBorder;

	return (
		<Article ref={element}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>
					<Button onClick={() => setLiked(!liked)}>
						<Icon size='32px' /> {likes} likes!
					</Button>
				</>
			)}
		</Article>
	);
};
