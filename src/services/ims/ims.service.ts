import { IImsAction } from '@/types/moodle/ims.types'

import { axiosClassic } from '@/api/axios'

class ImsService {
  async getAll() {
    const response = await axiosClassic.get<IImsAction[]>('/ims')
    return response
  }
}

export default new ImsService()
