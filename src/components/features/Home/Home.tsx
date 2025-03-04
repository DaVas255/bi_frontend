'use client'

import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { barData, lineData, pieData, radarData } from './mock'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Home() {
  return (
    <div className='w-full h-full rounded-md overflow-auto bg-gray-900 text-white p-6'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-3xl font-bold text-center'
      >
        📊 BI SYSTEM
      </motion.h1>

      <div className='grid md:grid-cols-2 gap-8 mt-8'>
        {/* Линейный график */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='bg-gray-800 p-6 rounded-xl shadow-lg'
        >
          <h2 className='text-xl font-semibold mb-4'>📈 Рост доходов</h2>
          <ResponsiveContainer
            width='100%'
            height={250}
          >
            <LineChart data={lineData}>
              <Tooltip />
              <Line
                type='monotone'
                dataKey='value'
                stroke='#4CAF50'
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Круговой график */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='bg-gray-800 p-6 rounded-xl shadow-lg'
        >
          <h2 className='text-xl font-semibold mb-4'>
            📊 Распределение расходов
          </h2>
          <ResponsiveContainer
            width='100%'
            height={250}
          >
            <PieChart>
              <Pie
                data={pieData}
                dataKey='value'
                cx='50%'
                cy='50%'
                outerRadius={80}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Столбчатый график */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='bg-gray-800 p-6 rounded-xl shadow-lg'
        >
          <h2 className='text-xl font-semibold mb-4'>📊 Ежемесячные продажи</h2>
          <ResponsiveContainer
            width='100%'
            height={250}
          >
            <BarChart data={barData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey='продажи'
                fill='#8884d8'
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Радарный график */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='bg-gray-800 p-6 rounded-xl shadow-lg'
        >
          <h2 className='text-xl font-semibold mb-4'>📊 Категории трат</h2>
          <ResponsiveContainer
            width='100%'
            height={250}
          >
            <RadarChart
              cx='50%'
              cy='50%'
              outerRadius='80%'
              data={radarData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey='category' />
              <PolarRadiusAxis />
              <Radar
                name='Расход'
                dataKey='расход'
                stroke='#FF8042'
                fill='#FF8042'
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
