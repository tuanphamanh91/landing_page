const rawImages = {
  en: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  vi: {
    hero2: "assets/imgs/hero2-vi.webp",
    translation: "assets/vid/Gif_trans.mp4",
    summarize: "assets/vid/Gif_sum.mp4",
    communication: "assets/vid/Gif_mail.mp4",
    english: "assets/vid/Gif_gram.mp4",
    customize_prompt: "assets/vid/CustomPromptVi.mp4",
  },
  ja: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  ko: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  zh: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  es: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  de: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
  fr: {
    hero2: "assets/imgs/hero2-en.webp",
    translation: "assets/vid/Translate.mp4",
    summarize: "assets/vid/Summarize.mp4",
    communication: "assets/vid/Email.mp4",
    english: "assets/vid/Analyze.mp4",
    customize_prompt: "assets/vid/CustomPromptEn.mp4",
  },
};

const translations = {
  en: {
    brand: "AI SHORTCUT",
    header: {
      premium: "Upgrade to Premium"
    },
    hero: {
      tagline: "More simple - More focus",
      slogan: "Quick translation with one shortcut",
      description:
        "Effortlessly translate, rewrite, communicate, and summarize documents using the power of AI.",
      how_it_works: "Select the text, press the shortcut. No copy-paste, no switching windows.",
      cta: "Download for free now",
      download_mac: "Get it on MAC APP STORE",
      download_ios: "Get it on",
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
        title: "Grammar analysis",
        description:
          "Select an English sentence and see what is wrong and how to fix it.",
      },
      customize_prompt: {
        title: "Customize Prompt",
        description:
          "Create and customize your own prompts for different scenarios.",
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
    testimonials: {
      title: "Loved by real users",
      featured: "Honestly, I think this is a seriously good app — it uses AI to streamline everyday work, and it's built by a Vietnamese developer. The other day I even wrote a post recommending it in my group chat.",
      featured_author: "Shared in a community group",
      t1: "This app is so convenient to use.",
      t1_author: "Happy user",
      t2: "So handy and well made — it saves me so much time!",
      t2_author: "Happy user",
      t3: "I got used to it in no time and now I'm hooked — can't stop using it!",
      t3_author: "Daily user",
      t4: "I've switched to writing all my captions with the app.",
      t4_author: "Content creator",
      t5: "I love using it on macOS!",
      t5_author: "macOS user",
    },
    faq: {
      title: "Questions before you download",

      q1: "Can I use it in languages other than English?",
      a1: "Yes. It works with any language you want.",

      q2: "Do I need an OpenAI account or API key?",
      a2: "No. The app handles that for you.",

      q3: "Does the app store my data?",
      a3: "No. The app stores none of your content. The text does pass through ChatGPT and follows OpenAI's data policy.",

      q4: "Which apps does it work in?",
      a4: "Every app: your browser, Word, email, chat...",

      q5: "Can I change the shortcuts?",
      a5: "Yes. Set your own key combination and write your own prompt behind each one.",

      q6: "How do I use it on iPhone or iPad?",
      a6: "Add AI Shortcut as a keyboard in Settings, then switch to it while typing.",

      q7: "What can it do besides translate?",
      a7: "You write your own prompts, so you can ask the AI for anything: rewrite something formally, analyse what a paragraph means, summarise a document.",
    },
    privacy: {
      title: "Your data",
      body:
        "AI Shortcut stores none of the content you process. Text goes straight to ChatGPT and follows OpenAI's data policy.",
    },
    other: {
      footer:
        "Experience a streamlined, straightforward workflow focused on what matters most — empowering you to grow both your career and yourself efficiently.",
      free_download: "Download for free now",
      join_fb: "Join Facebook"
    },
    footer: {
      tagline: "Boost your productivity with AI",
      description: "AI Shortcut helps you translate, rewrite, communicate, and summarize documents using the power of AI. Available on Windows, Mac, and iOS devices.",
      products: {
        title: "Products",
        windows: "Windows App",
        mac: "Mac App",
        ios: "iOS App"
      },
      connect: {
        title: "Connect",
        facebook: "Facebook",
        community: "Community Group"
      },
      support: {
        title: "Support",
        email: "Email Support",
        faq: "FAQ",
        privacy: "Privacy Policy"
      },
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      about: "About Us",
      communication: {
        title: "Communication",
        join: "Join Communication"
      }
    }
  },
  vi: {
    brand: "AI SHORTCUT",
    header: {
      premium: "Nâng cấp Premium"
    },
    hero: {
      tagline: "Dễ dàng hơn - Tập trung hơn",
      slogan: "Dịch tức thì với một phím tắt",
      description:
        "Dễ dàng dịch thuật, viết lại, trò chuyện và tóm tắt tài liệu với sức mạnh của AI.",
      how_it_works: "Bôi đen văn bản, nhấn phím tắt. Không copy, không đổi cửa sổ.",
      cta: "Tải về miễn phí ngay",
      download_mac: "Tải từ MAC OS STORE",
      download_ios: "Tải trên iOS STORE",
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
        title: "Phân tích ngữ pháp",
        description:
          "Chọn một câu tiếng Anh, AI chỉ ra lỗi sai và cách sửa.",
      },
      customize_prompt: {
        title: "Tùy chỉnh Prompt",
        description:
          "Tạo và tùy chỉnh prompt của riêng bạn cho các tình huống khác nhau.",
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
    testimonials: {
      title: "Khách hàng nói gì về AI Shortcut",
      featured: "Mình đánh giá đây là một app khá xịn, tích hợp AI để tối ưu hóa xử lý công việc — và được phát triển bởi người Việt. Hôm trước mình còn lên hẳn một bài PR cho app trên nhóm chat chung.",
      featured_author: "Chia sẻ từ cộng đồng",
      t1: "App dùng tiện lợi thật sự.",
      t1_author: "Người dùng",
      t2: "Tiện lợi và xịn quá, tiết kiệm được bao nhiêu thời gian!",
      t2_author: "Người dùng",
      t3: "Dùng quen tay rồi, nghiện mất rồi, không bỏ được shop ơi!",
      t3_author: "Khách hàng thân thiết",
      t4: "Em chuyển hẳn sang viết caption bằng app của shop luôn.",
      t4_author: "Nhà sáng tạo nội dung",
      t5: "Em dùng trên macOS thích quá!",
      t5_author: "Người dùng macOS",
    },
    faq: {
      title: "Câu hỏi trước khi tải",

      q1: "Ngoài tiếng Anh, dùng được với ngôn ngữ khác không?",
      a1: "Được. Bạn dùng được với bất cứ ngôn ngữ nào bạn muốn.",

      q2: "Tôi có cần tài khoản hay API key của OpenAI không?",
      a2: "Không cần. Ứng dụng tự xử lý phần đó cho bạn.",

      q3: "Ứng dụng có lưu trữ dữ liệu của tôi không?",
      a3: "Không. Ứng dụng không lưu bất kỳ nội dung nào của bạn. Văn bản có đi qua ChatGPT và tuân theo chính sách dữ liệu của OpenAI.",

      q4: "Dùng được trong những ứng dụng nào?",
      a4: "Mọi ứng dụng: trình duyệt, Word, email, chat...",

      q5: "Tôi đổi phím tắt được không?",
      a5: "Được. Bạn tự đặt tổ hợp phím và viết câu lệnh riêng sau mỗi phím tắt.",

      q6: "Trên iPhone hay iPad dùng thế nào?",
      a6: "Thêm AI Shortcut làm bàn phím trong phần Cài đặt, rồi chuyển sang nó khi gõ.",

      q7: "Ngoài dịch, ứng dụng còn làm được gì?",
      a7: "Ứng dụng cho phép bạn tự viết câu lệnh, nên bạn yêu cầu AI bất cứ điều gì: viết lại trang trọng, phân tích ý nghĩa đoạn văn, tóm tắt tài liệu.",
    },
    privacy: {
      title: "Dữ liệu của bạn",
      body:
        "AI Shortcut không lưu bất kỳ nội dung nào bạn xử lý. Văn bản được gửi thẳng tới ChatGPT và tuân theo chính sách dữ liệu của OpenAI.",
    },
    other: {
      footer:
        "Trải nghiệm một quy trình làm việc đơn giản và mượt mà, tập trung vào những gì quan trọng nhất cùng AI Shortcut – Giải pháp tối ưu hiệu quả cho công việc và sự phát triển của bạn.",
      free_download: "Tải về miễn phí",
      join_fb: "Tham gia nhóm facebook"
    },
    footer: {
      tagline: "Tăng năng suất làm việc với AI",
      description: "AI Shortcut giúp bạn dịch thuật, viết lại, trò chuyện và tóm tắt tài liệu với sức mạnh của AI. Có sẵn trên Windows, Mac và thiết bị iOS.",
      products: {
        title: "Sản phẩm",
        windows: "Ứng dụng Windows",
        mac: "Ứng dụng Mac",
        ios: "Ứng dụng iOS"
      },
      connect: {
        title: "Kết nối",
        facebook: "Facebook",
        community: "Nhóm Cộng đồng"
      },
      support: {
        title: "Hỗ trợ",
        email: "Hỗ trợ qua Email",
        faq: "Câu hỏi thường gặp",
        privacy: "Chính sách bảo mật"
      },
      terms: "Điều khoản sử dụng",
      privacy: "Chính sách bảo mật",
      about: "Về chúng tôi",
      communication: {
        title: "Cộng đồng",
        join: "Tham gia nhóm facebook"
      }
    }
  },
  ja: {
    brand: "AI SHORTCUT",
    header: {
      premium: "プレミアムにアップグレード"
    },
    hero: {
      tagline: "よりシンプルに - よりフォーカスに",
      slogan: "ショートカット一つですばやく翻訳",
      description:
        "AIのパワーを使って、簡単に翻訳、書き直し、コミュニケーション、文書の要約ができます。",
      how_it_works: "テキストを選んで、ショートカットを押すだけ。コピペも画面の切り替えも不要です。",
      cta: "今すぐ無料でダウンロード",
      download_mac: "MAC STOREで入手",
      download_ios: "iOS STOREで入手",
      download_windows: "MICROSOFTで入手可能",
    },
    efficiency: {
      title: "作業効率の向上",
      translation: {
        title: "翻訳",
        description:
          "複数の言語を素早く正確に翻訳し、双方向で比較、即座に結果を得られます。",
      },
      communication: {
        title: "コミュニケーション",
        description:
          "業界固有の用語やパーソナライズされたトーンを使って、複数言語でのメッセージングやメール作成をサポートします。",
      },
      summarize: {
        title: "要約",
        description:
          "数秒で文書の重要なポイントをキャプチャし、最も重要な詳細だけに焦点を当てます。",
      },
      learn_english: {
        title: "文法チェック",
        description:
          "英文を選ぶだけで、誤りとその直し方がわかります。",
      },
      customize_prompt: {
        title: "プロンプトのカスタマイズ",
        description:
          "さまざまなシナリオ用に独自のプロンプトを作成してカスタマイズできます。",
      },
    },
    advantages: {
      title: "あなたの優位性を解き放つ",
      time: {
        title: "時間の節約",
        description:
          "ショートカット一つで素早くタスクを実行し、日常的な作業に費やす時間を大幅に節約できます。",
      },
      productivity: {
        title: "生産性の向上",
        description:
          "繰り返しのタスクに邪魔されることなく、コア業務に集中できます。",
      },
      relationships: {
        title: "国際的な関係",
        description:
          "どんな言語でも効果的にコミュニケーションを取り、世界的なつながりを強化できます。",
      },
    },
    testimonials: {
      title: "ユーザーの声",
      featured: "これは本当に優れたアプリだと思います。AIを活用して日々の作業を効率化してくれます。先日はグループチャットでおすすめの投稿までしてしまいました。",
      featured_author: "コミュニティでのシェア",
      t1: "とても使いやすいアプリです。",
      t1_author: "ユーザー",
      t2: "便利で完成度が高く、時間がすごく節約できます！",
      t2_author: "ユーザー",
      t3: "すぐに慣れて、もう手放せません！",
      t3_author: "愛用者",
      t4: "キャプションはすべてこのアプリで書くようになりました。",
      t4_author: "コンテンツクリエイター",
      t5: "macOSで使っていて最高です！",
      t5_author: "macOSユーザー",
    },
    faq: {
      title: "ダウンロード前によくある質問",

      q1: "英語以外の言語でも使えますか",
      a1: "使えます。お好きな言語で利用できます。",

      q2: "OpenAI のアカウントや API キーは必要ですか",
      a2: "不要です。アプリ側で処理します。",

      q3: "アプリは私のデータを保存しますか",
      a3: "保存しません。アプリは内容を一切保存しません。テキストは ChatGPT を経由し、OpenAI のデータポリシーに従います。",

      q4: "どのアプリで使えますか",
      a4: "すべてのアプリで使えます。ブラウザ、Word、メール、チャットなどです。",

      q5: "ショートカットキーは変更できますか",
      a5: "できます。キーの組み合わせを自分で決め、ショートカットごとに自分のプロンプトを書けます。",

      q6: "iPhone や iPad ではどう使いますか",
      a6: "設定で AI Shortcut をキーボードとして追加し、入力中に切り替えます。",

      q7: "翻訳以外に何ができますか",
      a7: "プロンプトを自分で書けるので、AI に何でも頼めます。丁寧な文に書き直す、段落の意味を分析する、文書を要約するなどです。",
    },
    privacy: {
      title: "あなたのデータ",
      body:
        "AI Shortcut は処理した内容を一切保存しません。テキストは ChatGPT に直接送信され、OpenAI のデータポリシーに従います。",
    },
    other: {
      footer:
        "最も重要なことに焦点を当てた合理的で分かりやすいワークフローを体験 — キャリアと自己成長を効率的に促進します。",
      free_download: "今すぐ無料でダウンロード",
      join_fb: "Facebookに参加"
    },
    footer: {
      tagline: "AIで生産性を向上",
      description: "AI Shortcutは、AIの力を使って翻訳、書き直し、コミュニケーション、文書の要約を支援します。Windows、Mac、iOSデバイスで利用可能。",
      products: {
        title: "製品",
        windows: "Windowsアプリ",
        mac: "Macアプリ",
        ios: "iOSアプリ"
      },
      connect: {
        title: "接続",
        facebook: "Facebook",
        community: "コミュニティグループ"
      },
      support: {
        title: "サポート",
        email: "Eメールサポート",
        faq: "よくある質問",
        privacy: "プライバシーポリシー"
      },
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      about: "私たちについて",
      communication: {
        title: "コミュニケーション",
        join: "コミュニケーションに参加"
      }
    }
  },
  ko: {
    brand: "AI SHORTCUT",
    header: {
      premium: "프리미엄으로 업그레이드"
    },
    hero: {
      tagline: "더 간단하게 - 더 집중적으로",
      slogan: "단축키 하나로 빠른 번역",
      description: "AI의 힘으로 손쉽게 번역, 재작성, 소통 및 문서 요약이 가능합니다.",
      how_it_works: "텍스트를 선택하고 단축키를 누르세요. 복사·붙여넣기도, 창 전환도 필요 없습니다.",
      cta: "지금 무료로 다운로드하세요",
      download_mac: "MAC APP STORE에서 다운로드",
      download_ios: "다운로드하기",
      download_windows: "MICROSOFT에서 이용 가능",
    },
    efficiency: {
      title: "업무 효율성 향상",
      translation: {
        title: "번역",
        description: "여러 언어를 빠르고 정확하게 번역하고, 양방향으로 비교하며 즉각적인 결과를 얻으세요.",
      },
      communication: {
        title: "소통",
        description: "산업별 용어와 개인화된 어조를 사용하여 여러 언어로 메시징 및 이메일 작성을 지원합니다.",
      },
      summarize: {
        title: "요약",
        description: "몇 초 안에 문서의 핵심 내용을 파악하고, 가장 중요한 세부 사항에만 집중하세요.",
      },
      learn_english: {
        title: "문법 분석",
        description: "영어 문장을 선택하면 틀린 부분과 고치는 방법을 알려줍니다.",
      },
      customize_prompt: {
        title: "프롬프트 맞춤 설정",
        description: "다양한 상황에 맞는 자신만의 프롬프트를 만들고 커스터마이즈하세요.",
      },
    },
    advantages: {
      title: "당신의 이점을 활용하세요",
      time: {
        title: "시간 절약",
        description: "단 하나의 단축키로 작업을 빠르게 실행하여 일상적인 작업에 소요되는 시간을 크게 절약할 수 있습니다.",
      },
      productivity: {
        title: "생산성 향상",
        description: "반복적인 작업에 방해받지 않고 핵심 업무에 집중할 수 있습니다.",
      },
      relationships: {
        title: "국제적 관계",
        description: "어떤 언어로든 효과적으로 의사소통하여 글로벌 연결을 강화하세요.",
      },
    },
    testimonials: {
      title: "사용자들의 후기",
      featured: "정말 괜찮은 앱이라고 생각해요. AI를 활용해 업무 처리를 효율적으로 만들어 줍니다. 얼마 전엔 단체 채팅방에 추천 글까지 올렸어요.",
      featured_author: "커뮤니티 공유",
      t1: "정말 사용하기 편리한 앱이에요.",
      t1_author: "사용자",
      t2: "편리하고 완성도가 높아서 시간을 정말 많이 아끼었어요!",
      t2_author: "사용자",
      t3: "금방 익숙해져서 이제 없으면 안 돼요!",
      t3_author: "애용자",
      t4: "이제 캡션은 전부 이 앱으로 써요.",
      t4_author: "콘텐츠 크리에이터",
      t5: "macOS에서 쓰는데 너무 좋아요!",
      t5_author: "macOS 사용자",
    },
    faq: {
      title: "다운로드 전 자주 묻는 질문",

      q1: "영어 외의 언어로도 쓸 수 있나요",
      a1: "쓸 수 있습니다. 원하는 어떤 언어로든 사용할 수 있습니다.",

      q2: "OpenAI 계정이나 API 키가 필요한가요",
      a2: "필요 없습니다. 앱이 알아서 처리합니다.",

      q3: "앱이 제 데이터를 저장하나요",
      a3: "저장하지 않습니다. 앱은 어떤 내용도 저장하지 않습니다. 다만 텍스트는 ChatGPT를 거치며 OpenAI의 데이터 정책을 따릅니다.",

      q4: "어떤 앱에서 쓸 수 있나요",
      a4: "모든 앱에서 됩니다. 브라우저, Word, 메일, 채팅 등입니다.",

      q5: "단축키를 바꿀 수 있나요",
      a5: "바꿀 수 있습니다. 키 조합을 직접 정하고, 단축키마다 직접 프롬프트를 쓸 수 있습니다.",

      q6: "아이폰이나 아이패드에서는 어떻게 쓰나요",
      a6: "설정에서 AI Shortcut을 키보드로 추가한 뒤 입력 중에 전환하세요.",

      q7: "번역 말고 또 무엇을 할 수 있나요",
      a7: "프롬프트를 직접 쓸 수 있어서 AI에게 무엇이든 요청할 수 있습니다. 격식 있게 고쳐 쓰기, 문단 의미 분석, 문서 요약 등입니다.",
    },
    privacy: {
      title: "사용자 데이터",
      body:
        "AI Shortcut은 처리한 내용을 저장하지 않습니다. 텍스트는 ChatGPT로 바로 전송되며 OpenAI의 데이터 정책을 따릅니다.",
    },
    other: {
      footer: "가장 중요한 것에 집중된 간소화되고 명확한 워크플로우를 경험하세요 — 효율적으로 경력과 자신을 성장시킬 수 있도록 지원합니다.",
      free_download: "지금 무료로 다운로드하세요",
      join_fb: "페이스북 참여"
    },
    footer: {
      tagline: "AI로 생산성 향상",
      description: "AI Shortcut은 AI의 힘을 활용하여 문서를 번역, 재작성, 소통 및 요약할 수 있도록 도와줍니다. Windows, Mac 및 iOS 기기에서 사용 가능합니다.",
      products: {
        title: "제품",
        windows: "Windows 앱",
        mac: "Mac 앱",
        ios: "iOS 앱"
      },
      connect: {
        title: "연결",
        facebook: "페이스북",
        community: "커뮤니티 그룹"
      },
      support: {
        title: "지원",
        email: "이메일 지원",
        faq: "자주 묻는 질문",
        privacy: "개인정보 보호정책"
      },
      terms: "서비스 이용 약관",
      privacy: "개인정보 보호정책",
      about: "회사 소개",
      communication: {
        title: "소통",
        join: "소통 참여하기"
      }
    }
  },
  zh: {
    brand: "AI SHORTCUT",
    header: {
      premium: "升级至高级版"
    },
    hero: {
      tagline: "更简单 - 更专注",
      slogan: "一键快速翻译",
      description: "利用AI的力量轻松翻译、改写、交流和总结文档。",
      how_it_works: "选中文字，按下快捷键。无需复制粘贴，无需切换窗口。",
      cta: "立即免费下载",
      download_mac: "在MAC APP STORE下载",
      download_ios: "在iOS STORE获取",
      download_windows: "在MICROSOFT可用",
    },
    efficiency: {
      title: "提高工作效率",
      translation: {
        title: "翻译",
        description: "快速准确地翻译多种语言，双向比较，获得即时结果。",
      },
      communication: {
        title: "沟通",
        description: "使用行业术语和个性化语气，支持多种语言的消息传递和电子邮件。",
      },
      summarize: {
        title: "总结",
        description: "几秒钟内捕捉文档中的要点，只关注最重要的细节。",
      },
      learn_english: {
        title: "语法分析",
        description: "选中一句英文，AI 指出错误并说明如何修改。",
      },
      customize_prompt: {
        title: "自定义提示",
        description: "为不同场景创建和自定义您自己的提示。",
      },
    },
    advantages: {
      title: "发掘您的优势",
      time: {
        title: "节省时间",
        description: "只需一个快捷键即可快速执行任务，为您的日常工作节省大量时间。",
      },
      productivity: {
        title: "提高生产力",
        description: "专注于核心工作，不受重复任务的干扰。",
      },
      relationships: {
        title: "国际关系",
        description: "用任何语言有效沟通，加强全球联系。",
      },
    },
    testimonials: {
      title: "用户怎么说",
      featured: "我觉得这是一款相当出色的应用，用 AI 来优化日常工作处理。前几天我还在群聊里发了一篇推荐它的帖子。",
      featured_author: "来自社区的分享",
      t1: "这个应用用起来太方便了。",
      t1_author: "用户",
      t2: "又方便又好用，节省了好多时间！",
      t2_author: "用户",
      t3: "很快就上手了，现在离不开它了！",
      t3_author: "忠实用户",
      t4: "我现在写文案都改用这个应用了。",
      t4_author: "内容创作者",
      t5: "在 macOS 上用着太喜欢了！",
      t5_author: "macOS 用户",
    },
    faq: {
      title: "下载前的常见问题",

      q1: "除了英语，还能用于其他语言吗",
      a1: "可以。你想用哪种语言都行。",

      q2: "需要 OpenAI 账号或 API 密钥吗",
      a2: "不需要。应用会替你处理。",

      q3: "应用会保存我的数据吗",
      a3: "不会。应用不保存你的任何内容。文本会经过 ChatGPT，并遵循 OpenAI 的数据政策。",

      q4: "可以在哪些应用里使用",
      a4: "所有应用都可以，比如浏览器、Word、邮件、聊天工具。",

      q5: "可以修改快捷键吗",
      a5: "可以。你能自己设定组合键，并为每个快捷键编写自己的提示词。",

      q6: "在 iPhone 或 iPad 上怎么用",
      a6: "在设置里把 AI Shortcut 添加为键盘，打字时切换过去即可。",

      q7: "除了翻译，还能做什么",
      a7: "你可以自己写提示词，所以能让 AI 做任何事，比如改写得更正式、分析段落含义、总结文档。",
    },
    privacy: {
      title: "你的数据",
      body:
        "AI Shortcut 不保存你处理的任何内容。文本直接发送至 ChatGPT，并遵循 OpenAI 的数据政策。",
    },
    other: {
      footer: "体验精简、直接的工作流程，专注于最重要的事情——高效赋能您的职业和个人成长。",
      free_download: "立即免费下载",
      join_fb: "加入Facebook"
    },
    footer: {
      tagline: "用AI提升您的生产力",
      description: "AI Shortcut帮助您使用AI的力量翻译、改写、交流和总结文档。可在Windows、Mac和iOS设备上使用。",
      products: {
        title: "产品",
        windows: "Windows应用",
        mac: "Mac应用",
        ios: "iOS应用"
      },
      connect: {
        title: "连接",
        facebook: "Facebook",
        community: "社区群组"
      },
      support: {
        title: "支持",
        email: "电子邮件支持",
        faq: "常见问题",
        privacy: "隐私政策"
      },
      terms: "服务条款",
      privacy: "隐私政策",
      about: "关于我们",
      communication: {
        title: "沟通",
        join: "加入沟通"
      }
    }
  },
  es: {
    brand: "AI SHORTCUT",
    header: {
      premium: "Actualizar a Premium"
    },
    hero: {
      tagline: "Más simple - Más enfocado",
      slogan: "Traducción rápida con un solo atajo",
      description: "Traduce, reescribe, comunica y resume documentos sin esfuerzo utilizando el poder de la IA.",
      how_it_works: "Selecciona el texto y pulsa el atajo. Sin copiar y pegar, sin cambiar de ventana.",
      cta: "Descarga gratis ahora",
      download_mac: "Consíguelo en MAC APP STORE",
      download_ios: "Consíguelo en",
      download_windows: "Disponible en MICROSOFT",
    },
    efficiency: {
      title: "Aumenta tu eficiencia laboral",
      translation: {
        title: "Traducción",
        description: "Traduce múltiples idiomas rápida y precisamente, compara en ambas direcciones y obtén resultados instantáneos.",
      },
      communication: {
        title: "Comunicación",
        description: "Soporte para mensajería y correo electrónico en múltiples idiomas, utilizando términos específicos de la industria y tono personalizado.",
      },
      summarize: {
        title: "Resumir",
        description: "Captura los puntos clave de documentos en segundos, enfocándote solo en los detalles más importantes.",
      },
      learn_english: {
        title: "Análisis gramatical",
        description: "Selecciona una frase en inglés y descubre qué falla y cómo corregirlo.",
      },
      customize_prompt: {
        title: "Personalizar indicaciones",
        description: "Crea y personaliza tus propias indicaciones para diferentes escenarios.",
      },
    },
    advantages: {
      title: "Desbloquea tus ventajas",
      time: {
        title: "Ahorra tiempo",
        description: "Ejecuta tareas rápidamente con solo un atajo, ahorrándote tiempo significativo en rutinas diarias.",
      },
      productivity: {
        title: "Aumenta la productividad",
        description: "Mantente enfocado en tu trabajo principal sin ser interrumpido por tareas repetitivas.",
      },
      relationships: {
        title: "Relaciones internacionales",
        description: "Comunícate efectivamente en cualquier idioma para fortalecer conexiones globales.",
      },
    },
    testimonials: {
      title: "Lo que dicen los usuarios",
      featured: "Creo que es una app realmente buena: usa IA para optimizar el trabajo del día a día. El otro día hasta publiqué una recomendación en mi chat grupal.",
      featured_author: "Compartido en la comunidad",
      t1: "Esta app es súper cómoda de usar.",
      t1_author: "Usuario",
      t2: "¡Qué práctica y bien hecha, me ahorra muchísimo tiempo!",
      t2_author: "Usuario",
      t3: "Me acostumbré enseguida y ya no puedo dejarla.",
      t3_author: "Usuario fiel",
      t4: "Ahora escribo todos mis captions con la app.",
      t4_author: "Creador de contenido",
      t5: "¡Me encanta usarla en macOS!",
      t5_author: "Usuario de macOS",
    },
    faq: {
      title: "Preguntas antes de descargar",

      q1: "¿Puedo usarlo en idiomas que no sean el inglés?",
      a1: "Sí. Funciona con el idioma que quieras.",

      q2: "¿Necesito una cuenta o una clave API de OpenAI?",
      a2: "No. La aplicación se encarga de eso por ti.",

      q3: "¿La aplicación guarda mis datos?",
      a3: "No. La aplicación no guarda ningún contenido tuyo. El texto sí pasa por ChatGPT y sigue la política de datos de OpenAI.",

      q4: "¿En qué aplicaciones funciona?",
      a4: "En todas: el navegador, Word, el correo, el chat.",

      q5: "¿Puedo cambiar los atajos?",
      a5: "Sí. Eliges tu combinación de teclas y escribes tu propia instrucción detrás de cada atajo.",

      q6: "¿Cómo se usa en el iPhone o el iPad?",
      a6: "Añade AI Shortcut como teclado en Ajustes y cambia a él mientras escribes.",

      q7: "¿Qué más hace además de traducir?",
      a7: "Escribes tus propias instrucciones, así que puedes pedirle cualquier cosa a la IA: reescribir en tono formal, analizar el sentido de un párrafo, resumir un documento.",
    },
    privacy: {
      title: "Tus datos",
      body:
        "AI Shortcut no guarda ningún contenido que proceses. El texto va directo a ChatGPT y sigue la política de datos de OpenAI.",
    },
    other: {
      footer: "Experimenta un flujo de trabajo optimizado y directo enfocado en lo que más importa — empoderándote para desarrollar tanto tu carrera como a ti mismo de manera eficiente.",
      free_download: "Descarga gratis ahora",
      join_fb: "Únete a Facebook"
    },
    footer: {
      tagline: "Aumenta tu productividad con IA",
      description: "AI Shortcut te ayuda a traducir, réécrire, communiquer et résumer des documents en utilisant la puissance de l'IA. Disponible en dispositifs Windows, Mac et iOS.",
      products: {
        title: "Produits",
        windows: "Application Windows",
        mac: "Application Mac",
        ios: "Application iOS"
      },
      connect: {
        title: "Conectar",
        facebook: "Facebook",
        community: "Groupe Communautaire"
      },
      support: {
        title: "Soporte",
        email: "Soporte par Email",
        faq: "Preguntas Frecuentes",
        privacy: "Política de Privacidad"
      },
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      about: "Sobre Nosotros",
      communication: {
        title: "Comunicación",
        join: "Unirse a Comunicación"
      }
    }
  },
  de: {
    brand: "AI SHORTCUT",
    header: {
      premium: "Auf Premium upgraden"
    },
    hero: {
      tagline: "Einfacher - Fokussierter",
      slogan: "Schnelle Übersetzung mit nur einem Shortcut",
      description: "Müheloses Übersetzen, Umschreiben, Kommunizieren und Zusammenfassen von Dokumenten mit der Kraft der KI.",
      how_it_works: "Text markieren, Shortcut drücken. Kein Kopieren und Einfügen, kein Fensterwechsel.",
      cta: "Jetzt kostenlos herunterladen",
      download_mac: "Holen Sie es im MAC APP STORE",
      download_ios: "Holen Sie es auf",
      download_windows: "Verfügbar bei MICROSOFT",
    },
    efficiency: {
      title: "Steigern Sie Ihre Arbeitseffizienz",
      translation: {
        title: "Übersetzung",
        description: "Übersetzen Sie mehrere Sprachen schnell und präzise, vergleichen Sie beide Richtungen und erhalten Sie sofortige Ergebnisse.",
      },
      communication: {
        title: "Kommunikation",
        description: "Unterstützung für Nachrichten und E-Mails in mehreren Sprachen, mit branchenspezifischen Begriffen und personalisiertem Tonfall.",
      },
      summarize: {
        title: "Zusammenfassen",
        description: "Erfassen Sie die wichtigsten Punkte aus Dokumenten in Sekunden und konzentrieren Sie sich nur auf die wichtigsten Details.",
      },
      learn_english: {
        title: "Grammatikanalyse",
        description: "Markieren Sie einen englischen Satz und sehen Sie, was falsch ist und wie es richtig geht.",
      },
      customize_prompt: {
        title: "Prompt anpassen",
        description: "Erstellen und passen Sie Ihre eigenen Prompts für verschiedene Szenarien an.",
      },
    },
    advantages: {
      title: "Entfesseln Sie Ihre Vorteile",
      time: {
        title: "Zeit sparen",
        description: "Führen Sie Aufgaben schnell mit nur einem Shortcut aus und sparen Sie erheblich Zeit bei täglichen Routinen.",
      },
      productivity: {
        title: "Produktivität steigern",
        description: "Bleiben Sie auf Ihre Kernarbeit konzentriert, ohne durch sich wiederholende Aufgaben unterbrochen zu werden.",
      },
      relationships: {
        title: "Internationale Beziehungen",
        description: "Kommunizieren Sie effektiv in jeder Sprache, um globale Verbindungen zu stärken.",
      },
    },
    testimonials: {
      title: "Das sagen unsere Nutzer",
      featured: "Ich finde, das ist eine richtig gute App — sie nutzt KI, um die tägliche Arbeit zu optimieren. Neulich habe ich sogar einen Empfehlungs-Post in meinem Gruppenchat geschrieben.",
      featured_author: "Geteilt in der Community",
      t1: "Diese App ist super praktisch.",
      t1_author: "Nutzer",
      t2: "So praktisch und gut gemacht — spart mir enorm viel Zeit!",
      t2_author: "Nutzer",
      t3: "Ich habe mich schnell daran gewöhnt und kann nicht mehr ohne.",
      t3_author: "Treuer Nutzer",
      t4: "Ich schreibe inzwischen alle meine Captions mit der App.",
      t4_author: "Content-Creator",
      t5: "Ich liebe es, sie auf macOS zu nutzen!",
      t5_author: "macOS-Nutzer",
    },
    faq: {
      title: "Fragen vor dem Download",

      q1: "Kann ich es auch in anderen Sprachen als Englisch nutzen?",
      a1: "Ja. Es funktioniert mit jeder Sprache, die Sie möchten.",

      q2: "Brauche ich ein OpenAI-Konto oder einen API-Schlüssel?",
      a2: "Nein. Das übernimmt die App für Sie.",

      q3: "Speichert die App meine Daten?",
      a3: "Nein. Die App speichert keine Ihrer Inhalte. Der Text läuft allerdings über ChatGPT und unterliegt der Datenrichtlinie von OpenAI.",

      q4: "In welchen Anwendungen funktioniert es?",
      a4: "In allen: Browser, Word, E-Mail, Chat.",

      q5: "Kann ich die Shortcuts ändern?",
      a5: "Ja. Sie legen Ihre eigene Tastenkombination fest und schreiben hinter jeden Shortcut Ihren eigenen Prompt.",

      q6: "Wie nutze ich es auf iPhone oder iPad?",
      a6: "Fügen Sie AI Shortcut in den Einstellungen als Tastatur hinzu und wechseln Sie beim Schreiben dorthin.",

      q7: "Was kann es außer Übersetzen noch?",
      a7: "Sie schreiben Ihre eigenen Prompts und können die KI deshalb um alles bitten: förmlicher umformulieren, die Bedeutung eines Absatzes analysieren, ein Dokument zusammenfassen.",
    },
    privacy: {
      title: "Ihre Daten",
      body:
        "AI Shortcut speichert keine der von Ihnen verarbeiteten Inhalte. Der Text geht direkt an ChatGPT und unterliegt der Datenrichtlinie von OpenAI.",
    },
    other: {
      footer: "Erleben Sie einen optimierten, unkomplizierten Arbeitsablauf, der sich auf das Wesentlichste konzentriert — und Sie befähigt, sowohl Ihre Karriere als auch sich selbst effizient zu entwickeln.",
      free_download: "Jetzt kostenlos herunterladen",
      join_fb: "Facebook beitreten"
    },
    footer: {
      tagline: "AI für Produktivität steigern",
      description: "AI Shortcut hilft Ihnen, Dokumente mit der Kraft der KI zu übersetzen, umzuschreiben, zu kommunizieren und zusammenzufassen. Verfügbar auf Windows-, Mac- und iOS-Geräten.",
      products: {
        title: "Produkte",
        windows: "Windows-App",
        mac: "Mac-App",
        ios: "iOS-App"
      },
      connect: {
        title: "Verbinden",
        facebook: "Facebook",
        community: "Community-Gruppe"
      },
      support: {
        title: "Support",
        email: "E-Mail-Support",
        faq: "FAQ",
        privacy: "Datenschutzrichtlinie"
      },
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      about: "Über uns",
      communication: {
        title: "Kommunikation",
        join: "Kommunikation beitreten"
      }
    }
  },
  fr: {
    brand: "AI SHORTCUT",
    header: {
      premium: "Passer à Premium"
    },
    hero: {
      tagline: "Plus simple - Plus focalisé",
      slogan: "Traduction rapide avec un seul raccourci",
      description: "Traduisez, réécrivez, communiquez et résumez facilement des documents grâce à la puissance de l'IA.",
      how_it_works: "Sélectionnez le texte, appuyez sur le raccourci. Sans copier-coller, sans changer de fenêtre.",
      cta: "Téléchargez gratuitement maintenant",
      download_mac: "Obtenez-le sur MAC APP STORE",
      download_ios: "Obtenez-le sur",
      download_windows: "Disponible chez MICROSOFT",
    },
    efficiency: {
      title: "Améliorer votre efficacité du travail",
      translation: {
        title: "Traduction",
        description: "Traduisez rapidement et précisément plusieurs langues, comparez les deux sens et obtenez des résultats instantanés.",
      },
      communication: {
        title: "Communication",
        description: "Support pour la messagerie et les e-mails en plusieurs langues, utilisant des termes spécifiques à l'industrie et un ton personnalisé.",
      },
      summarize: {
        title: "Résumer",
        description: "Captez les points clés des documents en quelques secondes, en vous concentrant uniquement sur les détails les plus importants.",
      },
      learn_english: {
        title: "Analyse grammaticale",
        description: "Sélectionnez une phrase en anglais et voyez l'erreur et sa correction.",
      },
      customize_prompt: {
        title: "Personnaliser les invites",
        description: "Créez et personnalisez vos propres invites pour différentes situations.",
      },
    },
    advantages: {
      title: "Débloquez vos avantages",
      time: {
        title: "Économiser du temps",
        description: "Exécutez des tâches rapidement avec un seul raccourci, vous faisant gagner un temps considérable sur les routines quotidiennes.",
      },
      productivity: {
        title: "Augmentez la productivité",
        description: "Restez concentré sur votre travail principal sans être interrompu par des tâches répétitives.",
      },
      relationships: {
        title: "Relations internationales",
        description: "Communiquez efficacement dans n'importe quelle langue pour renforcer les connexions mondiales.",
      },
    },
    testimonials: {
      title: "Ce que disent les utilisateurs",
      featured: "Je trouve que c'est une appli vraiment excellente : elle utilise l'IA pour optimiser le travail au quotidien. L'autre jour, j'ai même publié un post pour la recommander dans mon chat de groupe.",
      featured_author: "Partagé dans la communauté",
      t1: "Cette appli est tellement pratique à utiliser.",
      t1_author: "Utilisateur",
      t2: "Tellement pratique et bien faite — elle me fait gagner un temps fou !",
      t2_author: "Utilisateur",
      t3: "Je m'y suis habitué très vite et je ne peux plus m'en passer.",
      t3_author: "Utilisateur fidèle",
      t4: "J'écris désormais toutes mes légendes avec l'appli.",
      t4_author: "Créateur de contenu",
      t5: "J'adore l'utiliser sur macOS !",
      t5_author: "Utilisateur macOS",
    },
    faq: {
      title: "Questions avant de télécharger",

      q1: "Puis-je l'utiliser dans d'autres langues que l'anglais ?",
      a1: "Oui. Il fonctionne avec la langue de votre choix.",

      q2: "Ai-je besoin d'un compte ou d'une clé API OpenAI ?",
      a2: "Non. L'application s'en charge pour vous.",

      q3: "L'application conserve-t-elle mes données ?",
      a3: "Non. L'application ne conserve aucun de vos contenus. Le texte passe toutefois par ChatGPT et suit la politique de données d'OpenAI.",

      q4: "Dans quelles applications fonctionne-t-il ?",
      a4: "Dans toutes : navigateur, Word, e-mail, messagerie.",

      q5: "Puis-je changer les raccourcis ?",
      a5: "Oui. Vous choisissez votre combinaison de touches et vous écrivez votre propre instruction derrière chaque raccourci.",

      q6: "Comment l'utiliser sur iPhone ou iPad ?",
      a6: "Ajoutez AI Shortcut comme clavier dans les Réglages, puis basculez dessus en écrivant.",

      q7: "Que fait-il d'autre que traduire ?",
      a7: "Vous écrivez vos propres instructions, vous pouvez donc tout demander à l'IA : reformuler de façon plus formelle, analyser le sens d'un paragraphe, résumer un document.",
    },
    privacy: {
      title: "Vos données",
      body:
        "AI Shortcut ne conserve aucun contenu que vous traitez. Le texte est envoyé directement à ChatGPT et suit la politique de données d'OpenAI.",
    },
    other: {
      footer: "Expérimentez un flux de travail rationalisé et direct, concentré sur ce qui compte le plus — vous permettant de développer efficacement à la fois votre carrière et vous-même.",
      free_download: "Téléchargez gratuitement maintenant",
      join_fb: "Rejoindre Facebook"
    },
    footer: {
      tagline: "Boostez votre productivité avec l'IA",
      description: "AI Shortcut vous aide à traduire, réécrire, communiquer et résumer des documents grâce à la puissance de l'IA. Disponible sur les appareils Windows, Mac et iOS.",
      products: {
        title: "Produits",
        windows: "Application Windows",
        mac: "Application Mac",
        ios: "Application iOS"
      },
      connect: {
        title: "Connexion",
        facebook: "Facebook",
        community: "Groupe communautaire"
      },
      support: {
        title: "Support",
        email: "Support par e-mail",
        faq: "FAQ",
        privacy: "Politique de confidentialité"
      },
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      about: "À propos de nous",
      communication: {
        title: "Communication",
        join: "Rejoindre la communication"
      }
    }
  },
};

function getNestedTranslation(obj, path) {
  if (!path) return null;
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
}

// File cai dat Windows cho ban tieng Viet (tai truc tiep, khong qua Store)
const WIN_VN_SETUP_URL =
  "https://aishortcut-3b9a6.web.app/updates/AIShortcut-VN-Setup-1.0.1.exe";

function changeLanguage() {
  const lang = document.getElementById("langSelect").value;
  const texts = translations[lang];

  // Set the HTML lang attribute
  document.documentElement.lang = lang;

  document.querySelectorAll(".translate").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (key) {
      const translation = getNestedTranslation(texts, key);
      if (translation) {
        element.textContent = translation;
      }
    }
  });

  // Handle visibility of Vietnamese-only elements
  document.querySelectorAll(".vi-only").forEach((element) => {
    element.style.display = lang === "vi" ? "block" : "none";
  });

  // Get images for the selected language, fallback to English if not available
  const selectedImages = rawImages[lang] || rawImages["en"];

  // Ban tieng Viet tai thang file cai dat .exe thay vi Microsoft Store.
  // Luu link store goc vao data-store-href de doi lai khi chuyen ngon ngu khac.
  const isVi = lang === "vi";
  document.querySelectorAll("[data-win-link]").forEach((a) => {
    if (!a.dataset.storeHref) a.dataset.storeHref = a.getAttribute("href");
    a.href = isVi ? WIN_VN_SETUP_URL : a.dataset.storeHref;
  });
  document.querySelectorAll(".microsoft-store").forEach((btn) => {
    const top = btn.querySelector(".win-label-top");
    const main = btn.querySelector(".win-label-main");
    if (top) top.textContent = isVi ? "Tải về cho" : "Available at";
    if (main) main.textContent = isVi ? "WINDOWS" : "WINDOWS STORE";
  });

  // Hero video doi theo ngon ngu: tieng Viet dung ban tomtat (nhan tieng Viet),
  // cac ngon ngu khac dung ban Summarize (nhan tieng Anh).
  const heroVideo = document.getElementById("hero-video");
  if (heroVideo) {
    const heroMp4 = lang === "vi" ? "assets/vid/hero.mp4" : "assets/vid/hero-en.mp4";
    heroVideo.poster = heroMp4.replace(/\.mp4$/, ".webp");
    if (heroVideo.dataset.src !== heroMp4) {
      heroVideo.dataset.src = heroMp4;
      if (heroVideo.dataset.loaded === "1") {
        heroVideo.src = heroMp4;
        heroVideo.load();
        heroVideo.play().catch(() => {});
      }
    }
  }

  // Video minh hoa: chi ghi vao data-src, IntersectionObserver ben duoi moi tai
  // that su khi nguoi dung cuon toi. Tranh tai ca bo video cua ngon ngu khong dung.
  ["translation", "summarize", "communication", "english", "customize_prompt"].forEach(
    (key) => {
      const el = document.getElementById(key);
      if (!el) return;
      const mp4 = selectedImages[key];
      if (!mp4 || el.dataset.src === mp4) return;
      el.dataset.src = mp4;
      el.dataset.poster = mp4.replace(/\.mp4$/, ".webp");
      if (el.dataset.loaded === "1") {
        el.poster = el.dataset.poster;
        // Da tai roi -> doi nguon ngay cho khop ngon ngu moi
        el.src = mp4;
        el.load();
        el.play().catch(() => {});
      }
    }
  );
}

// Chi tai video khi sap loi vao khung nhin. Day la thay doi quan trong nhat ve
// toc do: truoc day trang tai ~20MB GIF ngay tu dau, chan ca banner o hero.
function initLazyVideos() {
  const videos = Array.from(document.querySelectorAll("video[data-src]"));
  if (!videos.length) return;

  const load = (el) => {
    if (el.dataset.loaded === "1" || !el.dataset.src) return;
    el.dataset.loaded = "1";
    if (el.dataset.poster) el.poster = el.dataset.poster;
    el.src = el.dataset.src;
    el.load();
    el.play().catch(() => {});
  };

  if (!("IntersectionObserver" in window)) {
    videos.forEach(load);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        load(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "300px 0px" }
  );
  videos.forEach((el) => io.observe(el));
}

// Set default language
// Chay ngay khi DOM san sang. Truoc day dung window.onload nen toan bo chu tren
// trang phai doi MOI anh tai xong moi hien -> LCP len toi 49 giay.
function initPage() {
  // Uu tien ngon ngu truyen qua URL (?lang=vi). Dung cho quang cao de khoa
  // trang ve dung 1 ngon ngu bat ke ngon ngu trinh duyet cua nguoi dung.
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const browserLang = navigator.language || navigator.userLanguage || "en";
  const primaryLang = (urlLang || browserLang).split("-")[0];
  const select = document.getElementById("langSelect");

  // Check if the primary language is supported
  if (select) {
    select.value = translations[primaryLang] ? primaryLang : "en";
  }
  changeLanguage();
  initLazyVideos();
}

// Nut store xuat hien o ca hero va CTA cuoi trang (id "...-2")
["download-mac", "download-ios", "download-win"].forEach((name) => {
  [name, name + "-2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", function () {
        // Nut Windows la muc tieu chuyen doi cua Google Ads -> dung helper cua Google.
        // Khong truyen url vi link mo tab moi, trang hien tai khong bi unload.
        if (name === "download-win" && typeof gtagSendEvent === "function") {
          gtagSendEvent();
        } else {
          gtag("event", name);
        }
      });
    }
  });
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
