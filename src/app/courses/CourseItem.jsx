'use client'

import Title from "../../components/Title";
import InlineTags from "../../components/InlineTags";
import { Link } from "iconoir-react";

export default function CourseItem ({
  id,
  title,
  description,
  tags,
  link,
  ...props
}) {
  return (
    <div className='w-full'>
      <div className="flex flex-col gap-7 p-5 border border-dotted border-2 border-gray-300 rounded-xl bg-gray-100/30">
        <div className='bg-sky-100 w-fit p-3 rounded-xl'>
          <Title 
            text={title}
            className='text-2xl'
          />
        </div>
        <p className='text-gray-700'>
          {description}
        </p>
        <div className='flex gap-2'>
          <Link />
          <p><a className='text-sky-700 hover:underline' href={link}>Clique aqui</a> para acessar o curso! </p>
        </div>
      </div>
        <div className='flex m-3'>
          <p>Tags: </p>
          <InlineTags 
            items={tags}
          />
        </div>
    </div>
  )
}