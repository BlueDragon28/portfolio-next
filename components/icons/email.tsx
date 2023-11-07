export interface EmailIconProps {
  width: string,
  height: string,
};

export default function EmailIcon(
  { width, height } : EmailIconProps,
) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
    >
      <path
        style={{fill:"currentcolor",stroke:"none",strokeWidth:8.46667}}
        d="M 16.624825,49.686373 V 206.31351 H 239.37505 V 57.986125 L 127.84129,142.51171 16.65118,57.845048 v -8.158675 z m 0.430981,0 110.785484,84.358677 111.31362,-84.358677 z" />
    </svg>
  );
}
