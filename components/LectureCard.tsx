"use client";

import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Popper,
  Paper,
  Fade,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState, useRef, useCallback } from "react";
import { LectureInfo } from "@/types/lecture";

export default function LectureCard({ lecture }: { lecture: LectureInfo }) {
  const [popperOpen, setPopperOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [popperMessage, setPopperMessage] = useState("コピーする");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!lecture.timetableCode) return;

      navigator.clipboard.writeText(lecture.timetableCode);
      setPopperMessage("コピーしました");
      setAnchorEl(e.currentTarget);
      setPopperOpen(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setPopperOpen(false);
        setPopperMessage("コピーする");
      }, 1500);
    },
    [lecture.timetableCode]
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (popperMessage !== "コピーしました") {
      setPopperMessage("コピーする");
    }
    setAnchorEl(e.currentTarget);
    setPopperOpen(true);
  };

  const handleMouseLeave = () => {
    if (popperMessage !== "コピーしました") {
      setPopperOpen(false);
    }
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          width: "100%",
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

          {lecture.instructors?.length > 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-word" }}>
              {lecture.instructors.join(" / ")}
            </Typography>
          )}

          <Box mt={1} display="flex" gap={1} flexWrap="wrap">
            {lecture.schedule?.map((sch, i) => (
              <Chip
                key={`sch-${i}`}
                label={`${sch.day ?? "?"}${sch.period ?? ""}`}
                size="small"
                color="warning"
              />
            ))}

            {lecture.credits !== undefined && (
              <Chip label={`${lecture.credits}単位`} size="small" color="success" />
            )}

            {/* 授業コード */}
            {lecture.timetableCode && (
              <Chip
                label={lecture.timetableCode}
                icon={
                  <ContentCopyIcon
                    fontSize="inherit"
                    sx={{ mr: "-4px", ml: "0px" }}
                  />
                }
                size="small"
                color="info"
                onClick={handleCopy}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  cursor: "pointer",
                  flexDirection: "row-reverse",
                  pl: 0,
                  pr: 0.7,
                  "gap": "0px",
                  minWidth: "fit-content",
                  alignItems: "center",
                }}
              />
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Popperで動的表示 */}
      <Popper
        open={popperOpen}
        anchorEl={anchorEl}
        placement="top"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 6],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <Paper
              sx={{
                p: "2px 8px",
                bgcolor: "grey.800",
                color: "white",
                fontSize: "0.75rem",
                borderRadius: 1,
                boxShadow: 2,
              }}
            >
              {popperMessage}
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}