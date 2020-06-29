import React, { CSSProperties, FunctionComponent } from 'react';

interface SVGImageProps {
  image: string;
  className?: string;
  style?: CSSProperties;
  circle?: boolean;
}

export const SVGImage: FunctionComponent<SVGImageProps> = ({
  image,
  className,
  style,
  circle,
}) => {
  const svgStyle: CSSProperties = { ...(style || {}) };
  if (!style?.width) svgStyle.width = '100%';
  if (!style?.height) svgStyle.height = '100%';

  return (
    <svg
      className={className}
      style={svgStyle}
      viewBox={circle ? `0 0 2 2` : undefined}
    >
      <defs>
        <pattern
          id={`image`}
          patternUnits={'objectBoundingBox'}
          width={'100%'}
          height={'100%'}
        >
          <image
            xlinkHref={image}
            width={'100%'}
            height={'100%'}
            preserveAspectRatio={'xMidYMid slice'}
          />
        </pattern>
      </defs>

      {circle ? (
        <circle fill={`url(#image)`} cx={'1'} cy={'1'} r={'1'} />
      ) : (
        <rect
          fill={`url(#image)`}
          x={'0%'}
          y={'0%'}
          width={'100%'}
          height={'100%'}
        />
      )}
    </svg>
  );
};
