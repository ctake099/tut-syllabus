"use client";

import { Card, CardContent, Typography, Chip, Box, Stack } from "@mui/material";
import { LectureInfo } from "@/types/lecture";

export default function LectureCard({ lecture }: { lecture: LectureInfo }) {
  return (
    <Card
      sx={{
        height: "100%", // 高さを Grid に合わせて最大化
        width: "100%",  // 横幅を親要素いっぱいに
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {lecture.subjectName ?? "未設定"}
        </Typography>

        {/* 担当教員名だけを / 区切りで表示 */}
        {lecture.instructors && lecture.instructors.length > 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
            {lecture.instructors.join(" / ")}
          </Typography>
        )}

        <Box mt={1} display="flex" gap={1} flexWrap="wrap">
          {/* スケジュール */}
          {lecture.schedule?.map((sch, i) => (
            <Chip
              key={`sch-${i}`}
              label={`${sch.day ?? "?"}${sch.period ?? "?"}限`}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}

          {/* 単位数 */}
          {lecture.credits !== undefined && (
            <Chip
              label={`${lecture.credits}単位`}
              size="small"
              color="success"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}