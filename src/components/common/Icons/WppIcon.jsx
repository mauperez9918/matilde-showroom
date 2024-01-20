const WppIcon = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M36.6902 11.2374C35.0399 9.57048 33.0743 8.2488 30.9079 7.34948C28.7415 6.45016 26.4177 5.9912 24.072 5.99937C14.2439 5.99937 6.23385 14.0095 6.23385 23.8376C6.23385 26.9876 7.06185 30.0476 8.60987 32.7477L6.08984 41.9998L15.5399 39.5157C18.15 40.9377 21.084 41.6938 24.072 41.6938C33.9001 41.6938 41.9102 33.6837 41.9102 23.8556C41.9102 19.0855 40.0562 14.6035 36.6902 11.2374ZM24.072 38.6697C21.408 38.6697 18.798 37.9497 16.512 36.5997L15.9719 36.2757L10.3559 37.7517L11.8499 32.2797L11.4899 31.7216C10.0098 29.3582 9.22393 26.6262 9.22188 23.8376C9.22188 15.6655 15.8819 9.00541 24.054 9.00541C28.0141 9.00541 31.7401 10.5534 34.5301 13.3615C35.9116 14.7366 37.0064 16.3723 37.7511 18.1737C38.4958 19.9751 38.8755 21.9063 38.8682 23.8556C38.9042 32.0277 32.2441 38.6697 24.072 38.6697ZM32.2081 27.5816C31.7581 27.3656 29.5621 26.2856 29.1661 26.1236C28.7521 25.9796 28.4641 25.9076 28.1581 26.3396C27.8521 26.7896 27.0061 27.7976 26.7541 28.0856C26.5021 28.3916 26.2321 28.4276 25.7821 28.1936C25.3321 27.9776 23.892 27.4916 22.2 25.9796C20.868 24.7916 19.986 23.3336 19.716 22.8836C19.464 22.4335 19.68 22.1995 19.914 21.9655C20.112 21.7675 20.364 21.4435 20.58 21.1915C20.796 20.9395 20.886 20.7415 21.03 20.4535C21.174 20.1475 21.102 19.8955 20.994 19.6795C20.886 19.4635 19.986 17.2675 19.626 16.3675C19.266 15.5035 18.888 15.6115 18.618 15.5935H17.754C17.448 15.5935 16.98 15.7015 16.566 16.1515C16.17 16.6015 15.0179 17.6815 15.0179 19.8775C15.0179 22.0735 16.62 24.1976 16.836 24.4856C17.052 24.7916 19.986 29.2916 24.45 31.2176C25.5121 31.6856 26.3401 31.9557 26.9881 32.1537C28.0501 32.4957 29.0221 32.4417 29.7961 32.3337C30.6601 32.2077 32.4421 31.2536 32.8021 30.2096C33.1801 29.1656 33.1801 28.2836 33.0541 28.0856C32.9281 27.8876 32.6581 27.7976 32.2081 27.5816Z"
        fill={color}
      />
    </svg>
  );
};

export default WppIcon;
