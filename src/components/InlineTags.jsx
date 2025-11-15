import { joinClasses } from "../utils/general";
import Tag from "./Tag";
import { XmarkCircleSolid } from "iconoir-react";

export default function InlineTags ({
  items,
  className
}) {
  if (!Array.isArray(items)) return;

  return (
    <div className='w-full flex flex-wrap'>
      {
        items.map((item, index) => {
          if (typeof item !== 'string') return;
          return (
            <span
              className={joinClasses('w-fit relative', className)}
              key={`${item.trim()}-${index}`}
            >
              <Tag 
                text={item} 
              />
            </span>
          );
        })
      }
    </div>
  )
}
