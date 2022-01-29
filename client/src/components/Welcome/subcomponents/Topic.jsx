const TOPIC_STYLE = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Topic = ({title, classProps}) => <div className={`${TOPIC_STYLE} ${classProps}`}>{title}</div>;

export default Topic;
