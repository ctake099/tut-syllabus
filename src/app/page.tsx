import fs from "fs";
import path from "path";
import { Grid, Container, Typography } from "@mui/material";
import LectureCard from "@/components/LectureCard";
import { LectureInfo } from "@/types/lecture";

export default function Page() {
  const syllabuses: LectureInfo[] = loadDummySyllabus();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" gutterBottom>
        TUT シラバス一覧
      </Typography>

      <Grid container spacing={3}>
        {syllabuses.map((lecture, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={6}
            display="flex" // 高さ合わせに必要
          >
            <LectureCard lecture={lecture} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function loadDummySyllabus(limit = 20): LectureInfo[] {
  const dirPath = path.join(process.cwd(), "scraping/DummyDatas");
  const files = fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".json"))
    .slice(0, limit);
  return files.map((file) => {
    const content = fs.readFileSync(path.join(dirPath, file), "utf-8");
    return JSON.parse(content) as LectureInfo;
  });
}