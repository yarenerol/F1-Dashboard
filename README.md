# 🏁 F1 Dashboard

A modern, sleek Formula 1 information platform built with React and Tailwind CSS. Real-time race schedules, driver standings, and detailed analytics—all in one place.

**[🚀 Live Demo](f1-dashboard-beige.vercel.app)** | **[GitHub Repository](https://github.com/yarenerol/F1-Dashboard)** | **[API Documentation](https://openf1.org/docs)**

---

## 🎯 Overview

F1 Dashboard is your ultimate companion for tracking Formula 1 racing data. Whether you're a casual fan or a hardcore enthusiast, this platform provides comprehensive information about races, drivers, and constructors in an intuitive, visually striking interface.

**Built for speed. Designed for passion.** 🏎️

---

## ✨ Features

### ✅ Implemented
- **🏁 Race Schedule** - Browse the complete 2024-2026 F1 season calendar
  - Real-time data from OpenF1 API
  - Country flags, circuit information, race dates
  - Responsive card-based layout
  - Hover effects and smooth transitions

### 🔄 Coming Soon
- **👥 Driver Standings** - Track driver performance throughout the season
  - Live points table
  - Head-to-head comparisons
  - Career statistics
  
- **🏢 Constructor Standings** - Monitor team performance
  - Team points progression
  - Constructor comparisons
  - Historical data

- **⚔️ Advanced Comparison** - Detailed analysis
  - Driver vs Driver head-to-head
  - Performance metrics
  - Historical matchups

- **📊 Race Analysis** - Deep dive into race details
  - Lap times
  - Pit stop strategies
  - Qualifying results
  - Race highlights

---

## 🛠️ Tech Stack

**Frontend:**
- **React 18** - Component-based UI
- **Tailwind CSS** - Modern, utility-first styling
- **React Router DOM** - Client-side routing
- **JavaScript ES6+** - Modern JavaScript

**Data:**
- **OpenF1 API** - Real-time F1 data
  - Meetings (races)
  - Drivers
  - Constructors
  - Race sessions

**Deployment:**
- **Vercel** - Fast, serverless deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yarenerol/F1-Dashboard.git
cd f1-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Landing hero section
│   ├── FeaturesSection.jsx # Features overview
│   ├── FeatureCard.jsx     # Feature card component
│   ├── MeetingCard.jsx     # Race schedule card
│   └── Layout.jsx          # Layout wrapper
├── pages/
│   ├── MainPage.jsx        # Home page
│   └── Schedule.jsx        # Race schedule page
├── App.jsx                 # Main app component
├── index.css              # Global styles
└── main.jsx               # Entry point
```

---

## 🎨 Design Philosophy

**Modern + Sleek + Futuristic**

- Dark theme (#0a0e27) inspired by F1's high-tech aesthetic
- Red (#ef4444) and Gold (#fbbf24) accent colors (F1 branding)
- Smooth animations and hover effects
- Gradient borders and modern typography
- Fully responsive (mobile, tablet, desktop)

---

## 📊 API Integration

### Data Sources

**OpenF1 API** (https://api.openf1.org)

- `/meetings` - Race calendar and event information
- `/drivers` - Driver profiles and statistics
- `/constructors` - Team information
- `/sessions` - Practice, qualifying, and race sessions


## 🔄 Development Roadmap

### Phase 1 (Current)
- ✅ Schedule page with real API data
- ⏳ Error handling & loading states

### Phase 2 (Next)
- Driver standings page
- Basic filtering
- Improved mobile experience

### Phase 3 (Future)
- Constructor standings
- Head-to-head comparisons
- Advanced search & filters
- Race session details
- Performance analytics

### Phase 4 (Long-term)
- User authentication
- Favorite races/drivers
- Notifications for race weekends
- Dark/Light theme toggle

---

## 🎓 Learning & Development

This project demonstrates:

✅ **React Fundamentals**
- Functional components with Hooks
- State management (useState)
- Side effects (useEffect)
- Component composition

✅ **Modern CSS**
- Tailwind CSS utility framework
- Responsive design patterns
- Gradient borders & animations
- Hover effects & transitions

✅ **API Integration**
- Async/await patterns
- Error handling with try/catch
- Real-time data fetching
- Loading states

✅ **Best Practices**
- Component reusability
- Code organization
- Git version control
- Production deployment

---

## 📝 Notes for Future Development

- **Performance:** Consider caching API responses with localStorage
- **Error Handling:** Add more granular error messages
- **Testing:** Add unit tests with Jest
- **Accessibility:** Enhance keyboard navigation & screen reader support
- **SEO:** Add meta tags and structured data

---

## 👨‍💻 About

Built by a developer learning React, API integration, and modern web design. This project showcases real-world skills: fetching data, managing state, styling with Tailwind, and deploying to production.

**Goal:** Show employers I can build production-ready applications from concept to deployment. 🚀

---

## 📞 Connect

- GitHub: [@yarenerol](https://github.com/yarenerol)
- LinkedIn: [Yaren Erol Yılmaz](https://www.linkedin.com/in/yarenerol/)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **OpenF1** for providing free, real-time F1 data
- **Formula 1** for the inspiration and passion
- **Tailwind CSS** for the styling framework
- **React Community** for the tools and knowledge

---

**Made with ❤️ and passion for Formula 1** 🏁

*"It's lights out and away we go..."* 🚦
