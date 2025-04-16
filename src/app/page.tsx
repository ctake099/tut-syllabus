'use client'

import { useState, useEffect } from 'react'
import {
  TextField,
  Box,
  Grid,
  Container,
  Typography,
} from '@mui/material'
import LectureCard from '@/components/LectureCard'
import { LectureFromAPI } from '@/types/lecture'

export default function Page() {
  const [query, setQuery] = useState('')
  const [instructor, setInstructor] = useState('')
  const [lectures, setLectures] = useState<LectureFromAPI[]>([])

  const days = ['月', '火', '水', '木', '金', '土']
  const periods = [1, 2, 3, 4, 5, 6]

  const [selectedSlots, setSelectedSlots] = useState<Set<string>>(new Set())

  const toggleSlot = (day: string, period: number) => {
    const key = `${day}-${period}`
    setSelectedSlots((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      return newSet
    })
  }

  const fetchLectures = async () => {
    const params = new URLSearchParams()
    if (query) params.append('q', query)
    if (instructor) params.append('instructor', instructor)

      selectedSlots.forEach((slot) => {
        params.append("slot", slot)
      })

    const res = await fetch(`/api/lectures?${params.toString()}`)
    const data = await res.json()
    setLectures(data)
  }

  useEffect(() => {
    fetchLectures()
  }, [query, instructor, Array.from(selectedSlots).sort().join(',')])

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" gutterBottom>
        TUT シラバス一覧
      </Typography>

      {/* 🔍 検索フォーム */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={4}
        mb={4}
        alignItems="flex-start"
      >
        {/* 左：入力エリア */}
        <Box flex={1} display="flex" flexDirection="column" gap={2}>
          <TextField
            fullWidth
            label="講義名"
            value={query}
            size="medium"
            sx={{ input: { fontSize: '1.1rem', py: 1.5 } }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <TextField
            fullWidth
            label="教員名"
            value={instructor}
            size="medium"
            sx={{ input: { fontSize: '1.1rem', py: 1.5 } }}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </Box>

        {/* 右：曜日・時限マトリクス */}
        <Box minWidth="360px">
          <Box
            component="table"
            sx={{
              borderCollapse: 'collapse',
              borderSpacing: 0,
              '& td, & th': { padding: '4px 8px', textAlign: 'center' },
            }}
          >
            <thead>
              <tr>
                <th></th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period) => (
                <tr key={period}>
                  <td>{`${period}限`}</td>
                  {days.map((day) => {
                    const key = `${day}-${period}`
                    return (
                      <td key={key}>
                        <input
                          type="checkbox"
                          checked={selectedSlots.has(key)}
                          onChange={() => toggleSlot(day, period)}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      </Box>

      {/* 🧾 講義一覧表示 */}
      <Grid container spacing={3}>
        {lectures.map((lecture, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} display="flex">
            <LectureCard lecture={lecture} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}