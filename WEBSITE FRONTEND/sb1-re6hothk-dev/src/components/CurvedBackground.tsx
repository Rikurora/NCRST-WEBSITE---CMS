const CurvedBackground: React.FC = () => {
  return (
    <>
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          className="w-full h-full"
        >
          <path
            d="M 0 50 Q 50 20 100 40 Q 150 60 200 30"
            stroke="#FFD332"
            strokeWidth="6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 0 80 Q 40 50 80 70 Q 120 90 160 60"
            stroke="#6B7280"
            strokeWidth="4"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 50 0 Q 20 50 40 100 Q 60 150 30 200"
            stroke="#FFD332"
            strokeWidth="5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 80 0 Q 50 40 70 80 Q 90 120 60 160"
            stroke="#9CA3AF"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          className="w-full h-full"
        >
          <path
            d="M 256 206 Q 206 236 156 216 Q 106 196 56 226"
            stroke="#FFD332"
            strokeWidth="6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 256 176 Q 216 206 176 186 Q 136 166 96 196"
            stroke="#6B7280"
            strokeWidth="4"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 206 256 Q 236 206 216 156 Q 196 106 226 56"
            stroke="#FFD332"
            strokeWidth="5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 176 256 Q 206 216 186 176 Q 166 136 196 96"
            stroke="#9CA3AF"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>
    </>
  );
};

export default CurvedBackground;
