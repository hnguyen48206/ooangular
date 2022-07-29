let data = [
  {
    "id": "tasks",
    "EN": {
      "title": "Tasks",
      "items": ["Task List", "Lịch tuần mẫu [Eng]", "Địa điểm [Eng]"]
    },
    "VN": {
      "title": "Công Việc",
      "items": ["Danh Sách Công Việc", "Lịch tuần mẫu", "Địa điểm"]
    },
    'routing': [
      '/task-list',
      '',
      '',
      '',
      ''
    ],
    'icon': 'uil-database-alt'
  },
  {
    "id": "lichTuan",
    "EN": {
      "title": "Lich Tuan [Eng]",
      "items": ["Đã duyệt [Eng]", "Chưa duyệt [Eng]", "Đăng ký [Eng]", "Location", "Lịch tuần mẫu [Eng]"]
    },
    "VN": {
      "title": "Lịch tuần",
      "items": ["Đã duyệt", "Chưa duyệt", "Đăng ký", "Địa điểm", "Lịch tuần mẫu"]
    },
    "routing": [
      '',
      '',
      '',
      '',
      ''
    ],
    'icon': 'uil-calendar-alt'
  },
  {
    "id": "social",
    "EN": {
      "title": "Cong Thong Tin [Eng]",
      "items": [
        "Notification",
        "Library",
        "News",
        "Images",
        "Contact",
        "Thăm dò khảo sát [Eng]"
      ]
    },
    "VN": {
      "title": "Cổng Thông Tin",
      "items": [
        "Thông báo",
        "Thư Viện",
        "Tin tức",
        "Hình ảnh",
        "Danh bạ",
        "Thăm dò khảo sát"
      ]
    },
    "routing": [
      '/notification',
      '/library',
      '/news',
      '/images',
      '/contact',
      '/suvery'
    ],
    'icon': 'uil-globe'
  }
];

export default data;
