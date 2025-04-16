import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-full flex flex-col justify-center text-center'>
      <h2 className='text-xl'>Не найдено</h2>
      <Link
        className='text-blue-500'
        href='/'
      >
        Домой
      </Link>
    </div>
  )
}
