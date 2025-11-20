import React, { useRef, useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// کامپوننت ویدیو با زیرنویس
const VideoWithCaptionsSample = ({ title, description, videoFileName, videoSrc, captionKey }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };


  const allCaptions = {
    myvideo: [
      { start: 0, end: 3, text: "سلام! این اولین جمله است." },
      { start: 4, end: 7, text: "این یک ترجمه کوتاه است." },
      { start: 8, end: 12, text: "ادامه داستان..." },
    ],
    myvideo2: [
      { start: 0, end: 2, text: "این ویدیو دوم است." },
      { start: 3, end: 6, text: "با زیرنویس متفاوت!" },
    ],
  };

  const captions = allCaptions[captionKey] || [];

  // ۱) ثبت listener برای زمان و نمایش زیرنویس
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const caption = captions.find((c) => currentTime >= c.start && currentTime <= c.end);
      setCurrentCaption(caption ? caption.text : "");
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [captions]);

  // ۲) وقتی videoSrc تغییر کرد، ویدیو را pause و load کنیم و زیرنویس را ریست کنیم
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ایمن: ابتدا توقف کن، سپس منبع جدید را ست و load کن
    try {
      video.pause();
    } catch (e) {
      /* ignore */
    }
    // set src just in case (browserهای مختلف متفاوت رفتار می‌کنند)
    video.src = videoSrc;
    // بارگذاری منبع جدید
    video.load();
    // زیرنویس را پاک کن تا متن قبلی نماند
    setCurrentCaption("");
    // (اختیاری) اگر می‌خواهید ویدیو خودکار پخش شود، از video.play() استفاده کنید،
    // اما بخاطر سیاست‌های autoplay مرورگرها ممکن است لازم باشد تعامل کاربر باشد.
    // video.play().catch(()=>{});
  }, [videoSrc]);

  return (
    <div className="container mt-4">
      <div className="position-relative border " style={{ maxWidth: "800px", margin: "auto" }}>
        {/* <video ref={videoRef} width="100%" height="800px" controls className="rounded ">
          <source src={videoSrc} type="video/mp4" />
          مرورگر شما ویدیو را پشتیبانی نمی‌کند.
        </video>  */}
            {/* <div className="d-flex justify-content-center"> */}
              <Card
                className=" shadow-sm rounded-4 border border-danger bg-warning text-center "
                style={{ maxWidth: "780px", marginLeft: "auto", marginRight: "auto" }}
              >
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold mb-2">{title}</Card.Title>
                  <Card.Text className="mb-3">{description}</Card.Text>
                    <div className="container mt-4">
                      <div className="position-relative" style={{ maxWidth: "750px",height:"650px",maxHeight:"", margin: "auto" }}>
                        <video ref={videoRef} width="100%" height="100%"  controls className="rounded h-sm-50 h-md-75 h-lg-75">
                          <source src={videoFileName} type="video/mp4" height="100%" />
                          مرورگر شما ویدیو را پشتیبانی نمی‌کند.
                        </video>
                      </div>
                    </div>
                  <Button
                    variant={isPlaying ? "danger" : "success"}
                    onClick={handlePlayPause}
                    className="px-4 py-2 fw-bold"
                  >
                    {isPlaying ? "توقف" : "پخش"}
                  </Button>
                </Card.Body>
              </Card>
            {/* </div> */}

        {currentCaption && (
          <div
            className="position-absolute w-100 text-center px-3 py-2 rounded"
            style={{
              bottom: "10%",
              left: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            {currentCaption}
          </div>
        )}
      </div>
    </div>
  );
};

// کامپوننت اصلی با منو
export default function VideoWithCaptions() {
  const basePath = "/alphabet/videoWithCaptions";
  const location = useLocation();

  // منو و مسیر ویدیوها
  const menuItems = [
    {
      label: "اردک کوچک",
      path: "chick",
      videoSrc: "/video/chick.mp4",
      captionKey: "",
      // captionKey: "myvideo",
    },
    {
      label: "مورچه",
      path: "anty",
      videoSrc: "/video/anty-1.mp4",
      captionKey: "",
      // captionKey: "myvideo2",
    },
    {
      label: "ملخ تنبل",
      path: "grasshopper",
      videoSrc: "/video/lazyGrasshopper.mp4",
      captionKey: "",
    },
    {
      label: "روزهای هفته",
      path: "weekDays",
      videoSrc: "/video/days-of-week.mp4",
      captionKey: "",
    },
  ];

  return (
    <div className="container mt-4">
      {/* منو */}
      <nav className="nav nav-pills mb-3">
        {menuItems.map((item) => {
          const fullPath = `${basePath}/${item.path}`;
          return (
            <Link
              key={item.path}
              className={`nav-link ${
                location.pathname === fullPath ? "active" : "text-warning"
              }`}
              to={fullPath}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* مسیرهای ویدیو */}
      <Routes>
        {menuItems.map((item) => (
          // دقت: قرار دادن key روی element باعث می‌شود component remount شود
          <Route
            key={item.path}
            path={item.path}
            element={
              <VideoWithCaptionsSample
                key={item.videoSrc}           // <-- این key مهم است
                videoSrc={item.videoSrc}
                captionKey={item.captionKey}
              />
            }
          />
        ))}
        <Route
          path="*"
          element={<div className="text-center mt-5">لطفاً یک ویدیو انتخاب کنید.</div>}
        />
      </Routes>
    </div>
  );
}
