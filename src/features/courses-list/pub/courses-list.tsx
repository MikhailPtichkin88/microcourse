import { revalidatePath } from "next/cache";
import { coursesRepository } from "../courses-repository";
import {CourseItem} from '../ui/course-item'

export async function CoursesList ({
  revalidatePagePath
}: {revalidatePagePath: string}){
  const coursesList = await coursesRepository.getCoursesList()
  return (
    <div className="flex flex-col gap-3 max-w-[300px]">
      {coursesList.map((course)=>{

        const handleDeleteAction = async (courseId: string) => {
          "use server"
await coursesRepository.deleteCourseElement({id: courseId})
 revalidatePath(revalidatePagePath)
        }

        return <CourseItem 
        key={course.id} 
        course={course} 
        onDelete={handleDeleteAction.bind(null, course.id)}
        />
      })}
    </div>
  )
}