import React from "react";

const AnimatedHeadline = ({
  text,
  as: Tag = "h1",
  className = "",
  variant = "rise",
  staggerMs = 24,
  durationMs = 720,
}) => {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <Tag
      className={`animated-headline animated-headline--${variant} ${className}`.trim()}
      aria-label={text}
      style={{ "--headline-duration": `${durationMs}ms` }}
    >
      <span className="sr-only">{text}</span>
      <span
        key={text}
        className="animated-headline-track"
        aria-hidden="true"
        style={{ "--char-delay-step": `${staggerMs}ms` }}
      >
        {words.map((word, wordIndex) => {
          const renderedWord = (
            <span className="animated-headline-word" key={`${word}-${wordIndex}`}>
              {Array.from(word).map((char, charOffset) => {
                const currentIndex = charIndex;
                charIndex += 1;

                return (
                  <span
                    className="animated-headline-cell"
                    key={`${char}-${wordIndex}-${charOffset}`}
                    style={{ "--char-index": currentIndex }}
                  >
                    <span className="animated-headline-char">{char}</span>
                  </span>
                );
              })}
            </span>
          );

          if (wordIndex === words.length - 1) {
            return renderedWord;
          }

          return [
            renderedWord,
            <span
              className="animated-headline-gap"
              key={`gap-${wordIndex}`}
              aria-hidden="true"
            />,
          ];
        })}
      </span>
    </Tag>
  );
};

export default AnimatedHeadline;
