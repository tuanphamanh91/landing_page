const rawImages = {
  en: {
    hero2: "assets/imgs/hero2-en.png",
    translation: "assets/imgs/Translate.gif",
    summarize: "assets/imgs/Summarize.gif",
    communication: "assets/imgs/Email.gif",
    english: "assets/imgs/Analyze.gif",
  },
  vi: {
    hero2: "assets/imgs/hero2-vi.png",
    translation: "assets/imgs/Gif_trans.gif",
    summarize: "assets/imgs/Gif_sum.gif",
    communication: "assets/imgs/Gif_mail.gif",
    english: "assets/imgs/Gif_gram.gif",
  },
};

const translations = {
  en: {
    brand: "AI SHORTCUT",
    hero: {
      tagline: "More simple - More focus",
      slogan: "Quick translation with one shortcut",
      description:
        "Effortlessly translate, rewrite, communicate, and summarize documents using the power of AI.",
      how_it_works: "Set up shortcuts for commonly used prompts (e.g., translation, rewriting, summarizing, chatting, etc.), then select the text you want the AI to process and press the shortcut.",
      cta: "Download for free now!",
      download_mac: "Get it on MAC APP STORE",
      download_windows: "Available at MICROSOFT",
    },
    efficiency: {
      title: "Boost your work efficiency",
      translation: {
        title: "Translation",
        description:
          "Translate multiple languages quickly and accurately, compare both ways, and get instant results.",
      },
      communication: {
        title: "Communicate",
        description:
          "Support for messaging and email in multiple languages, using industry-specific terms and personalized tone.",
      },
      summarize: {
        title: "Summarize",
        description:
          "Capture key points from documents in seconds, focusing only on the most important details.",
      },
      learn_english: {
        title: "Learn English",
        description:
          "Improve your English skills with AI.",
      },
    },
    advantages: {
      title: "Unlock your advantages",
      time: {
        title: "Save time",
        description:
          "Execute tasks quickly with just one shortcut, saving you significant time on daily routines.",
      },
      productivity: {
        title: "Boost productivity",
        description:
          "Stay focused on your core work without being interrupted by repetitive tasks.",
      },
      relationships: {
        title: "International relationships",
        description:
          "Communicate effectively in any language to strengthen global connections.",
      },
    },
    assistant: {
      title: "Why it works for you",
      interface1: "Simple interface: ",
      interface2: "Intuitive design, easy to understand and use.",

      integration1: "Multi-platform integration: ",
      integration2: "Work with all other applications on your Mac/PC.",

      instant1: "Instant results: ",
      instant2: "Complete tasks right where you are, without switching tabs.",

      crossPlatform1: "Cross-platform: ",
      crossPlatform2: "Available on both Windows and macOS.",

      shortcuts1: "Personalized shortcuts: ",
      shortcuts2: "Set up shortcuts that fit your workflow.",
    },
    steps: {
      title: "Optimize work in 3 simple steps",
      step1: "Download the app",
      step2: "Set up shortcuts",
      step3: "Select content and press the shortcut",
    },
    other: {
      footer:
        "Experience a streamlined, straightforward workflow focused on what matters most — empowering you to grow both your career and yourself efficiently.",
      free_download: "Download for free now!",
      join_fb: "Join Facebook"
    },
  },
  vi: {
    brand: "AI SHORTCUT",
    hero: {
      tagline: "Dễ dàng hơn - Tập trung hơn",
      slogan: "Dịch tức thì với một phím tắt",
      description:
        "Dễ dàng dịch thuật, viết lại, trò chuyện và tóm tắt tài liệu với sức mạnh của AI.",
      how_it_works: "Cài đặt phím tắt cho các prompt thường dùng (ví dụ: dịch thuật, viết lại, tóm tắt, trò chuyện, ...), sau đó chọn văn bản cần AI xử lý và ấn phím tắt.",
      cta: "Tải về miễn phí ngay!",
      download_mac: "Tải trên MAC APP STORE",
      download_windows: "Có sẵn trên MICROSOFT",
    },
    efficiency: {
      title: "Nâng cao hiệu suất công việc",
      translation: {
        title: "Dịch thuật",
        description:
          "Dịch nhanh và chính xác, so sánh hai chiều và tạo mới kết quả tức thì.",
      },
      communication: {
        title: "Trò chuyện",
        description:
          "Hỗ trợ nhắn tin, viết email đa ngôn ngữ với thuật ngữ chuyên ngành và cá nhân hoá văn phong.",
      },
      summarize: {
        title: "Tóm tắt",
        description:
          "Tóm tắt tài liệu chỉ trong vài giây, tập trung vào những điều quan trọng nhất.",
      },
      learn_english: {
        title: "Học tiếng Anh",
        description:
          "Nâng cao kỹ năng tiếng Anh với AI.",
      },
    },
    advantages: {
      title: "Những giá trị bạn nhận được",
      time: {
        title: "Tiết kiệm thời gian",
        description:
          "Xử lý nhanh gọn với một phím tắt, giúp bạn tiết kiệm thời gian đáng kể cho các tác vụ thường ngày.",
      },
      productivity: {
        title: "Tăng hiệu quả công việc",
        description:
          "Tập trung vào công việc chính, hạn chế những thao tác lặp lại.",
      },
      relationships: {
        title: "Mở rộng kết nối quốc tế",
        description:
          "Hỗ trợ giao tiếp đa ngôn ngữ để xây dựng mối quan hệ thuận lợi.",
      },
    },
    assistant: {
      title: "Trợ lý thân thiện của bạn: ",

      interface1: "Giao diện đơn giản: ",
      interface2: "Thiết kế dễ hiểu, dễ sử dụng.",

      integration1: "Tích hợp mọi nền tảng: ",
      integration2: "Làm việc với tất cả ứng dụng trên máy tính của bạn.",

      instant1: "Kết quả tức thì: ",
      instant2: "Mọi thao tác hoàn thành ngay tại vị trí bạn làm việc.",

      crossPlatform1: "Đa hệ điều hành: ",
      crossPlatform2: "Sử dụng cho cả hệ điều hành Windows và MacOS.",

      shortcuts1: "Cá nhân hoá linh hoạt: ",
      shortcuts2: "Tuỳ chỉnh phím tắt theo thói quen của bạn.",
    },
    steps: {
      title: "Tối ưu công việc của bạn trong 3 bước",
      step1: "Tải ứng dụng",
      step2: "Cài đặt câu lệnh cho mỗi phím tắt",
      step3: "Chọn nội dung và ấn phím tắt",
    },
    other: {
      footer:
        "Trải nghiệm một quy trình làm việc đơn giản và mượt mà, tập trung vào những gì quan trọng nhất cùng AI Shortcut – Giải pháp tối ưu hiệu quả cho công việc và sự phát triển của bạn.",
      free_download: "Tải về miễn phí",
      join_fb: "Tham gia nhóm facebook"
    },
  },
};

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
}

function changeLanguage() {
  const lang = document.getElementById("langSelect").value;
  const texts = translations[lang];

  document.querySelectorAll(".translate").forEach((element) => {
    const key = element.getAttribute("data-key");
    const translation = getNestedTranslation(texts, key);
    if (translation) {
      element.textContent = translation;
    }
  });

  // Lấy các ảnh tương ứng với ngôn ngữ
  const selectedImages = rawImages[lang];

  // Thay đổi src của các ảnh
  document.getElementById("translation").src = selectedImages.translation;
  document.getElementById("summarize").src = selectedImages.summarize;
  document.getElementById("communication").src = selectedImages.communication;
  document.getElementById("english").src = selectedImages.english;
  document.getElementById("hero2").src = selectedImages.hero2;
}

// Set default language
window.onload = function () {
  const browserLang = navigator.language || navigator.userLanguage;
  const primaryLang = browserLang.split("-")[0];
  if (translations[primaryLang]) {
    document.getElementById("langSelect").value = primaryLang;
  } else {
    document.getElementById("langSelect").value = "en";
  }
  changeLanguage();
};

const images = document.querySelectorAll(".hero-img-image");
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}, 6000);

document.getElementById("download-mac").addEventListener("click", function(event) {
  console.log("download-mac")
  gtag("event", "download-mac");
});

document.getElementById("download-win").addEventListener("click", function(event) {
  console.log("download-win")
  gtag("event", "download-win");
});