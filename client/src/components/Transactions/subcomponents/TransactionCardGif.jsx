import {useState, useEffect} from 'react';

const TransactionCardGif = ({keyword, url, timestamp}) => {
	const [gifUrl, setGifUrl] = useState('');

	const resolveGifUrl = data => data[0]?.images?.downsized_medium?.url || 'https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif';

	const fetchGifs = () => {
		fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API}&q=${keyword.replace(' ', '')}&limit=1`)
			.then(res => res.json())
			.then(res => res.data)
			.then(data => setGifUrl(resolveGifUrl(data)))
			.catch(() => setGifUrl(resolveGifUrl([])));
	};

	useEffect(() => {
		fetchGifs();

		return gifUrl;
	}, [keyword]);

	return (
		<>
			<img src={gifUrl || url || 'https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif'} alt="gif" className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"/>

			<div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
				<p className="text-[#37c7da] font-bold">{timestamp}</p>
			</div>
		</>
	);
};

export default TransactionCardGif;
