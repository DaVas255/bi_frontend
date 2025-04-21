export interface IImsAction {
  id: number
  userid: number
  cm: number
  time: number
  component: string
  page: string
  html_id: string
  action: string
  other: string
}

export interface IMdlCourse {
  id: number
  category: number
  sortorder: number
  fullname: string
  shortname: string
  idnumber: string
  summary?: string | null
  summaryformat: number
  format: string
  showgrades: number
  newsitems: number
  startdate: number
  enddate: number
  relativedatesmode: boolean
  marker: number
  maxbytes: number
  legacyfiles: number
  showreports: number
  visible: boolean
  visibleold: boolean
  downloadcontent?: boolean | null
  groupmode: number
  groupmodeforce: number
  defaultgroupingid: number
  lang: string
  calendartype: string
  theme: string
  timecreated: number
  timemodified: number
  requested: boolean
  enablecompletion: boolean
  completionnotify: boolean
  cacherev: number
  originalcourseid?: number | null
  showactivitydates: boolean
  showcompletionconditions?: boolean | null
  mdl_imscp?: IMdlImscp[]
}
export interface IMdlImscp {
  id: number
  course: number
  name: string
  intro?: string | null
  introformat: number
  revision: number
  keepold: number
  structure?: string | null
  timemodified: number
  mdl_course?: IMdlCourse
}
