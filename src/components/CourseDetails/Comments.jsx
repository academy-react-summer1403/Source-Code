import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function Comments() {
  const [selectedTab, setSelectedTab] = useState(0);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { name: "محمد زمانی", text: "خیلی آموزش خوبی بود.", time: "1 ساعت پیش" },
    {
      name: "سارا کریمی",
      text: "مطالب کاملا واضح بود و کمک بزرگی برای من بود.",
      time: "2 ساعت پیش",
    },
    {
      name: "کمال اسدی",
      text: "من چیزهای جدیدی یاد گرفتم. ممنون.",
      time: "3 ساعت پیش",
    },
    {
      name: "محسن حسنی",
      text: "لطفا مطالب بیشتری قرار دهید.",
      time: "4 ساعت پیش",
    },
  ]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([
        { name: "کاربر جدید", text: commentText, time: "همین حالا" },
        ...comments,
      ]);
      setCommentText("");
    }
  };

  // Sample data for previews
  const previews = [
    { title: "فصل اول: HTML چیست؟", duration: "56 mins" },
    { title: "فصل دوم: تگ‌های مهم HTML", duration: "4 hrs 38 mins" },
    { title: "فصل سوم: Meta", duration: "7 mins" },
    { title: "فصل چهارم: Body", duration: "14 mins" },
    { title: "جلسه پنجم: Script & Style", duration: "20 mins" },
    { title: "جلسه ششم: Properties و Events", duration: "2 hrs 40 mins" },
    { title: "جلسه هفتم: آشنایی با CSS", duration: "3 hrs 52 mins" },
  ];

  return (
    <>
      <div className="container bg-white w-4/5 m-auto p-9 flex flex-col gap-8 rounded-3xl shadow-md">
        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="comments tabs"
        >
          <Tab label="توضیحات" />
          <Tab label="پیش نمایش ها" />
          <Tab label="نظرات کاربران" />
        </Tabs>

        {/* Tab Panels */}
        <TabPanel value={selectedTab} index={0}>
          <Box className="flex flex-col gap-4">
            <Typography variant="h5" component="h3" className="font-semibold">
              آموزش رایگان HTML
            </Typography>
            <Typography color="textSecondary">
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
              جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
              کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
              به روش کدنویسی پیشرفته و تمیز.
            </Typography>
            <Typography variant="h5" component="h3" className="font-semibold">
              آموزش رایگان html برای چه کسانی مناسب است ؟
            </Typography>
            <Typography color="textSecondary">
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
              جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
              کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله
              به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت
              حل مساله به روش کدنویسی پیشرفته و تمیز؛
            </Typography>
            <Typography color="textSecondary">
              برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی جاوااسکریپت
              محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته
              و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
              پیشرفته و تمیز;
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <Box className="flex flex-col gap-4">
            <Typography variant="h5" component="h3" className="font-semibold">
              پیش‌نمایش‌های آموزش HTML
            </Typography>
            <Box>
              {previews.map((preview, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography variant="subtitle1" className="font-medium">
                      {preview.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{ marginLeft: "auto" }}
                    >
                      {preview.duration}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="textSecondary">
                      جزئیات این بخش را اینجا قرار دهید. این قسمت شامل توضیح
                      مختصری درباره‌ی محتوا می‌باشد.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={selectedTab} index={2}>
          <Box className="flex flex-col gap-4">
            <Typography variant="h5" component="h3" className="font-semibold">
              نظرات کاربران
            </Typography>

            {/* Comment Input */}
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="نظر خود را بنویسید"
                multiline
                rows={3}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
                style={{ alignSelf: "flex-end" }}
              >
                ارسال
              </Button>
            </Box>
            {/* Comments List */}
            <List>
              {comments.map((comment, index) => (
                <Box key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>{comment.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" component="span">
                          {comment.name}{" "}
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="span"
                          >
                            {comment.time}
                          </Typography>
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textPrimary">
                          {comment.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < comments.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </Box>
              ))}
            </List>
          </Box>
        </TabPanel>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
