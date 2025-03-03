import { IFormData, IUser } from '@/types/types'

import { instance } from '@/api/axios'

class UserService {
  private _BASE_URL = '/users'

  async fetchProfile() {
    return instance.get<IUser>(`${this._BASE_URL}/profile`)
  }

  async fetchPremium() {
    return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
  }

  async fetchManagerContent() {
    return instance.get<{ text: string }>(`${this._BASE_URL}/manager`)
  }

  async fetchList() {
    return instance.get<IUser[]>(`${this._BASE_URL}/list`)
  }

  async updateProfile(data: IFormData) {
    return instance.put<IUser>(`${this._BASE_URL}/profile`, data)
  }
}

export default new UserService()
