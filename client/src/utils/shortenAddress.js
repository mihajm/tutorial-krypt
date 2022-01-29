export const shortenAddress = address => address?.length ? `${address.substring(0, 5)}...${address.substring(address.length - 4)}` : '';
