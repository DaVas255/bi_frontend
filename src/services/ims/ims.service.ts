import { IMdlCourse, ISelectedImsData } from '@/types/moodle/ims.types'

import { axiosClassic } from '@/api/axios'

class ImsService {
  async getAllCoursesWithIms() {
    const response = await axiosClassic.get<IMdlCourse[]>(
      '/ims/courses-with-ims'
    )
    return response.data
  }

  async getImsByCourseId(courseId: number) {
    const response = await axiosClassic.get<ISelectedImsData>(
      `/ims/course/${courseId}`
    )
    return response.data
  }
}

export default new ImsService()
