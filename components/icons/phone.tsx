export interface PhoneIconProps {
  width: string,
  height: string,
};

export default function PhoneIcon(
  { width, height } : PhoneIconProps,
) {
  return (
    <svg 
      viewBox="0 0 48.026443 48.029842"
      fill="currentColor"
      width={width}
      height={height}
    >
      <g
        transform="translate(-8.9246523,-8.2331793)"
      >
        <path
          d="m 17.886727,8.2406318 c 1.99314,-0.2583432 8.483733,6.2730642 8.269382,8.2693822 -0.155635,1.44947 -2.676814,3.454758 -2.600501,4.883046 0.07385,1.38226 5.990121,7.48683 9.373173,10.869882 3.383052,3.383052 9.876758,9.57811 10.869883,9.373174 1.530345,-0.315794 3.654335,-2.797006 4.883046,-2.600501 2.402067,0.384157 8.276611,6.359424 8.269381,8.269381 -0.0093,2.469899 -7.053446,8.951879 -8.958024,8.958025 C 46.111772,56.269092 32.363113,45.871551 25.841643,39.35008 19.320172,32.82861 8.6869837,19.432342 8.9287023,17.198656 9.1307864,15.331226 16.213562,8.457501 17.886727,8.2406318 Z" />
      </g>
    </svg>
  );
};
