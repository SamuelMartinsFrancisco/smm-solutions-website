import { joinClasses } from "../utils/general";

export default function Title ({
  text,
  className,
}) {
  const defaultClasses = 'text-lg font-bold'

  return (
      <span className={joinClasses(defaultClasses, className)}>
        { text }
      </span>
  );
}