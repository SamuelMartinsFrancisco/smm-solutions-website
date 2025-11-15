'use client'

import { useContext, useEffect } from "react";
import { ContentContext } from "../../context/ContentContext";
import CourseItem from "./CourseItem";
import Title from "../../components/Title";
import { Cpu } from "iconoir-react";
import EmptyStateMessage from "../../components/EmptyStateMessage";

export default function Courses () {
  const { courses: coursesContext } = useContext(ContentContext);
  debugger
  const { hasError, data: courses, error, loading, refreshData } = coursesContext;
  const emptyCoursesList = courses.length === 0;

  useEffect(() => {
    refreshData();
  }, [])

  if (hasError) return <span>{'Houve um erro :('}</span>
  if (loading) return <span>{'Carregando...'}</span>

  return (
    <div className='w-full min-h-full flex flex-col'>
      <div className='flex items-center gap-2 text-white bg-linear-to-r from-black to-sky-900 w-full p-4 border-t-5 border-white border-dashed'>
        <Cpu />
        <h1 className='text-2xl font-bold'>Cursos</h1>
      </div>
      <div className='flex flex-col gap-20 justify-center items-center pl-[10%] pr-[10%] pt-[3%] pb-[5%]'>
        {
          emptyCoursesList 
            ? (
                <EmptyStateMessage
                  text='Ainda não temos cursos, mas por favor fique atento às novidades! :^)'
                />
              )
            : (
                courses.map((course) => (
                  <CourseItem
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    tags={course.tags.split(',')}
                    link={course.link}
                    key={course.id}
                  />
                ))
              )
        }
      </div>
    </div>
  )
}