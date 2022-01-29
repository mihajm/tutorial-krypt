const FormInput = ({placeholder, name, type, handleChange, value}) => (
	<input
		type={type}
		name={name}
		onChange={e => handleChange(e, name)}
		step="0.0001"
		value={value}
		placeholder={placeholder}
		className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
	/>
);

export default FormInput;
